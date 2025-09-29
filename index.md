---
layout: default
title: "Campaign Timelines"
---

<main>
  <h1>Campaigns</h1>

  <p>Here are the documented adventures from our tabletop sessions. Choose a timeline to begin.</p>

  <div class="campaign-list">
  {% for collection in site.collections %}
    {% if collection.title %}
      <div class="campaign-card">
        {% if collection.icon %}
          <a href="{{ site.baseurl }}/{{ collection.label }}/">
            <img src="{{ collection.icon | relative_url }}" alt="{{ collection.title }} Icon" class="campaign-icon">
          </a>
        {% endif %}
        <div class="campaign-card-content">
          <h2><a href="{{ site.baseurl }}/{{ collection.label }}/">{{ collection.title }}</a></h2>
          <p>A complete timeline of events from the {{ collection.title }} campaign.</p>
        </div>
      </div>
    {% endif %}
  {% endfor %}
  </div>
</main>