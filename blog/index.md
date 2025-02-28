---
layout: home
title: "Blog"
---
{% for category in site.categories %}
  - [{{ category | first }}](/categories/{{ category | first }}/)
{% endfor %}
