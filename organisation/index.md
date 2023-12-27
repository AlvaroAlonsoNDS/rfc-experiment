# RFCs

{% assign sitepages = site.pages | sort: 'order' %}

## Global

## Domain 1

### Product 1

### Team 1

<table>
  <tr>
    <th>Title</th>
    <th>Author</th>
    <th>Status</th>
  </tr>
  {% for sitepage in sitepages %}
    {% if sitepage.path contains 'domain1/team1' and sitepage.visibility == 'public' %}
  <tr>
    <td><a href="/rfc-experiment{{ sitepage.url }}"> {{ sitepage.title }}</a></td>
    <td>{{ sitepage.author }}</td>
    <td>{{ sitepage.status }}</td>
  </tr>
    {% endif %}
  {% endfor %}
</table>

## Domain 2

## Domain 3
