<h1>My Blog</h1>
<div class="blog-container">
  <aside class="sidebar">
    <h2>Recent Posts</h2>
    <ul>
      {% for post in site.posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </aside>
</div>
