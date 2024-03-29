﻿export const abilities = [
  {
    "name": "Attack",
    "text": "Attack an enemy with your equipped weapon. Damage dealt is based on the weapon used.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 0
  },
  {
    "name": "Recover",
    "text": "Attempt to recover from a status effect. Roll 5 + [Spirit] and reduce the remaining power of a status effect by that amount.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "masteries": [
      {
        "name": "Juggernaut",
        "text": "Your shield's block is also added to your roll."
      }
    ]
  },
  {
    "name": "Heal",
    "text": "Target recovers [Healing] HP.",
    "cost": 1,
    "type": 2,
    "actions": 1,
    "range": 1,
    "school": 3,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Life Shield",
        "text": "Healing done to someone who has full health is converted to temporary hp."
      }
    ]
  },
  {
    "name": "Protect",
    "text": "Grant the target [Healing] temporary HP. Temporary HP do not stack with subsequent casts.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 3,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Hemostasis",
        "text": "While the temporary HP exist the target will ignore 1 point of ongoing damage each round."
      }
    ]
  },
  {
    "name": "Protection From Evil",
    "text": "Target gets +1 on all Defenses vs Status Effects and +1 to the power of Recover. This effect stacks with other bonuses to Defenses.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 3,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Unwavering Faith",
        "text": "Each time you are targeted by a status effect the bonus increases by 1."
      }
    ]
  },
  {
    "name": "Consecrate",
    "text": "Mark a 3x3 area centered on you. Allies that stand in the area get a +1 on Attack rolls. Lasts 1 hour.",
    "cost": 0,
    "type": 2,
    "actions": 3,
    "range": 0,
    "school": 3,
    "requires": "3 Spirit",
    "masteries": [
      {
        "name": "Holy Ground",
        "text": "The miss range of enemies standing in the area is increased by 2."
      }
    ]
  },
  {
    "name": "Magic Missile",
    "text": "Fires a bolt of pure magic energy at a target dealing [Magic] Arcane damage.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Barrage",
        "text": "You can spend Energy to fire additional missiles. Each Energy spent increases the number of missiles fired by 1. Limit 4 total missiles."
      },
      {
        "name": "Charge-Up",
        "text": "You can increase the casting time to add power to your missile. Each extra action increases the power by 2. Limit +4 bonus from this effect."
      }
    ]
  },
  {
    "name": "Ray of Frost",
    "text": "Fires a ray of ice and freezing air at the target dealing [Magic] + [Intelligence] Cold damage.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 2,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Brain Freeze",
        "text": "The Target's Magic is reduced by 1 until the end of your next turn."
      },
      {
        "name": "Brittle",
        "text": "Your crit range is increased by 1 against the target until the end of your next turn."
      }
    ]
  },
  {
    "name": "Eldritch Blast",
    "text": "Blasts the target with dark magic dealing 1.5 x [Magic] Shadow damage.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 4,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Temporary Insanity",
        "text": "If you score a critical hit with Eldritch Blast the target is also stunned. The power of the stun is equal to the damage dealt by the spell."
      }
    ]
  },
  {
    "name": "Harm",
    "text": "Deals [Healing] Shadow damage.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 1,
    "school": 4,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Transfer Harm",
        "text": "When you heal someone the power of your next Harm spell is increased by 1 for each 5 healing that was done. This bonus cannot exceed your [Healing]."
      }
    ]
  },
  {
    "name": "Life Link",
    "text": "You and your target are both affected by the next attack or spell that hits either of you. Effect ends after 1 hour or if you and your target are 1 mile apart.",
    "cost": 1,
    "type": 2,
    "actions": 1,
    "range": 1,
    "school": 4,
    "requires": "2 Spirit"
  },
  {
    "name": "Sleep",
    "text": "Roll [Magic] vs the target's Defense. If your roll is higher the target falls asleep.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 0,
    "requires": "2 Intelligence",
    "masteries": [
      {
        "name": "Lullaby",
        "text": "If the spell fails to put the target to sleep the power of the next cast is increased by 1. This effect stacks up to the caster's Intelligence."
      }
    ]
  },
  {
    "name": "Daze",
    "text": "Roll [Magic] vs the target's Defense. If your roll is higher the target is stunned.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 0,
    "requires": "2 Intelligence",
    "masteries": [
      {
        "name": "Stagger",
        "text": "When the target breaks free from the Daze effect their movement is reduced by half until the end of their next turn."
      }
    ]
  },
  {
    "name": "Censure",
    "text": "Roll [Healing] vs the target's Defense. If your roll is higher the target is stunned.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 3,
    "requires": "2 Spirit",
    "masteries": [
      {
        "name": "Spirit Shackle",
        "text": "You can temporarily sacrifice some of your Spirit to increase the power of Censure. You cannot reduce your Spirit below 0. The Spirit returns at the end of your next turn."
      }
    ]
  },
  {
    "name": "Healing Surge",
    "text": "Heal target for [Healing]. The target pays the Energy cost instead of the caster.",
    "cost": 1,
    "type": 2,
    "actions": 1,
    "range": 1,
    "school": 3,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Surge of Power",
        "text": "The target's Powers are increased by 2 for 1 round."
      }
    ]
  },
  {
    "name": "Smite",
    "text": "Attack an enemy for [Might] Holy damage. This cannot be blocked.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "1 Strength and 1 Spirit",
    "masteries": [
      {
        "name": "Retribution",
        "text": "The power of your next Smite is increased by 1 each time an ally within 6 squares takes direct damage from an attack or harmful spell."
      },
      {
        "name": "Righteousness",
        "text": "The power of Smite is increased by 2 when used against undead or demons."
      }
    ]
  },
  {
    "name": "Second Wind",
    "text": "Recover 5 + [Spirit] HP. You can only use this ability once per battle.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "masteries": [
      {
        "name": "Comeback",
        "text": "This ability now regenerates 1 Energy instead of costing 1 Energy."
      },
      {
        "name": "Resurgance",
        "text": "The healing from this ability is doubled."
      }
    ]
  },
  {
    "name": "Clobber",
    "text": "Roll [Might] vs target's Defense. If successful the target is stunned.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Strength",
    "masteries": [
      {
        "name": "Bully",
        "text": "The power of your attacks is increased by 1 against stunned targets."
      }
    ]
  },
  {
    "name": "Heroic Strike",
    "text": "Attack for 1.5 x [Might] damage.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Strength",
    "masteries": [
      {
        "name": "Do or Die",
        "text": "The power of the attack is increased by 2 if you are under half health."
      }
    ]
  },
  {
    "name": "Flurry",
    "text": "Attack twice for [Precision] damage.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Agility",
    "masteries": [
      {
        "name": "Overwhelm",
        "text": "Your attacks ignore 1 Defense against any enemies hit by Flurry until the end of your next turn. This effect stacks"
      }
    ]
  },
  {
    "name": "Slam",
    "text": "Attack for [Might] damage. If successful the target is also knocked back 1 square.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Devastating Slam",
        "text": "Slam also ignores 1 Block."
      },
      {
        "name": "Unrelenting",
        "text": "You may move with your target"
      }
    ]
  },
  {
    "name": "Cleave",
    "text": "Attack all enemies in front of you for [Might] damage.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Strength",
    "masteries": [
      {
        "name": "Heavy Swing",
        "text": "Enemies hit by Cleave are also knocked back 1 square."
      }
    ]
  },
  {
    "name": "Whirlwind",
    "text": "Attack all adjacent enemies for [Might] damage.",
    "cost": 1,
    "type": 1,
    "actions": 2,
    "weapon": 1,
    "requires": "3 Strength",
    "masteries": [
      {
        "name": "Bladestorm",
        "text": "During your whirlwind you can move up to 2 squares. The whirlwind will hit any enemy that was adjacent to you on any of the squares you occupied during your attack."
      }
    ]
  },
  {
    "name": "Rampage",
    "text": "Attack for [Might] + [Strength] damage. If your attack succeeds in dealing damage you can attack again. This continues until you fail to deal damage with an attack. The Might of Rampage goes down by 1 after each time you attack",
    "cost": 1,
    "type": 1,
    "actions": 2,
    "weapon": 1,
    "requires": "2 Strength",
    "masteries": [
      {
        "name": "Trauma",
        "text": "Rampage hits cause the target to take 1 ongoing damage for each time they are hit during a single use of Rampage. Further uses of Rampage do not stack but a higher hit count will override a smaller one."
      },
      {
        "name": "War Path",
        "text": "You may move up to 2 squares between each Rampage attack."
      },
      {
        "name": "Momentum",
        "text": "Might of Rampage does not go down after the 1st attack."
      }
    ]
  },
  {
    "name": "Guard",
    "text": "The next physical attack made against your selected target will instead be directed at you. The target must remain adjacent to you for this to work. You can only Guard 1 target at a time.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Cover",
        "text": "If your Guard target moves you can move with them up to 3 squares."
      }
    ]
  },
  {
    "name": "Sunder Armor",
    "text": "Roll [Might] vs target's Defense. If successful your next melee attack against the target is unblockable.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Devastate",
        "text": "The target's Armor is also reduced by 1 until the end of your next turn."
      },
      {
        "name": "De-Barrier",
        "text": "The target's Resist is also reduced by 1 until the end of your next turn."
      }
    ]
  },
  {
    "name": "Parry",
    "text": "Prepare yourself for an incoming attack. Add your [Precision] to your next Dodge action. Lasts until the end of your next turn. Requires a melee weapon.",
    "cost": 0,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "requires": "1 Agility",
    "masteries": [
      {
        "name": "Riposte",
        "text": "If you successfully dodge an attack you get +1 Precision against the attacker until the end of your next turn."
      }
    ]
  },
  {
    "name": "Go For the Throat",
    "text": "Critical range of all Might based attacks increased by 2.",
    "type": 3
  },
  {
    "name": "Power Attack",
    "text": "You can add up to your [Strength] score to the Might of any attack but for each point added you must roll an additional Attack roll. If any of the Attack rolls from this attack result in a miss then the attack misses. Only the first roll can grant a critical hit.",
    "type": 4,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Focused Rage",
        "text": "If Power Attack is used for an attack that costs Energy, the miss range of all Attack rolls for that attack are reduced by 1. Inclusive."
      },
      {
        "name": "Follow Through",
        "text": "The Might of your next attack is increased by 1 for each 20 rolled during the additional Attack rolls of a Power Attack. Inclusive."
      }
    ]
  },
  {
    "name": "Recklessness",
    "text": "You take on an aggressive fighting stance. Subtract up to [Strength] from your Dodge and add that number to your Might. This effect lasts until willfully cancelled.",
    "type": 4,
    "requires": "1 Strength"
  },
  {
    "name": "Lay on Hands",
    "text": "Touch a target transferring your HP to them. You choose how much HP to transfer. The amount transferred in one use of this ability cannot exceed your maximum HP. This healing ignores magic dampening.",
    "type": 4,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Favored by the Gods",
        "text": "When you deal damage the healing of your next Lay on Hands is increased by 1. Inclusive."
      },
      {
        "name": "Guardian Angel",
        "text": "Once per day Lay On Hands can be used as an Interrupt Action when an ally drops below 1 hp. If you are not adjacent to them you will teleport to a space adjacent to them. Max range 6 squares"
      },
      {
        "name": "Lingering Faith",
        "text": "The target also receives 1 ongoing healing for the next 2 rounds. The healing occurs at the beginning of the target's turn. Inclusive."
      }
    ]
  },
  {
    "name": "Liberate",
    "text": "Attempt to free your target from a status effect. Reduce the power of any status effect on your target by [Magic] or [Healing].",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Spirit or 1 Intelligence",
    "masteries": [
      {
        "name": "Blessing of Freedom",
        "text": "If a nearby ally is afflicted by a status effect you may immediately cast Liberate as an interrupt action."
      }
    ]
  },
  {
    "name": "Charge",
    "text": "Move up to 5 squares in a straight line to an enemy and attack them with a melee weapon.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "1 Strength or 1 Agility",
    "masteries": [
      {
        "name": "Furious Charge",
        "text": "Power of next melee attack increased by 1 after using charge."
      },
      {
        "name": "Bloodlust",
        "text": "Your first charge in each combat has no Energy cost. Inclusive."
      }
    ]
  },
  {
    "name": "Avatar",
    "text": "Become an avatar of your god sacrificing 1 Energy per round until your Energy is gone. During this time you can cast healing spells for no Energy cost.",
    "type": 4,
    "requires": "3 Spirit",
    "masteries": [
      {
        "name": "Martyr",
        "text": "While Avatar is active if an ally within 6 squares takes damage you may take some or all of that damage instead. The amount is chosen by you."
      }
    ]
  },
  {
    "name": "Greater Influence",
    "text": "Range of Holy spells increased by 2.",
    "type": 3
  },
  {
    "name": "Berzerker Rage",
    "text": "You get 1 extra action each turn. You cannot cast spells while enraged. You are immune to mind altering (fear, sleep, etc) effects while enraged. Berserker Rage costs 1 Energy per turn and lasts until you reach 0 Energy or combat ends.",
    "type": 1,
    "cost": 1,
    "actions": 1,
    "weapon": 0,
    "requires": "3 Strength",
    "masteries": [
      {
        "name": "Ignore Pain",
        "text": "Armor and Resist are increased by 1 while Enraged."
      },
      {
        "name": "Growing Fury",
        "text": "Your Might is increased by 1 each time you are targeted with an attack or spell. This effect stacks and lasts until the end of your next turn."
      }
    ]
  },
  {
    "name": "Inspirations",
    "text": "Select a daily inspiration which provides a buff to you for 1 day. You may only have 1 Inspiration active each day.\n Fervor: Increases all Powers by 1.\n Devotion: Increases Armor and Resist by 1.",
    "type": 4,
    "masteries": [
      {
        "name": "Inspiring Presence",
        "text": "Your Inspirations now affect all allies within 5 squares."
      },
      {
        "name": "Inner Inspiration",
        "text": "The bonus from your inspirations is increased to +2."
      }
    ]
  },
  {
    "name": "Selfless Healer",
    "text": "Power of healing spells increased by 1 when cast on an ally.",
    "type": 3
  },
  {
    "name": "Holy Shield",
    "text": "Increase a shield's block by 2 and makes it unbreakable and immune to disarm effects. Lasts 1 day.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 1,
    "school": 3,
    "requires": "2 Spirit",
    "masteries": [
      {
        "name": "Beacon of Light",
        "text": "A blessed shield also increases the power of healing spells targeting its user by 2."
      },
      {
        "name": "Protection From Corruption",
        "text": "A blessed shield also increases the user's Resist by 2."
      }
    ]
  },
  {
    "name": "Cleanse",
    "text": "Attempt to cleanse your target of poisons and diseases. Roll [Healing]. If the result is higher than the power of a poison or disease affecting your target then that poison or disease is removed.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 5,
    "school": 5,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Cleansing rejuvination",
        "text": "When you cast a healing spell on someone you may also cast Cleanse on them as part of the same action."
      }
    ]
  },
  {
    "name": "Goodberry",
    "text": "Create a berry infused with healing energy. Heals for (creator's) [Healing] when eaten. This Energy does not return until the berry has been used or until you decide to let the berry's healing energy go, turning it into a regular berry. Eating a goodberry counts as using an item",
    "cost": 1,
    "type": 2,
    "actions": 1,
    "range": 1,
    "school": 5,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Extra Juicy",
        "text": "Goodberries can now be squished against someone to activate their healing. This counts as using an item. If the berry is eaten instead of squished the healing power is increased by 2."
      }
    ]
  },
  {
    "name": "Bloom",
    "text": "Imbue a 2x2 area with healing energies. Allies standing in the area take 1 ongoing healing each round.",
    "cost": 1,
    "type": 2,
    "actions": 2,
    "range": 5,
    "school": 5,
    "requires": "2 Spirit",
    "masteries": [
      {
        "name": "Living Bloom",
        "text": "Enemies standing in your bloom are rooted in place. The roots start at 1 hp and grow 1 hp stronger each round."
      },
      {
        "name": "Thorny Vegetation",
        "text": "Enemies that make melee attacks against someone standing in your Bloom take 1 damage."
      }
    ]
  },
  {
    "name": "Blessed Health",
    "text": "The power of diseases and poisons that affect you is reduced by 2.",
    "type": 3,
    "masteries": [
      {
        "name": "Inoculation",
        "text": "Anytime you would be affected by a disease or poison flip a coin. On Heads you are not affected."
      }
    ]
  },
  {
    "name": "Unhindered",
    "text": "+1 Dodge when you have no armor penalty.",
    "type": 3
  },
  {
    "name": "Armor Training",
    "text": "Penalty from wearing armor is reduced by 2. You can take this ability up to 3 times.",
    "type": 3
  },
  {
    "name": "Spirit Raven",
    "text": "Summons a raven with [Healing] + [Spirit] hp. It will aid an ally increasing their power rolls by 1. The raven will also defend the ally by using its own hp as temporary hp when the ally is attacked. Free Action to assign it to a new ally.",
    "cost": 0,
    "type": 4,
    "actions": 2,
    "requires": "2 Spirit",
    "masteries": [
      {
        "name": "Unkindness",
        "text": "You can have more than 1 raven summoned at a time. It costs 1 Energy to summon each additional raven. The Energy used for each raven will not return while the extra ravens exist."
      },
      {
        "name": "Iron Feathers",
        "text": "+2 power on the roll to determine your ravens' hp."
      }
    ]
  },
  {
    "name": "Spirit Wolf",
    "text": "Summons a wolf with 2x[Healing] hp. Each round It will distract an enemy decreasing their defenses by 1 for that round. It can be ordered to attack dealing [Healing] + [Spirit] damage and causing the wolf to fade away. Free action to tell it to distract a new target. Standard action to tell it to attack.",
    "cost": 0,
    "type": 4,
    "actions": 2,
    "requires": "2 Spirit",
    "masteries": [
      {
        "name": "Lick the Wound",
        "text": "Instead of distracting an enemy your wolf can lick the wounds of an ally, healing them for 1 each round. It is a Free Action to assign a wolf to a new target."
      },
      {
        "name": "Leader of the Pack",
        "text": "You can have 2 wolves summoned at a time."
      }
    ]
  },
  {
    "name": "Aspects of Nature",
    "text": "Take on physical characteristics of an animal providing you a combat buff. You can only have 1 aspect active at one time and it takes a full rest to activate, deactivate, or change an aspect.\nWarden: You resemble an animal known for its toughness. You get +2 increased Armor.\nSwift: You resemble an animal known for its speed. You get +2 Move and +1 Dodge.\nPredator: You resemble an animale known for its ferocity. You get +1 to Might and Precision.",
    "type": 4,
    "masteries": [
      {
        "name": "Shapeshift",
        "text": "Take on the full form of your aspect animal. While in animal form your Might or Precision matches your highest power, depending on which animal you resemble. All items worn become part of your body and  you retain any bonuses that they provided. This lasts until cancelled. Cost 1 Energy to change and 2 actions for the transformation to take place. When cancelled it takes 2 actions to revert back to human form."
      }
    ]
  },
  {
    "name": "Evasive Roll",
    "text": "When an enemy makes an attack or casts a spell that would hit you, you may move up to 2 squares.",
    "cost": 1,
    "type": 1,
    "actions": -1,
    "weapon": 0,
    "requires": "3 Agility"
  },
  {
    "name": "Backstab",
    "text": "Attack an opponent for [Precision] damage. This attack cannot be blocked and cannot be used from in front of the target.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Agility",
    "masteries": [
      {
        "name": "Lost in the Fray",
        "text": "Backstab's power is increased by 1 against enemies who did not have Line of Sight to you at the start of your turn. Backstab's power is also increased by 1 when used as an Interrupt action with Opportunist. These effects stack."
      },
      {
        "name": "Expose Weakness",
        "text": "Whenever you deal damage to an enemy with Backstab you reduce their Armor by 1 until your next turn."
      },
      {
        "name": "Opportunist",
        "text": "When an adjacent enemy is hit with a melee attack you may use Backstab as an Interrupt action. Cannot be triggered by your own attacks."
      }
    ]
  },
  {
    "name": "Study Enemy",
    "text": "Precision of next attack made against target is increased by [Agility]. Effect expires after 1 hour.",
    "type": 4,
    "cost": 0,
    "actions": 1,
    "requires": "1 Agility",
    "masteries": [
      {
        "name": "Stalking",
        "text": "You can use 1 free action each round to continue studying your target. Each extra round spent studying them causes your next attack against them to ignore 1 Defense."
      },
      {
        "name": "Pattern Recognition",
        "text": "You recieve a +1 to Dodge against any enemy you study. This bonus lasts until the end of the day."
      }
    ]
  },
  {
    "name": "Poison Blade",
    "text": "Apply poison to a weapon. When you deal damage with a poisoned weapon the target also loses 1 max hp. This effect stacks. The poison lasts until the end of your next combat.",
    "type": 1,
    "cost": 1,
    "actions": 0,
    "requires": "3 Agility",
    "masteries": [
      {
        "name": "Crippling Poison",
        "text": "Dealing damage with a poisoned blade also reduces their Strength by 1 until the end of your next turn."
      },
      {
        "name": "Mind-Numbing Poison",
        "text": "Dealing damage with a poisoned blade also reduces their Intelligence by 1 until the end of your next turn."
      }
    ]
  },
  {
    "name": "Prey on the Weak",
    "text": "+1 Precision for any attacks made against enemies with less than half health remaining.",
    "type": 3
  },
  {
    "name": "Trap Sense",
    "text": "You can use Dodge to defend against traps even if you weren't aware of them.",
    "type": 3
  },
  {
    "name": "Alacrity",
    "text": "Move is increased by 2.",
    "type": 3
  },
  {
    "name": "Two Weapon Fighting",
    "text": "When performing melee attacks you can use both weapons. The miss range of each attack is increased by 5.",
    "type": 3
  },
  {
    "name": "Hit and Run",
    "text": "When your first action is a move action you can pause the move to take your second action and continue moving afterwards.",
    "type": 4,
    "requires": "2 Agility",
    "masteries": [
      {
        "name": "Blurred Speed",
        "text": "When you use Hit and Run your Dodge is increased by 2 until your next turn."
      }
    ]
  },
  {
    "name": "Blood Sacrifice",
    "text": "When casting a spell you can take damage to increase the spell's power. Each point of HP you sacrifice increases the spell's power by 1. Limit [Intelligence].",
    "type": 4,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Siphon Life",
        "text": "The life spent is refunded if the spell reduces its target to less than 1 HP."
      }
    ]
  },
  {
    "name": "Decrepify",
    "text": "Curse a 2x2 area of ground. Enemies standing in the area take 1 shadow damage each round. You can move the area by 1 square each turn as a free action.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 4,
    "requires": "3 Intelligence",
    "masteries": [
      {
        "name": "Cursed Ground",
        "text": "Your spells targeting enemies standing in Decrepify, including Decrepify,  ignore 1 Resist."
      },
      {
        "name": "Vampiric Touch",
        "text": "You are healed for 1 each time you deal damage with Decrepify."
      }
    ]
  },
  {
    "name": "Curse",
    "text": "Target's attack rolls are reduced by 1 for 10 turns.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 4,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Hopelessness",
        "text": "The target also suffers a -2 penalty to Recover."
      },
      {
        "name": "Lingering Misery",
        "text": "Effects continue for 1 extra turn even if dispelled."
      }
    ]
  },
  {
    "name": "Summon Imp",
    "text": "Summon a winged imp with 2 x [Magic] HP. Each round the imp throws a ball of fire at an enemy dealing [Magic] fire damage. File ball range is 6 squares. Can fly at a speed of 12. Lasts for 2 rounds. After the 2nd round you must pay 1 Energy per round to keep the demon summoned.",
    "type": 4,
    "actions": 2,
    "masteries": [
      {
        "name": "Pest",
        "text": "Your Imp lasts for 1 extra round."
      }
    ]
  },
  {
    "name": "Summon Hellhound",
    "text": "Summon a demonic dog that attacks with a fire breath attack each round. Has 3 x [Magic] HP. Breath attack hits everything in a 2x2 area and deals [Magic] fire damage. Movement speed 6. Lasts for 1 round. After the 1st round you must pay 2 Energy per round to keep the demon summoned.",
    "type": 4,
    "actions": 2,
    "masteries": [
      {
        "name": "Faithful Companion",
        "text": "If you drop below 1 HP while your Hellhound is summoned you are instantly brought back to 1 HP and your Hellhound dies."
      }
    ]
  },
  {
    "name": "Summon Chain Demon",
    "text": "Summon a demon that wraps enemies in chains immobilizing them. Has 3 x [Magic] HP. Each round it attacks an enemy with chains stunning them for [Magic]. Movement speed 6. Lasts for 1 round. After the 1st round you must pay 2 Energy per round to keep the demon summoned.",
    "type": 4,
    "actions": 2,
    "masteries": [
      {
        "name": "Hooked Chains",
        "text": "Enemies stunned by the Chain Demon take 1 point of damage and another point of damage each round that they remain stunned at the beginning of your turn."
      }
    ]
  },
  {
    "name": "Master Summoner",
    "text": "You can spend actions concentrating to retain control over a summoned demon instead of paying the energy cost. It takes 1 action per point of Energy that would have been used.",
    "type": 4,
    "requries": "4 Intelligence"
  },
  {
    "name": "Gadgeteer",
    "text": "+2 power when creating or disabling a trap or using an item.",
    "type": 3
  },
  {
    "name": "Roll the Bones",
    "text": "When making a Precision based attack you can increase the crit range by 1 - 4. For each point that you expand the crit range, the miss range of that attack will increase by 2.",
    "type": 4,
    "requires": "1 Agility"
  },
  {
    "name": "Coven",
    "text": "When one of your summoned demons is healed you receive the same healing and when you are healed your summoned demons receive the same healing.",
    "type": 3
  },
  {
    "name": "[Meta Magic] Extend Spell",
    "text": "Increase a spell's duration.",
    "type": 4,
    "cost": 1,
    "requires": "1 Intelligence"
  },
  {
    "name": "[Meta Magic] Enpower Spell",
    "text": "Increase a spell's power by [Intelligence]. Limit 1 per cast",
    "type": 4,
    "cost": 1,
    "requires": "1 Intelligence"
  },
  {
    "name": "[Meta Magic] Enlarge Spell",
    "text": "Increase a spell's area by 1.",
    "type": 4,
    "cost": 1,
    "requires": "1 Intelligence"
  },
  {
    "name": "[Meta Magic] Quicken Spell",
    "text": "Reduce a spell's cast time by 1 action. You cannot reduce a spell's cast time below 1 action.",
    "type": 4,
    "cost": 1,
    "requires": "1 Intelligence"
  },
  {
    "name": "[Meta Magic] Improvised Spell",
    "text": "Cast a spell that you do not know.",
    "type": 4,
    "cost": 1,
    "requires": "1 Intelligence"
  },
  {
    "name": "Counterspel",
    "text": "When a nearby enemy attempts to cast a spell that you know, you can negate his spell. If the spell has an energy cost you must pay that energy cost. The target must be within the range of the spell being cast.",
    "type": 4,
    "actions": -1,
    "requires": "3 Intelligence"
  },
  {
    "name": "Improved Meta Magic",
    "text": "Power of spells affected by meta magic increased by 1 for each different meta magic effect.",
    "type": 3
  },
  {
    "name": "Mystical Reach",
    "text": "Range of Magic based spells increased by 2",
    "type": 3
  },
  {
    "name": "Energy Shield",
    "text": "Gain [Magic] temporary hp. Cost 1 Energy. Can be used even if it is not your turn. Limit once per round of combat.",
    "cost": 1,
    "type": 2,
    "actions": 0,
    "range": 0,
    "school": 0,
    "requires": "2 Intelligence",
    "masteries": [
      {
        "name": "Selfless Brilliance",
        "text": "Energy Shield can be cast on anyone within 5 squares."
      },
      {
        "name": "Volatile Shield",
        "text": "When an Energy Shield is broken by damage it bursts, knocking adjacent enemies back 1 square."
      }
    ]
  },
  {
    "name": "Channeling",
    "text": "When using a Meta Magic talent, you can increase the cast time of the spell instead of increasing the Energy cost. For each Energy saved the cast time increases by 1 action.",
    "type": 4,
    "requires": "2 Intelligence"
  },
  {
    "name": "Coalesce",
    "text": "Recasting a spell that is already in effect will add the power rolls of both casts together. Limit is the max possible power roll for 1 roll.",
    "type": 4,
    "requires": "1 Intelligence"
  },
  {
    "name": "Mana Gem",
    "text": "Create a gem containing a spell. Anyone can use the gem to cast the spell. You can only have 1 mana gem active at any time.",
    "type": 4,
    "requires": "3 Intelligence",
    "masteries": [
      {
        "name": "Improved Mana Gem",
        "text": "The gem can be used to store Energy and consumed by anyone to gain that Energy."
      }
    ]
  },
  {
    "name": "Resistance",
    "text": "Increase target's Resist by 1.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Spirit or 1 Intelligence"
  },
  {
    "name": "Bless",
    "text": "Target recieves +1 on Attack rolls.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 3,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Serendipity",
        "text": "Enemies also recieve -1 on Attack rolls against the target."
      }
    ]
  },
  {
    "name": "Endure Elements",
    "text": "Target's Resist is increased by [Healing] or [Magic] against the next spell of chosen element.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Spirit or 1 Intelligence"
  },
  {
    "name": "Dispel Magic",
    "text": "Attemps to dispel a magical effect. Roll [Magic] against the effects power. If your roll is higher the effect is destroyed.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Applied Knowledge",
        "text": "+2 power when dispelling known spells."
      }
    ]
  },
  {
    "name": "Improved Initiative",
    "text": "Whenever you roll for Initiative roll 2 D20s and use the higher roll.",
    "type": 3
  },
  {
    "name": "Quick Draw",
    "text": "Once per round you can swap equipped weapons/shield as a free action on your turn.",
    "type": 3
  },
  {
    "name": "Desperation",
    "text": "You can reduce an attribute to pay the Energy cost of an ability. The attribute is lowered after the ability is used and recovers at a rate of 1 per hour. The attribute being lowered is based on the power that the ability uses. Strength for Might based abilities, Agility for Precision based abilities etc. You cannot reduce an attribute below 0 using this Talent.",
    "type": 4
  },
  {
    "name": "Fire Bomb",
    "text": "Launches a ball of fire that explodes dealing [Magic] + [Intelligence] fire damage to everyone in a 3x3 area.",
    "cost": 0,
    "type": 2,
    "actions": 4,
    "range": 10,
    "school": 1,
    "requires": "4 Intelligence",
    "masteries": [
      {
        "name": "Smoldering Rubble",
        "text": "For 2 turns after the explosion anyone standing in the area takes 1 point of fire damage."
      }
    ]
  },
  {
    "name": "Meteor Storm",
    "text": "Summon 4 meteors which each deal [Magic] damage to targets within a 2x2 area. All meteors must be within a 4x4 area.",
    "cost": 0,
    "type": 2,
    "actions": 5,
    "range": 10,
    "school": 0,
    "requires": "5 Intelligence",
    "masteries": [
      {
        "name": "Stars Align",
        "text": "Hitting a target with a meteor increases the power of your meteors against that target by 2. This bonus only applies to the current cast of meteor swarm."
      }
    ]
  },
  {
    "name": "Shield Wall",
    "text": "For the next 5 + [Strength] rounds your shield bonus also applies to all adjacent allies.",
    "cost": 2,
    "type": 1,
    "actions": 1,
    "weapon": 1,
    "requires": "2 Strength",
    "masteries": [
      {
        "name": "Obstruction",
        "text": "The shield bonus also applies to allies' Dodge."
      },
      {
        "name": "Moving Formation",
        "text": "If you only move 1 square in a turn all adjacent allies can move 1 square with you."
      }
    ]
  },
  {
    "name": "Toughness",
    "text": "Your max HP is increased by 3. You can take this ability multiple times.",
    "type": 3
  },
  {
    "name": "Psion",
    "text": "Your Magic is increased by 6 when you have no weapon equipped.",
    "type": 3
  },
  {
    "name": "Hand Block",
    "text": "You can Block attacks without having a weapon or shield equipped. Your base Block is 4 when you have no weapon and no shield equipped.",
    "type": 3
  },
  {
    "name": "Spell Block",
    "text": "When you would be targetted by a spell you can attempt to block it using your Magic instead of dodging it.",
    "type": 4
  },
  {
    "name": "Shot On the Run",
    "text": "You may take a move action while using a ranged attack. Each square you move reduces your Attack roll by 1.",
    "type": 4
  },
  {
    "name": "True Strike",
    "text": "The target's next attack roll has its miss range reduced by 5.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence"
  },
  {
    "name": "Solar Flare",
    "text": "Roll [Magic] against a target's Defense. If your roll is higher their Attack rolls are reduced by 1 until the end of combat.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Solar Storm",
        "text": "This spell now affects everyone within a 3x3 area."
      }
    ]
  },
  {
    "name": "Grasping Hand",
    "text": "Roll [Magic] against a target's Defense. If your roll is higher they are held immobile.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 0,
    "requires": "2 Intelligence",
    "masteries": [
      {
        "name": "Crushing Hand",
        "text": "The target takes 1 damage each round they are held."
      },
      {
        "name": "Forceful Hand",
        "text": "You can move the target 1 square each turn."
      }
    ]
  },
  {
    "name": "Magic Weapon",
    "text": "Give a weapon a +1 bonus to all Powers for 10 rounds.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence"
  },
  {
    "name": "Mage Armor",
    "text": "Increase target's Armor by 1 for 10 rounds.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence"
  },
  {
    "name": "Black Hole",
    "text": "Creates a small magical black hole that pulls targets towards the center. When cast and at the beginning of your turn anyone within 3 squares will be moved 1 square toward the black hole. Lasts [Magic] turns.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 0,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Crushing Gravity",
        "text": "Anyone within range also takes 1 point of damage every turn."
      },
      {
        "name": "Event Horizon",
        "text": "Targets adjacent to the black hole cannot make ranged attacks."
      }
    ]
  },
  {
    "name": "Aimed Shot",
    "text": "Make a carefully aimed shot with a ranged weapon for [Precision] damage. Your Attack roll is increased by Agility for this attack.",
    "cost": 0,
    "type": 1,
    "actions": 2,
    "weapon": 2,
    "requires": "1 Agility",
    "masteries": [
      {
        "name": "Headshot",
        "text": "Critical damage is increased to x3 normal damage."
      }
    ]
  },
  {
    "name": "Volley",
    "text": "Attack all enemies in 2x2 area for [Precision] damage.",
    "cost": 0,
    "type": 1,
    "actions": 2,
    "weapon": 2,
    "requires": "1 Agility",
    "masteries": [
      {
        "name": "Scatter",
        "text": "You may increase the area to 3x3 but the Power is decreased by 1."
      }
    ]
  },
  {
    "name": "Ghost Arrow",
    "text": "Attacks all enemies in a straight line for [Precision] damage.",
    "cost": 2,
    "type": 1,
    "actions": 1,
    "weapon": 2,
    "requires": "1 Agility",
    "masteries": [
      {
        "name": "Incorporeal",
        "text": "This attack ignores 2 points of Block or Armor."
      }
    ]
  },
  {
    "name": "Barkskin",
    "text": "Increase target's Armor by 1 for 5 + [Spirit] rounds.",
    "cost": 0,
    "type": 2,
    "actions": 1,
    "range": 10,
    "school": 5,
    "requires": "1 Spirit",
    "masteries": [
      {
        "name": "Sapling",
        "text": "Healing done to the target is increased by 1."
      },
      {
        "name": "Ironwood",
        "text": "Armor Bonus increased to 3."
      }
    ]
  },
  {
    "name": "Bolstering Shout",
    "text": "All allies within 5 squares get +1 to Spirit for 10 turns",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "weapon": 0,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Uplifting",
        "text": "Everyone affected may immediately use Second Wind with normal Energy cost and Masteries."
      }
    ]
  },
  {
    "name": "Taunt",
    "text": "Roll [Might] against target's Defense. If your roll is higher the enemy is Provoked and may only target you with attacks.",
    "cost": 1,
    "type": 1,
    "actions": 1,
    "range": 5,
    "weapon": 0,
    "requires": "1 Strength",
    "masteries": [
      {
        "name": "Large Target",
        "text": "The Power of your Taunt is increased by your shield bonus."
      }
    ]
  },
  {
    "name": "Chain Lightning",
    "text": "Deals [Magic] damage to a target. If it successfully deals damage it will jump to another target within 2 squares. The power is reduced by 1 each time this spell jumps to a new target.",
    "cost": 0,
    "type": 2,
    "actions": 2,
    "range": 10,
    "school": 5,
    "requires": "1 Intelligence",
    "masteries": [
      {
        "name": "Conductivity",
        "text": "The range of jumps is increased by 1 square."
      },
      {
        "name": "Static Buildup",
        "text": "The power of your next Chain Lightning is increased by 1 if it deals damage to at least 2 targets."
      }
    ]
  }
]