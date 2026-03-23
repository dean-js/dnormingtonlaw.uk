---
layout: main
title: Blog
---

<section class="blog-section">
  <h1>Blog</h1>
  <p>My thoughts and experiences on all different topics,Find all my different blog posts here.</p>
  {% if site.posts and site.posts.size > 0 %}
    <div class="posts-list">
      {% for post in site.posts %}
        <article class="post-item">
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.tags %} • {{ post.tags | join: ", " }}{% endif %}</p>
          <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
          <p><a class="read-more" href="{{ post.url | relative_url }}">Read more →</a></p>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p>No posts yet. Check back soon!</p>
  {% endif %}
</section>
