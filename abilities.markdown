---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Abilities
---

<script src="{{ site.baseurl }}/abilities.js" defer></script>

Filter the list:

<select name="abilities" id="abilities-select">
    <option value="">--Please choose an option--</option>
    <option value="self">Self</option>
    <option value="target">Target</option>
</select>

{% for ability in site.data.abilities.abilities %}
<div class="ability">
    <div class="ability-name">
    {{ ability.name }}
    </div>
    <div class="ability-text">
    {{ ability.text }}
    </div>
    {% if ability.cost > 0 %}
    <div>
        Cost: {{ ability.cost }}
    </div>
    {% endif %}
    <div>
        Actions: {{ ability.actions }}
    </div>
    <div class="ability-tags">
        Tags: {{ ability.tags }}
    </div>
</div>
{% endfor %}
