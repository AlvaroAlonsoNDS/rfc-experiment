<ul>
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
  <li>
    <a href="{{ sitepage.url }}"> {{ sitepage.title }}</a> Path: {{sitepage.path}}
  </li>
{% endfor %}
</ul>
