<ul>
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
  <li>
    <a href="{{ sitepage.url }}">{{ sitepage.title }}</a> - Visibility {{sitepage.visibility}}
  </li>
{% endfor %}
</ul>
