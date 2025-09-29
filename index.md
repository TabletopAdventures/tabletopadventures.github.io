---
# No layout needed for the homepage, or use 'default'
layout: default
title: "Campaign Timelines"
---

# Campaigns

Here are the documented adventures from our tabletop sessions. Choose a timeline to begin.

<main>
  <div class="campaign-list">
  {% for collection in site.collections %}
  {% unless collection.label == "posts" %}
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
  {% endunless %}
  {% endfor %}
  </div>
</main>