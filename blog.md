---
layout: main
title: Blog
description: "Thoughts, learning notes, and updates on legal technology, cybersecurity, and software development from Dean Normington."
---

<section class="blog-section">
  <div class="blog-header">
    <h1>Blog</h1>
    <p>Thoughts, builds, and learning notes grouped by category for better discovery.</p>
  </div>

  <div class="blog-filter">
    <p>Jump to:</p>
    <div class="filter-buttons">
      {% assign featured_categories = "Legal Tech,Software Development,Cybersecurity" | split: "," %}
      {% for category in featured_categories %}
        <a class="filter-pill" href="#{{ category | downcase | replace: " ", "-" }}">{{ category }}</a>
      {% endfor %}
      <a class="filter-pill" href="#all-posts">All posts</a>
    </div>
  </div>

{% assign featured_categories = "Legal Tech,Software Development,Cybersecurity" | split: "," %}
{% for category in featured_categories %}
{% assign slug = category | downcase | replace: " ", "-" %}
{% assign category_posts = site.posts | where_exp: "post", "post.categories contains category" %}

<section id="{{ slug }}" class="category-section">
  <h2>{{ category }}</h2>
  {% if category_posts.size > 0 %}
  <div class="posts-list">
    {% for post in category_posts %}
    <article class="post-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.tags %} • {{ post.tags | join: ", " }}{% endif %}</p>
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      <p><a class="read-more" href="{{ post.url | relative_url }}">Read more →</a></p>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="empty-category">No posts published in this topic yet. Check back soon.</p>
  {% endif %}
</section>
{% endfor %}

<section id="all-posts" class="category-section">
  <h2>All posts</h2>
  {% if site.posts and site.posts.size > 0 %}
  <div class="posts-list">
    {% for post in site.posts %}
    <article class="post-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
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
</section>
