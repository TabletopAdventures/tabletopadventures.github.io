---
layout: default
title: "Campaign Timelines"
---

<main>
  <h1>Campaigns</h1>
  <input type="text" id="homeSearch" placeholder="Filter by Gamemaster or Campaign...">
  <p>Here are the documented adventures from our tabletop sessions. Choose a timeline to begin.</p>

  {% assign campaigns = site.collections | where_exp: "item", "item.title" %}
  {% assign campaigns_with_gm = campaigns | where_exp: "item", "item.gm" %}
  {% assign campaigns_without_gm = campaigns | where_exp: "item", "item.gm == nil" %}
  {% assign campaigns_by_gm = campaigns_with_gm | group_by: "gm" | sort_natural: "name" %}
  
  {% for gm_group in campaigns_by_gm %}
    <div class="gm-group">
      <h3>
        <span class="gm-label">Gamemaster:</span>
        <span>{{ gm_group.name }}</span>
      </h3>
      <div class="campaign-list">
        {% assign sorted_items = gm_group.items | sort_natural: "title" %}
        {% for collection in sorted_items %}
          <div class="campaign-card">
            {% if collection.icon %}
              <a href="{{ site.baseurl }}/{{ collection.label }}/">
                <img src="{{ collection.icon | relative_url }}" alt="{{ collection.title }} Icon" class="campaign-icon">
              </a>
            {% endif %}
            <div class="campaign-card-content">
              <h2><a href="{{ site.baseurl }}/{{ collection.label }}/">{{ collection.title }}</a></h2>
              {% if collection.description %}
                <p>{{ collection.description }}</p>
              {% else %}
                <p>A complete timeline of events from the {{ collection.title }} campaign.</p>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}

  {% if campaigns_without_gm.size > 0 %}
    <div class="gm-group">
      <h3>None</h3>
      <div class="campaign-list">
        {% assign sorted_items_none = campaigns_without_gm | sort_natural: "title" %}
        {% for collection in sorted_items_none %}
          <div class="campaign-card">
            {% if collection.icon %}
              <a href="{{ site.baseurl }}/{{ collection.label }}/">
                <img src="{{ collection.icon | relative_url }}" alt="{{ collection.title }} Icon" class="campaign-icon">
              </a>
            {% endif %}
            <div class="campaign-card-content">
              <h2><a href="{{ site.baseurl }}/{{ collection.label }}/">{{ collection.title }}</a></h2>
              {% if collection.description %}
                <p>{{ collection.description }}</p>
              {% else %}
                <p>A complete timeline of events from the {{ collection.title }} campaign.</p>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endif %}

</main>
<script src="{{ '/assets/js/search-home.js' | relative_url }}"></script>