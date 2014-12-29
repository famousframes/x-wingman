'use strict';

/**
 * @ngdoc service
 * @name xWingmanApp.CardData
 * @description
 * # CardData
 * Service in the xWingmanApp.
 */
angular.module('xWingmanApp')
  .service('CardData', function CardData() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var cardDB = {};

    cardDB.expansions = [
      'Core',
      'A-Wing Expansion Pack',
      'B-Wing Expansion Pack',
      'X-Wing Expansion Pack',
      'Y-Wing Expansion Pack',
      'Millennium Falcon Expansion Pack',
      'HWK-290 Expansion Pack',
      'TIE Fighter Expansion Pack',
      'TIE Interceptor Expansion Pack',
      'TIE Bomber Expansion Pack',
      'TIE Advanced Expansion Pack',
      'Lambda-Class Shuttle Expansion Pack',
      'Slave I Expansion Pack',
      'Imperial Aces Expansion Pack',
      'Rebel Transport Expansion Pack',
      'Z-95 Headhunter Expansion Pack',
      'TIE Defender Expansion Pack',
      'E-Wing Expansion Pack',
      'TIE Phantom Expansion Pack',
      'Tantive IV Expansion Pack',
      'Rebel Aces Expansion Pack',
      'YT-2400 Freighter Expansion Pack',
      'VT-49 Decimator Expansion Pack',
      'StarViper Expansion Pack',
      'M3-A Interceptor Expansion Pack',
      'IG-2000 Expansion Pack',
      'Most Wanted Expansion Pack'
    ];

    cardDB.unreleasedExpansions = [
      'YT-2400 Freighter Expansion Pack',
      'VT-49 Decimator Expansion Pack',
      'StarViper Expansion Pack',
      'M3-A Interceptor Expansion Pack',
      'IG-2000 Expansion Pack',
      'Most Wanted Expansion Pack'
    ];

    cardDB.basicCardData = {
      ships: [
        {
          name: "X-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 2,
          hull: 3,
          shields: 2,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 3]]
        },
        {
          name: "Y-Wing",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 2,
          agility: 1,
          hull: 5,
          shields: 3,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 3, 0, 0, 3]]
        },
        {
          name: "A-Wing",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 3,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Target Lock", "Boost", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [2, 2, 2, 2, 2, 0], [1, 1, 2, 1, 1, 3], [0, 0, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
        },
        {
          name: "YT-1300",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 1,
          hull: 6,
          shields: 4,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 1, 1, 1, 0, 3], [0, 0, 1, 0, 0, 3]],
          large: true
        },
        {
          name: "TIE Fighter",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 3,
          hull: 3,
          shields: 0,
          actions: ["Focus", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "TIE Advanced",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 3,
          hull: 3,
          shields: 2,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 0, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "TIE Interceptor",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 3,
          hull: 3,
          shields: 0,
          actions: ["Focus", "Barrel Roll", "Boost", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [2, 2, 2, 2, 2, 0], [1, 1, 2, 1, 1, 3], [0, 0, 2, 0, 0, 0], [0, 0, 1, 0, 0, 3]]
        },
        {
          name: "Firespray-31",
          factions: ["Galactic Empire", "Scum and Villainy"],
          attack: 3,
          agility: 2,
          hull: 6,
          shields: 4,
          actions: ["Focus", "Target Lock", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 3], [0, 0, 1, 0, 0, 3]],
          large: true
        },
        {
          name: "HWK-290",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 1,
          agility: 2,
          hull: 4,
          shields: 1,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0], [0, 2, 2, 2, 0], [1, 1, 2, 1, 1], [0, 3, 1, 3, 0], [0, 0, 3, 0, 0]]
        },
        {
          name: "Lambda-Class Shuttle",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 1,
          hull: 5,
          shields: 5,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 3, 0, 0], [0, 2, 2, 2, 0], [3, 1, 2, 1, 3], [0, 3, 1, 3, 0]],
          large: true
        },
        {
          name: "B-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 1,
          hull: 3,
          shields: 5,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 3], [0, 3, 1, 3, 0, 0], [0, 0, 3, 0, 0, 0]]
        },
        {
          name: "TIE Bomber",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 2,
          hull: 6,
          shields: 0,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
        },
        {
          name: "GR-75 Medium Transport",
          factions: ["Rebel Alliance"],
          energy: 4,
          agility: 0,
          hull: 8,
          shields: 4,
          actions: ["Recover", "Reinforce", "Coordinate", "Jam"],
          huge: true,
          epic_points: 2,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "Z-95 Headhunter",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 2,
          agility: 2,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 1, 1, 1, 3], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "TIE Defender",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 3,
          hull: 3,
          shields: 3,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 0, 1, 3, 0], [3, 1, 2, 1, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 2, 0, 0, 1], [0, 0, 2, 0, 0, 0]]
        },
        {
          name: "E-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 3,
          hull: 2,
          shields: 3,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "TIE Phantom",
          factions: ["Galactic Empire"],
          attack: 4,
          agility: 2,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Barrel Roll", "Evade", "Cloak"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3]]
        },
        {
          name: "CR90 Corvette (Fore)",
          factions: ["Rebel Alliance"],
          attack: 4,
          agility: 0,
          hull: 8,
          shields: 5,
          actions: ["Coordinate", "Target Lock"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "CR90 Corvette (Aft)",
          factions: ["Rebel Alliance"],
          energy: 5,
          agility: 0,
          hull: 8,
          shields: 3,
          actions: ["Reinforce", "Recover"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "YT-2400",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 2,
          hull: 5,
          shields: 5,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          large: true,
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 3]]
        },
        {
          name: "VT-49 Decimator",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 0,
          hull: 12,
          shields: 4,
          actions: ["Focus", "Target Lock"],
          large: true,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0]]
        },
        {
          name: "StarViper",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 3,
          hull: 4,
          shields: 1,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Boost"]
        },
        {
          name: "M3-A Interceptor",
          factions: ["Scum and Villainy"],
          attack: 2,
          agility: 3,
          hull: 2,
          shields: 1,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"]
        },
        {
          name: "Aggressor",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 3,
          hull: 4,
          shields: 4,
          actions: ["Focus", "Target Lock", "Boost", "Evade"],
          large: true
        }
      ],
      pilotsById: [
        {
          name: "Wedge Antilles",
          faction: "Rebel Alliance",
          id: 0,
          unique: true,
          ship: "X-Wing",
          skill: 9,
          points: 29,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Garven Dreis",
          faction: "Rebel Alliance",
          id: 1,
          unique: true,
          ship: "X-Wing",
          skill: 6,
          points: 26,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Red Squadron Pilot",
          faction: "Rebel Alliance",
          id: 2,
          ship: "X-Wing",
          skill: 4,
          points: 23,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Rookie Pilot",
          faction: "Rebel Alliance",
          id: 3,
          ship: "X-Wing",
          skill: 2,
          points: 21,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Biggs Darklighter",
          faction: "Rebel Alliance",
          id: 4,
          unique: true,
          ship: "X-Wing",
          skill: 5,
          points: 25,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Luke Skywalker",
          faction: "Rebel Alliance",
          id: 5,
          unique: true,
          ship: "X-Wing",
          skill: 8,
          points: 28,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Gray Squadron Pilot",
          faction: "Rebel Alliance",
          id: 6,
          ship: "Y-Wing",
          skill: 4,
          points: 20,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: '"Dutch" Vander',
          faction: "Rebel Alliance",
          id: 7,
          unique: true,
          ship: "Y-Wing",
          skill: 6,
          points: 23,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Horton Salm",
          faction: "Rebel Alliance",
          id: 8,
          unique: true,
          ship: "Y-Wing",
          skill: 8,
          points: 25,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Gold Squadron Pilot",
          faction: "Rebel Alliance",
          id: 9,
          ship: "Y-Wing",
          skill: 2,
          points: 18,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Academy Pilot",
          faction: "Galactic Empire",
          id: 10,
          ship: "TIE Fighter",
          skill: 1,
          points: 12,
          slots: []
        }, {
          name: "Obsidian Squadron Pilot",
          faction: "Galactic Empire",
          id: 11,
          ship: "TIE Fighter",
          skill: 3,
          points: 13,
          slots: []
        }, {
          name: "Black Squadron Pilot",
          faction: "Galactic Empire",
          id: 12,
          ship: "TIE Fighter",
          skill: 4,
          points: 14,
          slots: ["Elite"]
        }, {
          name: '"Winged Gundark"',
          faction: "Galactic Empire",
          id: 13,
          unique: true,
          ship: "TIE Fighter",
          skill: 5,
          points: 15,
          slots: []
        }, {
          name: '"Night Beast"',
          faction: "Galactic Empire",
          id: 14,
          unique: true,
          ship: "TIE Fighter",
          skill: 5,
          points: 15,
          slots: []
        }, {
          name: '"Backstabber"',
          faction: "Galactic Empire",
          id: 15,
          unique: true,
          ship: "TIE Fighter",
          skill: 6,
          points: 16,
          slots: []
        }, {
          name: '"Dark Curse"',
          faction: "Galactic Empire",
          id: 16,
          unique: true,
          ship: "TIE Fighter",
          skill: 6,
          points: 16,
          slots: []
        }, {
          name: '"Mauler Mithel"',
          faction: "Galactic Empire",
          id: 17,
          unique: true,
          ship: "TIE Fighter",
          skill: 7,
          points: 17,
          slots: ["Elite"]
        }, {
          name: '"Howlrunner"',
          faction: "Galactic Empire",
          id: 18,
          unique: true,
          ship: "TIE Fighter",
          skill: 8,
          points: 18,
          slots: ["Elite"]
        }, {
          name: "Maarek Stele",
          faction: "Galactic Empire",
          id: 19,
          unique: true,
          ship: "TIE Advanced",
          skill: 7,
          points: 27,
          slots: ["Elite", "Missile"]
        }, {
          name: "Tempest Squadron Pilot",
          faction: "Galactic Empire",
          id: 20,
          ship: "TIE Advanced",
          skill: 2,
          points: 21,
          slots: ["Missile"]
        }, {
          name: "Storm Squadron Pilot",
          faction: "Galactic Empire",
          id: 21,
          ship: "TIE Advanced",
          skill: 4,
          points: 23,
          slots: ["Missile"]
        }, {
          name: "Darth Vader",
          faction: "Galactic Empire",
          id: 22,
          unique: true,
          ship: "TIE Advanced",
          skill: 9,
          points: 29,
          slots: ["Elite", "Missile"]
        }, {
          name: "Alpha Squadron Pilot",
          faction: "Galactic Empire",
          id: 23,
          ship: "TIE Interceptor",
          skill: 1,
          points: 18,
          slots: []
        }, {
          name: "Avenger Squadron Pilot",
          faction: "Galactic Empire",
          id: 24,
          ship: "TIE Interceptor",
          skill: 3,
          points: 20,
          slots: []
        }, {
          name: "Saber Squadron Pilot",
          faction: "Galactic Empire",
          id: 25,
          ship: "TIE Interceptor",
          skill: 4,
          points: 21,
          slots: ["Elite"]
        }, {
          name: "\"Fel's Wrath\"",
          faction: "Galactic Empire",
          id: 26,
          unique: true,
          ship: "TIE Interceptor",
          skill: 5,
          points: 23,
          slots: []
        }, {
          name: "Turr Phennir",
          faction: "Galactic Empire",
          id: 27,
          unique: true,
          ship: "TIE Interceptor",
          skill: 7,
          points: 25,
          slots: ["Elite"]
        }, {
          name: "Soontir Fel",
          faction: "Galactic Empire",
          id: 28,
          unique: true,
          ship: "TIE Interceptor",
          skill: 9,
          points: 27,
          slots: ["Elite"]
        }, {
          name: "Tycho Celchu",
          faction: "Rebel Alliance",
          id: 29,
          unique: true,
          ship: "A-Wing",
          skill: 8,
          points: 26,
          slots: ["Elite", "Missile"]
        }, {
          name: "Arvel Crynyd",
          faction: "Rebel Alliance",
          id: 30,
          unique: true,
          ship: "A-Wing",
          skill: 6,
          points: 23,
          slots: ["Missile"]
        }, {
          name: "Green Squadron Pilot",
          faction: "Rebel Alliance",
          id: 31,
          ship: "A-Wing",
          skill: 3,
          points: 19,
          slots: ["Elite", "Missile"]
        }, {
          name: "Prototype Pilot",
          faction: "Rebel Alliance",
          id: 32,
          ship: "A-Wing",
          skill: 1,
          points: 17,
          slots: ["Missile"]
        }, {
          name: "Outer Rim Smuggler",
          faction: "Rebel Alliance",
          id: 33,
          ship: "YT-1300",
          skill: 1,
          points: 27,
          slots: ["Crew", "Crew"]
        }, {
          name: "Chewbacca",
          faction: "Rebel Alliance",
          id: 34,
          unique: true,
          ship: "YT-1300",
          skill: 5,
          points: 42,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Lando Calrissian",
          faction: "Rebel Alliance",
          id: 35,
          unique: true,
          ship: "YT-1300",
          skill: 7,
          points: 44,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Han Solo",
          faction: "Rebel Alliance",
          id: 36,
          unique: true,
          ship: "YT-1300",
          skill: 9,
          points: 46,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Kath Scarlet",
          faction: "Galactic Empire",
          id: 37,
          unique: true,
          ship: "Firespray-31",
          skill: 7,
          points: 38,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Boba Fett",
          faction: "Galactic Empire",
          id: 38,
          unique: true,
          ship: "Firespray-31",
          skill: 8,
          points: 39,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Krassis Trelix",
          faction: "Galactic Empire",
          id: 39,
          unique: true,
          ship: "Firespray-31",
          skill: 5,
          points: 36,
          slots: ["Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Bounty Hunter",
          faction: "Galactic Empire",
          id: 40,
          ship: "Firespray-31",
          skill: 3,
          points: 33,
          slots: ["Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Ten Numb",
          faction: "Rebel Alliance",
          id: 41,
          unique: true,
          ship: "B-Wing",
          skill: 8,
          points: 31,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Ibtisam",
          faction: "Rebel Alliance",
          id: 42,
          unique: true,
          ship: "B-Wing",
          skill: 6,
          points: 28,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Dagger Squadron Pilot",
          faction: "Rebel Alliance",
          id: 43,
          ship: "B-Wing",
          skill: 4,
          points: 24,
          slots: ["System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Blue Squadron Pilot",
          faction: "Rebel Alliance",
          id: 44,
          ship: "B-Wing",
          skill: 2,
          points: 22,
          slots: ["System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Rebel Operative",
          faction: "Rebel Alliance",
          id: 45,
          ship: "HWK-290",
          skill: 2,
          points: 16,
          slots: ["Turret", "Crew"]
        }, {
          name: "Roark Garnet",
          faction: "Rebel Alliance",
          id: 46,
          unique: true,
          ship: "HWK-290",
          skill: 4,
          points: 19,
          slots: ["Turret", "Crew"]
        }, {
          name: "Kyle Katarn",
          faction: "Rebel Alliance",
          id: 47,
          unique: true,
          ship: "HWK-290",
          skill: 6,
          points: 21,
          slots: ["Elite", "Turret", "Crew"]
        }, {
          name: "Jan Ors",
          faction: "Rebel Alliance",
          id: 48,
          unique: true,
          ship: "HWK-290",
          skill: 8,
          points: 25,
          slots: ["Elite", "Turret", "Crew"]
        }, {
          name: "Scimitar Squadron Pilot",
          faction: "Galactic Empire",
          id: 49,
          ship: "TIE Bomber",
          skill: 2,
          points: 16,
          slots: ["Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Gamma Squadron Pilot",
          faction: "Galactic Empire",
          id: 50,
          ship: "TIE Bomber",
          skill: 4,
          points: 18,
          slots: ["Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Captain Jonus",
          faction: "Galactic Empire",
          id: 51,
          unique: true,
          ship: "TIE Bomber",
          skill: 6,
          points: 22,
          slots: ["Elite", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Major Rhymer",
          faction: "Galactic Empire",
          id: 52,
          unique: true,
          ship: "TIE Bomber",
          skill: 7,
          points: 26,
          slots: ["Elite", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Captain Kagi",
          faction: "Galactic Empire",
          id: 53,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 8,
          points: 27,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Colonel Jendon",
          faction: "Galactic Empire",
          id: 54,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 6,
          points: 26,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Captain Yorr",
          faction: "Galactic Empire",
          id: 55,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 4,
          points: 24,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Omicron Group Pilot",
          faction: "Galactic Empire",
          id: 56,
          ship: "Lambda-Class Shuttle",
          skill: 2,
          points: 21,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Lieutenant Lorrir",
          faction: "Galactic Empire",
          id: 57,
          unique: true,
          ship: "TIE Interceptor",
          skill: 5,
          points: 23,
          slots: []
        }, {
          name: "Royal Guard Pilot",
          faction: "Galactic Empire",
          id: 58,
          ship: "TIE Interceptor",
          skill: 6,
          points: 22,
          slots: ["Elite"]
        }, {
          name: "Tetran Cowall",
          faction: "Galactic Empire",
          id: 59,
          unique: true,
          ship: "TIE Interceptor",
          skill: 7,
          points: 24,
          slots: ["Elite"],
          modifier_func: function(stats) {
            return stats.maneuvers[1][5] = 3;
          }
        }, {
          name: "I messed up this pilot, sorry",
          id: 60,
          skip: true
        }, {
          name: "Kir Kanos",
          faction: "Galactic Empire",
          id: 61,
          unique: true,
          ship: "TIE Interceptor",
          skill: 6,
          points: 24,
          slots: []
        }, {
          name: "Carnor Jax",
          faction: "Galactic Empire",
          id: 62,
          unique: true,
          ship: "TIE Interceptor",
          skill: 8,
          points: 26,
          slots: ["Elite"]
        }, {
          name: "GR-75 Medium Transport",
          faction: "Rebel Alliance",
          id: 63,
          epic: true,
          ship: "GR-75 Medium Transport",
          skill: 3,
          points: 30,
          slots: ["Crew", "Crew", "Cargo", "Cargo", "Cargo"]
        }, {
          name: "Bandit Squadron Pilot",
          faction: "Rebel Alliance",
          id: 64,
          ship: "Z-95 Headhunter",
          skill: 2,
          points: 12,
          slots: ["Missile"]
        }, {
          name: "Tala Squadron Pilot",
          faction: "Rebel Alliance",
          id: 65,
          ship: "Z-95 Headhunter",
          skill: 4,
          points: 13,
          slots: ["Missile"]
        }, {
          name: "Lieutenant Blount",
          faction: "Rebel Alliance",
          id: 66,
          unique: true,
          ship: "Z-95 Headhunter",
          skill: 6,
          points: 17,
          slots: ["Elite", "Missile"]
        }, {
          name: "Airen Cracken",
          faction: "Rebel Alliance",
          id: 67,
          unique: true,
          ship: "Z-95 Headhunter",
          skill: 8,
          points: 19,
          slots: ["Elite", "Missile"]
        }, {
          name: "Delta Squadron Pilot",
          faction: "Galactic Empire",
          id: 68,
          ship: "TIE Defender",
          skill: 1,
          points: 30,
          slots: ["Cannon", "Missile"]
        }, {
          name: "Onyx Squadron Pilot",
          faction: "Galactic Empire",
          id: 69,
          ship: "TIE Defender",
          skill: 3,
          points: 32,
          slots: ["Cannon", "Missile"]
        }, {
          name: "Colonel Vessery",
          faction: "Galactic Empire",
          id: 70,
          unique: true,
          ship: "TIE Defender",
          skill: 6,
          points: 35,
          slots: ["Elite", "Cannon", "Missile"]
        }, {
          name: "Rexler Brath",
          faction: "Galactic Empire",
          id: 71,
          unique: true,
          ship: "TIE Defender",
          skill: 8,
          points: 37,
          slots: ["Elite", "Cannon", "Missile"]
        }, {
          name: "Knave Squadron Pilot",
          faction: "Rebel Alliance",
          id: 72,
          ship: "E-Wing",
          skill: 1,
          points: 27,
          slots: ["System", "Torpedo", "Astromech"]
        }, {
          name: "Blackmoon Squadron Pilot",
          faction: "Rebel Alliance",
          id: 73,
          ship: "E-Wing",
          skill: 3,
          points: 29,
          slots: ["System", "Torpedo", "Astromech"]
        }, {
          name: "Etahn A'baht",
          faction: "Rebel Alliance",
          id: 74,
          unique: true,
          ship: "E-Wing",
          skill: 5,
          points: 32,
          slots: ["Elite", "System", "Torpedo", "Astromech"]
        }, {
          name: "Corran Horn",
          faction: "Rebel Alliance",
          id: 75,
          unique: true,
          ship: "E-Wing",
          skill: 8,
          points: 35,
          slots: ["Elite", "System", "Torpedo", "Astromech"]
        }, {
          name: "Sigma Squadron Pilot",
          faction: "Galactic Empire",
          id: 76,
          ship: "TIE Phantom",
          skill: 3,
          points: 25,
          slots: ["System", "Crew"]
        }, {
          name: "Shadow Squadron Pilot",
          faction: "Galactic Empire",
          id: 77,
          ship: "TIE Phantom",
          skill: 5,
          points: 27,
          slots: ["System", "Crew"]
        }, {
          name: '"Echo"',
          faction: "Galactic Empire",
          id: 78,
          unique: true,
          ship: "TIE Phantom",
          skill: 6,
          points: 30,
          slots: ["Elite", "System", "Crew"]
        }, {
          name: '"Whisper"',
          faction: "Galactic Empire",
          id: 79,
          unique: true,
          ship: "TIE Phantom",
          skill: 7,
          points: 32,
          slots: ["Elite", "System", "Crew"]
        }, {
          name: "CR90 Corvette (Fore)",
          faction: "Rebel Alliance",
          id: 80,
          epic: true,
          ship: "CR90 Corvette (Fore)",
          skill: 4,
          points: 50,
          slots: ["Crew", "Hardpoint", "Hardpoint", "Team", "Team", "Cargo"]
        }, {
          name: "CR90 Corvette (Aft)",
          faction: "Rebel Alliance",
          id: 81,
          epic: true,
          ship: "CR90 Corvette (Aft)",
          skill: 4,
          points: 40,
          slots: ["Crew", "Hardpoint", "Team", "Cargo"]
        }, {
          name: "Wes Janson",
          faction: "Rebel Alliance",
          id: 82,
          unique: true,
          ship: "X-Wing",
          skill: 8,
          points: 29,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Jek Porkins",
          faction: "Rebel Alliance",
          id: 83,
          unique: true,
          ship: "X-Wing",
          skill: 7,
          points: 26,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: '"Hobbie" Klivian',
          faction: "Rebel Alliance",
          id: 84,
          unique: true,
          ship: "X-Wing",
          skill: 5,
          points: 25,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Tarn Mison",
          faction: "Rebel Alliance",
          id: 85,
          unique: true,
          ship: "X-Wing",
          skill: 3,
          points: 23,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Jake Farrell",
          faction: "Rebel Alliance",
          id: 86,
          unique: true,
          ship: "A-Wing",
          skill: 7,
          points: 24,
          slots: ["Elite", "Missile"]
        }, {
          name: "Gemmer Sojan",
          faction: "Rebel Alliance",
          id: 87,
          unique: true,
          ship: "A-Wing",
          skill: 5,
          points: 22,
          slots: ["Missile"]
        }, {
          name: "Keyan Farlander",
          faction: "Rebel Alliance",
          id: 88,
          unique: true,
          ship: "B-Wing",
          skill: 7,
          points: 29,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Nera Dantels",
          faction: "Rebel Alliance",
          id: 89,
          unique: true,
          ship: "B-Wing",
          skill: 5,
          points: 26,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "CR90 Corvette (Crippled Fore)",
          skip: true,
          faction: "Rebel Alliance",
          id: 90,
          ship: "CR90 Corvette (Fore)",
          skill: 4,
          points: 0,
          epic: true,
          slots: ["Crew"],
          ship_override: {
            attack: 2,
            agility: 0,
            hull: 0,
            shields: 0,
            actions: []
          }
        }, {
          name: "CR90 Corvette (Crippled Aft)",
          skip: true,
          faction: "Rebel Alliance",
          id: 91,
          ship: "CR90 Corvette (Aft)",
          skill: 4,
          points: 0,
          epic: true,
          slots: ["Cargo"],
          ship_override: {
            energy: 1,
            agility: 0,
            hull: 0,
            shields: 0,
            actions: []
          },
          modifier_func: function(stats) {
            stats.maneuvers[2][1] = 0;
            stats.maneuvers[2][3] = 0;
            return stats.maneuvers[4][2] = 0;
          }
        }, {
          name: "Wild Space Fringer",
          faction: "Rebel Alliance",
          id: 92,
          ship: "YT-2400",
          skill: 2,
          points: 30,
          slots: ["Cannon", "Missile", "Crew"]
        }, {
          name: "Eaden Vrill",
          faction: "Rebel Alliance",
          id: 93,
          ship: "YT-2400",
          unique: true,
          skill: 3,
          points: 32,
          slots: ["Cannon", "Missile", "Crew"]
        }, {
          name: '"Leebo"',
          faction: "Rebel Alliance",
          id: 94,
          ship: "YT-2400",
          unique: true,
          skill: 5,
          points: 34,
          slots: ["Elite", "Cannon", "Missile", "Crew"]
        }, {
          name: "Dash Rendar",
          faction: "Rebel Alliance",
          id: 95,
          ship: "YT-2400",
          unique: true,
          skill: 7,
          points: 36,
          slots: ["Elite", "Cannon", "Missile", "Crew"]
        }, {
          name: "Patrol Leader",
          faction: "Galactic Empire",
          id: 96,
          ship: "VT-49 Decimator",
          skill: 3,
          points: 40,
          slots: ["Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Captain Oicunn",
          faction: "Galactic Empire",
          id: 97,
          ship: "VT-49 Decimator",
          skill: 4,
          points: 42,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Commander Kenkirk",
          faction: "Galactic Empire",
          id: 98,
          ship: "VT-49 Decimator",
          skill: 6,
          points: 44,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Rear Admiral Chiraneau",
          faction: "Galactic Empire",
          id: 99,
          ship: "VT-49 Decimator",
          skill: 8,
          points: 46,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Prince Xizor",
          faction: "Scum and Villainy",
          id: 100,
          unique: true,
          ship: "StarViper",
          skill: 7,
          points: 31,
          slots: ["Elite", "Torpedo"]
        }, {
          name: "Unspoiled PS5 StarViper Pilot",
          faction: "Scum and Villainy",
          id: 101,
          unique: true,
          ship: "StarViper",
          skill: 5,
          points: 99,
          slots: ["Torpedo"]
        }, {
          name: "Black ???",
          faction: "Scum and Villainy",
          id: 102,
          ship: "StarViper",
          skill: 3,
          points: 99,
          slots: ["Torpedo"]
        }, {
          name: "Black Sun ???",
          faction: "Scum and Villainy",
          id: 103,
          ship: "StarViper",
          skill: 1,
          points: 99,
          slots: ["Torpedo"]
        }, {
          name: "Serissu",
          faction: "Scum and Villainy",
          id: 104,
          ship: "M3-A Interceptor",
          skill: 8,
          points: 20,
          unique: true,
          slots: ["Elite"]
        }, {
          name: "Laetin A'shera",
          faction: "Scum and Villainy",
          id: 105,
          ship: "M3-A Interceptor",
          skill: 6,
          points: 99,
          unique: true,
          slots: []
        }, {
          name: "Tansarii ???",
          faction: "Scum and Villainy",
          id: 106,
          ship: "M3-A Interceptor",
          skill: 5,
          points: 99,
          slots: []
        }, {
          name: "Cartel ???",
          faction: "Scum and Villainy",
          id: 107,
          ship: "M3-A Interceptor",
          skill: 2,
          points: 99,
          slots: []
        }, {
          name: "IG-88A",
          faction: "Scum and Villainy",
          id: 108,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 99,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88B",
          faction: "Scum and Villainy",
          id: 109,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 99,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88C",
          faction: "Scum and Villainy",
          id: 110,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 99,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88D",
          faction: "Scum and Villainy",
          id: 111,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 36,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "N'Dru Suhlak",
          unique: true,
          faction: "Scum and Villainy",
          id: 112,
          ship: "Z-95 Headhunter",
          skill: 7,
          points: 17,
          slots: ["Elite", "Missile", "Illicit"]
        }, {
          name: "Kaa'To Leeachos",
          unique: true,
          faction: "Scum and Villainy",
          id: 113,
          ship: "Z-95 Headhunter",
          skill: 5,
          points: 15,
          slots: ["Elite", "Missile", "Illicit"]
        }, {
          name: "Black Sun Soldier",
          faction: "Scum and Villainy",
          id: 114,
          ship: "Z-95 Headhunter",
          skill: 3,
          points: 13,
          slots: ["Missile", "Illicit"]
        }, {
          name: "Binayre Pirate",
          faction: "Scum and Villainy",
          id: 115,
          ship: "Z-95 Headhunter",
          skill: 1,
          points: 12,
          slots: ["Missile", "Illicit"]
        }, {
          name: "Boba Fett (Scum)",
          canonical_name: 'bobafett',
          faction: "Scum and Villainy",
          id: 116,
          ship: "Firespray-31",
          skill: 8,
          points: 39,
          unique: true,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Kath Scarlet (Scum)",
          canonical_name: 'kathscarlet',
          unique: true,
          faction: "Scum and Villainy",
          id: 117,
          ship: "Firespray-31",
          skill: 7,
          points: 99,
          slots: ["Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Unspoiled PS6 Scum Firespray Pilot",
          unique: true,
          faction: "Scum and Villainy",
          id: 118,
          ship: "Firespray-31",
          skill: 6,
          points: 99,
          slots: ["Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Unspoiled PS5 Scum Firespray Pilot",
          faction: "Scum and Villainy",
          id: 119,
          ship: "Firespray-31",
          skill: 5,
          points: 99,
          slots: ["Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Kavil",
          unique: true,
          faction: "Scum and Villainy",
          id: 120,
          ship: "Y-Wing",
          skill: 7,
          points: 24,
          slots: ["Elite", "Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Drea Renthal",
          unique: true,
          faction: "Scum and Villainy",
          id: 121,
          ship: "Y-Wing",
          skill: 5,
          points: 22,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Unspoiled PS4 Scum Y-Wing Pilot",
          faction: "Scum and Villainy",
          id: 122,
          ship: "Y-Wing",
          skill: 4,
          points: 99,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Syndicate Thug",
          faction: "Scum and Villainy",
          id: 123,
          ship: "Y-Wing",
          skill: 2,
          points: 18,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Unspoiled PS7 Scum HWK Pilot",
          unique: true,
          faction: "Scum and Villainy",
          id: 124,
          ship: "HWK-290",
          skill: 7,
          points: 99,
          slots: []
        }, {
          name: "Unspoiled PS5 Scum HWK Pilot",
          unique: true,
          faction: "Scum and Villainy",
          id: 125,
          ship: "HWK-290",
          skill: 5,
          points: 99,
          slots: []
        }, {
          name: "Unspoiled PS3 Scum HWK Pilot",
          unique: true,
          faction: "Scum and Villainy",
          id: 126,
          ship: "HWK-290",
          skill: 3,
          points: 99,
          slots: []
        }, {
          name: "Unspoiled PS1 Scum HWK Pilot",
          faction: "Scum and Villainy",
          id: 127,
          ship: "HWK-290",
          skill: 1,
          points: 99,
          slots: []
        }
      ],
      upgradesById: [
        {
          name: "Ion Cannon Turret",
          id: 0,
          slot: "Turret",
          points: 5,
          attack: 3,
          range: "1-2"
        }, {
          name: "Proton Torpedoes",
          id: 1,
          slot: "Torpedo",
          points: 4,
          attack: 4,
          range: "2-3"
        }, {
          name: "R2 Astromech",
          id: 2,
          slot: "Astromech",
          points: 1,
          modifier_func: function(stats) {
            var turn, _i, _ref, _results;
            if ((stats.maneuvers != null) && stats.maneuvers.length > 0) {
              _results = [];
              for (turn = _i = 0, _ref = stats.maneuvers[1].length; 0 <= _ref ? _i < _ref : _i > _ref; turn = 0 <= _ref ? ++_i : --_i) {
                if (stats.maneuvers[1][turn] > 0) {
                  stats.maneuvers[1][turn] = 2;
                }
                if (stats.maneuvers[2][turn] > 0) {
                  _results.push(stats.maneuvers[2][turn] = 2);
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          }
        }, {
          name: "R2-D2",
          aka: ["R2-D2 (Crew)"],
          canonical_name: 'r2d2',
          id: 3,
          unique: true,
          slot: "Astromech",
          points: 4
        }, {
          name: "R2-F2",
          id: 4,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "R5-D8",
          id: 5,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "R5-K6",
          id: 6,
          unique: true,
          slot: "Astromech",
          points: 2
        }, {
          name: "R5 Astromech",
          id: 7,
          slot: "Astromech",
          points: 1
        }, {
          name: "Determination",
          id: 8,
          slot: "Elite",
          points: 1
        }, {
          name: "Swarm Tactics",
          id: 9,
          slot: "Elite",
          points: 2
        }, {
          name: "Squad Leader",
          id: 10,
          unique: true,
          slot: "Elite",
          points: 2
        }, {
          name: "Expert Handling",
          id: 11,
          slot: "Elite",
          points: 2
        }, {
          name: "Marksmanship",
          id: 12,
          slot: "Elite",
          points: 3
        }, {
          name: "Concussion Missiles",
          id: 13,
          slot: "Missile",
          points: 4,
          attack: 4,
          range: "2-3"
        }, {
          name: "Cluster Missiles",
          id: 14,
          slot: "Missile",
          points: 4,
          attack: 3,
          range: "1-2"
        }, {
          name: "Daredevil",
          id: 15,
          slot: "Elite",
          points: 3
        }, {
          name: "Elusiveness",
          id: 16,
          slot: "Elite",
          points: 2
        }, {
          name: "Homing Missiles",
          id: 17,
          slot: "Missile",
          attack: 4,
          range: "2-3",
          points: 5
        }, {
          name: "Push the Limit",
          id: 18,
          slot: "Elite",
          points: 3
        }, {
          name: "Deadeye",
          id: 19,
          slot: "Elite",
          points: 1
        }, {
          name: "Expose",
          id: 20,
          slot: "Elite",
          points: 4
        }, {
          name: "Gunner",
          id: 21,
          slot: "Crew",
          points: 5
        }, {
          name: "Ion Cannon",
          id: 22,
          slot: "Cannon",
          points: 3,
          attack: 3,
          range: "1-3"
        }, {
          name: "Heavy Laser Cannon",
          id: 23,
          slot: "Cannon",
          points: 7,
          attack: 4,
          range: "2-3"
        }, {
          name: "Seismic Charges",
          id: 24,
          slot: "Bomb",
          points: 2
        }, {
          name: "Mercenary Copilot",
          id: 25,
          slot: "Crew",
          points: 2
        }, {
          name: "Assault Missiles",
          id: 26,
          slot: "Missile",
          points: 5,
          attack: 4,
          range: "2-3"
        }, {
          name: "Veteran Instincts",
          id: 27,
          slot: "Elite",
          points: 1,
          modifier_func: function(stats) {
            return stats.skill += 2;
          }
        }, {
          name: "Proximity Mines",
          id: 28,
          slot: "Bomb",
          points: 3
        }, {
          name: "Weapons Engineer",
          id: 29,
          slot: "Crew",
          points: 3
        }, {
          name: "Draw Their Fire",
          id: 30,
          slot: "Elite",
          points: 1
        }, {
          name: "Luke Skywalker",
          id: 31,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 7
        }, {
          name: "Nien Nunb",
          id: 32,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 1,
          modifier_func: function(stats) {
            var s, _i, _len, _ref, _ref1, _results;
            _ref1 = (_ref = stats.maneuvers) != null ? _ref : [];
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              s = _ref1[_i];
              if (s[2] > 0) {
                _results.push(s[2] = 2);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }, {
          name: "Chewbacca",
          id: 33,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 4
        }, {
          name: "Advanced Proton Torpedoes",
          id: 34,
          slot: "Torpedo",
          attack: 5,
          range: "1",
          points: 6
        }, {
          name: "Autoblaster",
          id: 35,
          slot: "Cannon",
          attack: 3,
          range: "1",
          points: 5
        }, {
          name: "Fire-Control System",
          id: 36,
          slot: "System",
          points: 2
        }, {
          name: "Blaster Turret",
          id: 37,
          slot: "Turret",
          points: 4,
          attack: 3,
          range: "1-2"
        }, {
          name: "Recon Specialist",
          id: 38,
          slot: "Crew",
          points: 3
        }, {
          name: "Saboteur",
          id: 39,
          slot: "Crew",
          points: 2
        }, {
          name: "Intelligence Agent",
          id: 40,
          slot: "Crew",
          points: 1
        }, {
          name: "Proton Bomb",
          id: 41,
          slot: "Bomb",
          points: 5
        }, {
          name: "Adrenaline Rush",
          id: 42,
          slot: "Elite",
          points: 1
        }, {
          name: "Advanced Sensors",
          id: 43,
          slot: "System",
          points: 3
        }, {
          name: "Sensor Jammer",
          id: 44,
          slot: "System",
          points: 4
        }, {
          name: "Darth Vader",
          id: 45,
          unique: true,
          faction: "Galactic Empire",
          slot: "Crew",
          points: 3
        }, {
          name: "Rebel Captive",
          id: 46,
          unique: true,
          faction: "Galactic Empire",
          slot: "Crew",
          points: 3
        }, {
          name: "Flight Instructor",
          id: 47,
          slot: "Crew",
          points: 4
        }, {
          name: "Navigator",
          id: 48,
          slot: "Crew",
          points: 3,
          epic_restriction_func: function(ship) {
            var _ref;
            return !((_ref = ship.huge) != null ? _ref : false);
          }
        }, {
          name: "Opportunist",
          id: 49,
          slot: "Elite",
          points: 4
        }, {
          name: "Comms Booster",
          id: 50,
          slot: "Cargo",
          points: 4
        }, {
          name: "Slicer Tools",
          id: 51,
          slot: "Cargo",
          points: 7
        }, {
          name: "Shield Projector",
          id: 52,
          slot: "Cargo",
          points: 4
        }, {
          name: "Ion Pulse Missiles",
          id: 53,
          slot: "Missile",
          points: 3,
          attack: 3,
          range: "2-3"
        }, {
          name: "Wingman",
          id: 54,
          slot: "Elite",
          points: 2
        }, {
          name: "Decoy",
          id: 55,
          slot: "Elite",
          points: 2
        }, {
          name: "Outmaneuver",
          id: 56,
          slot: "Elite",
          points: 3
        }, {
          name: "Predator",
          id: 57,
          slot: "Elite",
          points: 3
        }, {
          name: "Flechette Torpedoes",
          id: 58,
          slot: "Torpedo",
          points: 2,
          attack: 3,
          range: "2-3"
        }, {
          name: "R7 Astromech",
          id: 59,
          slot: "Astromech",
          points: 2
        }, {
          name: "R7-T1",
          id: 60,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "Tactician",
          id: 61,
          slot: "Crew",
          points: 2
        }, {
          name: "R2-D2 (Crew)",
          aka: ["R2-D2"],
          id: 62,
          unique: true,
          slot: "Crew",
          points: 4,
          faction: "Rebel Alliance"
        }, {
          name: "C-3PO",
          unique: true,
          id: 63,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance"
        }, {
          name: "Single Turbolasers",
          id: 64,
          slot: "Hardpoint",
          points: 8,
          energy: 2,
          attack: 4,
          range: "3-5"
        }, {
          name: "Quad Laser Cannons",
          id: 65,
          slot: "Hardpoint",
          points: 6,
          energy: 2,
          attack: 3,
          range: "1-2"
        }, {
          name: "Tibanna Gas Supplies",
          id: 66,
          slot: "Cargo",
          points: 4,
          limited: true
        }, {
          name: "Ionization Reactor",
          id: 67,
          slot: "Cargo",
          points: 4,
          energy: 5,
          limited: true
        }, {
          name: "Engine Booster",
          id: 68,
          slot: "Cargo",
          points: 3,
          limited: true
        }, {
          name: "R3-A2",
          id: 69,
          unique: true,
          slot: "Astromech",
          points: 2
        }, {
          name: "R2-D6",
          id: 70,
          unique: true,
          slot: "Astromech",
          points: 1,
          restriction_func: function(ship) {
            var conferred_addon, upgrade, _i, _j, _len, _len1, _ref, _ref1, _ref2;
            if (ship.effectiveStats().skill <= 2 || __indexOf.call(ship.pilot.slots, 'Elite') >= 0) {
              return false;
            }
            _ref = ship.upgrades;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              upgrade = _ref[_i];
              if ((upgrade != null) && ((_ref1 = upgrade.data) != null ? _ref1.name : void 0) !== 'R2-D6') {
                _ref2 = upgrade.conferredAddons;
                for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                  conferred_addon = _ref2[_j];
                  if (conferred_addon.slot === 'Elite') {
                    return false;
                  }
                }
              }
            }
            return true;
          },
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Elite"
            }
          ]
        }, {
          name: "Enhanced Scopes",
          id: 71,
          slot: "System",
          points: 1
        }, {
          name: "Chardaan Refit",
          id: 72,
          slot: "Missile",
          points: -2,
          ship: "A-Wing"
        }, {
          name: "Proton Rockets",
          id: 73,
          slot: "Missile",
          points: 3,
          attack: 2,
          range: "1"
        }, {
          name: "Kyle Katarn",
          id: 74,
          unique: true,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance"
        }, {
          name: "Jan Ors",
          id: 75,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Toryn Farr",
          id: 76,
          unique: true,
          slot: "Crew",
          points: 6,
          faction: "Rebel Alliance",
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.huge) != null ? _ref : false;
          }
        }, {
          name: "R4-D6",
          id: 77,
          unique: true,
          slot: "Astromech",
          points: 1
        }, {
          name: "R5-P9",
          id: 78,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "WED-15 Repair Droid",
          id: 79,
          slot: "Crew",
          points: 2,
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.huge) != null ? _ref : false;
          }
        }, {
          name: "Carlist Rieekan",
          id: 80,
          unique: true,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance",
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.huge) != null ? _ref : false;
          }
        }, {
          name: "Jan Dodonna",
          id: 81,
          unique: true,
          slot: "Crew",
          points: 6,
          faction: "Rebel Alliance",
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.huge) != null ? _ref : false;
          }
        }, {
          name: "Expanded Cargo Hold",
          id: 82,
          slot: "Cargo",
          points: 1,
          ship: "GR-75 Medium Transport"
        }, {
          name: "Backup Shield Generator",
          id: 83,
          slot: "Cargo",
          limited: true,
          points: 3
        }, {
          name: "EM Emitter",
          id: 84,
          slot: "Cargo",
          limited: true,
          points: 3
        }, {
          name: "Frequency Jammer",
          id: 85,
          slot: "Cargo",
          limited: true,
          points: 4
        }, {
          name: "Han Solo",
          id: 86,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 2
        }, {
          name: "Leia Organa",
          id: 87,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 4
        }, {
          name: "Targeting Coordinator",
          id: 88,
          slot: "Crew",
          limited: true,
          points: 4
        }, {
          name: "Raymus Antilles",
          id: 89,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 6,
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.huge) != null ? _ref : false;
          }
        }, {
          name: "Gunnery Team",
          id: 90,
          slot: "Team",
          limited: true,
          points: 4
        }, {
          name: "Sensor Team",
          id: 91,
          slot: "Team",
          points: 4
        }, {
          name: "Engineering Team",
          id: 92,
          slot: "Team",
          limited: true,
          points: 4
        }, {
          name: "Lando Calrissian",
          id: 93,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 3
        }, {
          name: "Mara Jade",
          id: 94,
          slot: "Crew",
          unique: true,
          faction: "Galactic Empire",
          points: 3
        }, {
          name: "Fleet Officer",
          id: 95,
          slot: "Crew",
          faction: "Galactic Empire",
          points: 3
        }, {
          name: "Stay On Target",
          id: 96,
          slot: "Elite",
          points: 2
        }, {
          name: "Dash Rendar",
          id: 97,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Lone Wolf",
          id: 98,
          unique: true,
          slot: "Elite",
          points: 2
        }, {
          name: '"Leebo"',
          id: 99,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Ruthlessness",
          id: 100,
          slot: "Elite",
          points: 3,
          faction: "Galactic Empire"
        }, {
          name: "Intimidation",
          id: 101,
          slot: "Elite",
          points: 2
        }, {
          name: "Ysanne Isard",
          id: 102,
          unique: true,
          slot: "Crew",
          points: 4,
          faction: "Galactic Empire"
        }, {
          name: "Moff Jerjerrod",
          id: 103,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Galactic Empire"
        }, {
          name: "Ion Torpedoes",
          id: 104,
          slot: "Torpedo",
          points: 5,
          attack: 4,
          range: "2-3"
        }, {
          name: "Bodyguard",
          id: 105,
          unique: true,
          slot: "Elite",
          points: 2,
          faction: "Scum and Villainy"
        }, {
          name: "Calc???",
          id: 106,
          slot: "Elite",
          points: 99
        }, {
          name: "Accuracy Corrector",
          id: 107,
          slot: "System",
          points: 3
        }, {
          name: "Inertial Dampeners",
          id: 108,
          slot: "Illicit",
          points: 1
        }, {
          name: "Flechette Cannon",
          id: 109,
          slot: "Cannon",
          points: 99
        }, {
          name: '"Mang??? Cannon"',
          id: 110,
          slot: "Cannon",
          points: 99
        }, {
          name: "Dead Man's Switch",
          id: 111,
          slot: "Illicit",
          points: 2
        }, {
          name: "Feedback Array",
          id: 112,
          slot: "Illicit",
          points: 2
        }, {
          name: '"Hot Shot" Blaster',
          id: 113,
          slot: "Illicit",
          points: 3,
          attack: 3,
          range: "1-2"
        }, {
          name: "Greedo",
          id: 114,
          unique: true,
          slot: "Crew",
          faction: "Scum and Villainy",
          points: 1
        }, {
          name: "Salvaged Astromech",
          id: 115,
          slot: "Salvaged Astromech",
          points: 2
        }, {
          name: "Bomb Loadout",
          id: 116,
          limited: true,
          slot: "Torpedo",
          points: 0,
          ship: "Y-Wing",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Bomb"
            }
          ]
        }, {
          name: '"Genius"',
          id: 117,
          unique: true,
          slot: "Salvaged Astromech",
          points: 0
        }, {
          name: "Unhinged Astromech",
          id: 118,
          slot: "Salvaged Astromech",
          points: 1,
          modifier_func: function(stats) {
            var turn, _i, _ref, _results;
            if ((stats.maneuvers != null) && stats.maneuvers.length > 3) {
              _results = [];
              for (turn = _i = 0, _ref = stats.maneuvers[3].length; 0 <= _ref ? _i < _ref : _i > _ref; turn = 0 <= _ref ? ++_i : --_i) {
                if (stats.maneuvers[3][turn] > 0) {
                  _results.push(stats.maneuvers[3][turn] = 2);
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          }
        }, {
          name: "R4-B11",
          id: 119,
          unique: true,
          slot: "Salvaged Astromech",
          points: 3
        }, {
          name: "Autoblaster Turret",
          id: 120,
          slot: "Turret",
          points: 2,
          attack: 2,
          range: "1"
        }, {
          name: "R4 Agromech",
          id: 121,
          slot: "Salvaged Astromech",
          points: 2
        }
      ],
      modificationsById: [
        {
          name: "Zero modification",
          id: 0,
          skip: true
        }, {
          name: "Stealth Device",
          id: 1,
          points: 3,
          modifier_func: function(stats) {
            return stats.agility += 1;
          }
        }, {
          name: "Shield Upgrade",
          id: 2,
          points: 4,
          modifier_func: function(stats) {
            return stats.shields += 1;
          }
        }, {
          name: "Engine Upgrade",
          id: 3,
          points: 4,
          modifier_func: function(stats) {
            if (__indexOf.call(stats.actions, 'Boost') < 0) {
              return stats.actions.push('Boost');
            }
          }
        }, {
          name: "Anti-Pursuit Lasers",
          id: 4,
          points: 2,
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.large) != null ? _ref : false;
          }
        }, {
          name: "Targeting Computer",
          id: 5,
          points: 2,
          modifier_func: function(stats) {
            if (__indexOf.call(stats.actions, 'Target Lock') < 0) {
              return stats.actions.push('Target Lock');
            }
          }
        }, {
          name: "Hull Upgrade",
          id: 6,
          points: 3,
          modifier_func: function(stats) {
            return stats.hull += 1;
          }
        }, {
          name: "Munitions Failsafe",
          id: 7,
          points: 1
        }, {
          name: "Stygium Particle Accelerator",
          id: 8,
          points: 2
        }, {
          name: "Advanced Cloaking Device",
          id: 9,
          points: 4,
          ship: "TIE Phantom"
        }, {
          name: "Combat Retrofit",
          id: 10,
          points: 10,
          ship: "GR-75 Medium Transport",
          huge: true,
          modifier_func: function(stats) {
            stats.hull += 2;
            return stats.shields += 1;
          }
        }, {
          name: "B-Wing/E2",
          id: 11,
          points: 1,
          ship: "B-Wing",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Crew"
            }
          ]
        }, {
          name: "Countermeasures",
          id: 12,
          points: 3,
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.large) != null ? _ref : false;
          }
        }, {
          name: "Experimental Interface",
          id: 13,
          unique: true,
          points: 3
        }, {
          name: "Tactical Jammer",
          id: 14,
          points: 1,
          restriction_func: function(ship) {
            var _ref;
            return (_ref = ship.data.large) != null ? _ref : false;
          }
        }, {
          name: "Autoth???",
          id: 15,
          points: 99
        }
      ],
      titlesById: [
        {
          name: "Zero Title",
          id: 0,
          skip: true
        }, {
          name: "Slave I",
          id: 1,
          unique: true,
          points: 0,
          ship: "Firespray-31",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Torpedo"
            }
          ]
        }, {
          name: "Millennium Falcon",
          id: 2,
          unique: true,
          points: 1,
          ship: "YT-1300",
          actions: "Evade",
          modifier_func: function(stats) {
            if (__indexOf.call(stats.actions, 'Evade') < 0) {
              return stats.actions.push('Evade');
            }
          }
        }, {
          name: "Moldy Crow",
          id: 3,
          unique: true,
          points: 3,
          ship: "HWK-290"
        }, {
          name: "ST-321",
          id: 4,
          unique: true,
          points: 3,
          ship: "Lambda-Class Shuttle"
        }, {
          name: "Royal Guard TIE",
          id: 5,
          points: 0,
          ship: "TIE Interceptor",
          confersAddons: [
            {
              type: cardDB.Modification
            }
          ],
          restriction_func: function(ship) {
            return ship.effectiveStats().skill > 4;
          },
          special_case: 'Royal Guard TIE'
        }, {
          name: "Dodonna's Pride",
          id: 6,
          unique: true,
          points: 4,
          ship: "CR90 Corvette (Fore)"
        }, {
          name: "A-Wing Test Pilot",
          id: 7,
          points: 0,
          ship: "A-Wing",
          restriction_func: function(ship) {
            return ship.effectiveStats().skill > 1;
          },
          validation_func: function(ship, upgrade_obj) {
            var elite, elites, upgrade;
            if (!(ship.effectiveStats().skill > 1)) {
              return false;
            }
            elites = (function() {
              var _i, _len, _ref, _results;
              _ref = ship.upgrades;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                upgrade = _ref[_i];
                if (upgrade.slot === 'Elite' && (upgrade.data != null)) {
                  _results.push(upgrade.data.canonical_name);
                }
              }
              return _results;
            })();
            while (elites.length > 0) {
              elite = elites.pop();
              if (__indexOf.call(elites, elite) >= 0) {
                return false;
              }
            }
            return true;
          },
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Elite"
            }
          ],
          special_case: "A-Wing Test Pilot"
        }, {
          name: "B-Wing/E",
          id: 8,
          skip: true,
          points: 99,
          ship: "B-Wing",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Crew"
            }
          ]
        }, {
          name: "Tantive IV",
          id: 9,
          unique: true,
          points: 4,
          ship: "CR90 Corvette (Fore)",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Crew"
            }, {
              type: cardDB.Upgrade,
              slot: "Team"
            }
          ]
        }, {
          name: "Bright Hope",
          id: 10,
          energy: "+2",
          unique: true,
          points: 5,
          ship: "GR-75 Medium Transport",
          modifier_func: function(stats) {
            return stats.energy += 2;
          }
        }, {
          name: "Quantum Storm",
          id: 11,
          energy: "+1",
          unique: true,
          points: 4,
          ship: "GR-75 Medium Transport",
          modifier_func: function(stats) {
            return stats.energy += 1;
          }
        }, {
          name: "Dutyfree",
          id: 12,
          energy: "+0",
          unique: true,
          points: 2,
          ship: "GR-75 Medium Transport"
        }, {
          name: "Jaina's Light",
          id: 13,
          unique: true,
          points: 2,
          ship: "CR90 Corvette (Fore)"
        }, {
          name: "Outrider",
          id: 14,
          unique: true,
          points: 5,
          ship: "YT-2400"
        }, {
          name: "Dauntless",
          id: 15,
          unique: true,
          points: 2,
          ship: "VT-49 Decimator"
        }, {
          name: "Virago",
          id: 16,
          unique: true,
          points: 1,
          ship: "StarViper",
          restriction_func: function(ship) {
            return ship.pilot.skill > 2;
          },
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "System"
            }, {
              type: cardDB.Upgrade,
              slot: "Illicit"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Cannon)',
          id: 17,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Cannon"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Torpedo)',
          id: 18,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Torpedo"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Missile)',
          id: 19,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: cardDB.Upgrade,
              slot: "Missile"
            }
          ]
        }, {
          name: 'IG-2000',
          id: 20,
          points: 0,
          ship: "Aggressor"
        }, {
          name: "BTL-A4 Y-Wing",
          id: 21,
          points: 0,
          ship: "Y-Wing"
        }
      ]
    };

    return cardDB;
  });