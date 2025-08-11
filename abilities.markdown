---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Abilities
---

{% for ability in site.data.abilities.abilities %}
<div>
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
</div>
{% endfor %}
