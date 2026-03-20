const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const cache = require("gulp-cache");
const cp = require("child_process");
const browserSync = require("browser-sync");

const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

// Build the Jekyll Site
function jekyllBuild(done) {
  return cp.spawn(jekyll, ["build"], { stdio: "inherit" }).on("close", done);
}

// Rebuild Jekyll and page reload
function jekyllRebuild(done) {
  jekyllBuild(() => {
    browserSync.reload();
    done();
  });
}

// Wait for jekyll-build, then launch the Server
function browserSyncServe(done) {
  browserSync({
    server: {
      baseDir: "_site",
    },
    notify: false,
  });
  done();
}

// Compile files
function compileSass() {
  return gulp
    .src("assets/css/scss/main.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError),
    )
    .pipe(
      prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }),
    )
    .pipe(gulp.dest("_site/assets/css"))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest("assets/css"));
}

// Compression images
function compressImages() {
  return gulp
    .src("assets/img/**/*")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()],
        }),
      ),
    )
    .pipe(gulp.dest("_site/assets/img"))
    .pipe(browserSync.reload({ stream: true }));
}

// Watch scss, html, img files
function watchFiles() {
  gulp.watch("assets/css/scss/**/*.scss", compileSass);
  gulp.watch("assets/js/**/*.js", jekyllRebuild);
  gulp.watch("assets/img/**/*", compressImages);
  gulp.watch(
    [
      "*.html",
      "_layouts/*.html",
      "_includes/*.html",
      "_pages/*.html",
      "_posts/*",
    ],
    jekyllRebuild,
  );
}

// Define tasks
gulp.task("jekyll-build", jekyllBuild);
gulp.task("jekyll-rebuild", jekyllRebuild);
gulp.task(
  "browser-sync",
  gulp.series(
    gulp.parallel(compileSass, compressImages, jekyllBuild),
    browserSyncServe,
  ),
);
gulp.task("sass", compileSass);
gulp.task("img", compressImages);
gulp.task(
  "watch",
  gulp.series(
    gulp.parallel(compileSass, compressImages, jekyllBuild),
    watchFiles,
  ),
);
gulp.task("default", gulp.series("browser-sync", "watch"));
