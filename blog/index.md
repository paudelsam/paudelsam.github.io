---
layout: default
title: "Blog"
---

<h1>Recent Posts</h1>
<div class="blog-container">
  <aside class="sidebar">
    <ul>
      {% for post in site.posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </aside>
</div>
