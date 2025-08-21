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
    <option value="technique">Technique</option>
    <option value="spell">Spell</option>
    <option value="heal">Heal</option>
    <option value="self">Self</option>
    <option value="target">Target</option>
    <option value="buff">Buff</option>
    <option value="debuff">DeBuff</option>
    <option value="shadow">Shadow</option>
    <option value="arcane">Arcane</option>
    <option value="cold">Cold</option>
</select>

{% for ability in site.data.abilities.abilities %}
<div class="entry">
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
            Tags:
            {% for tag in ability.tags %}
                {{ tag }}
            {% endfor %}
        </div>
    </div>
    {% for mastery in ability.masteries %}
    <div class="mastery">
        <div class="mastery-name">
            {{ mastery.name }}
        </div>
        <div class="mastery-text">
            {{ mastery.text }}
        </div>
    </div>
    {% endfor %}
</div>
{% endfor %}
