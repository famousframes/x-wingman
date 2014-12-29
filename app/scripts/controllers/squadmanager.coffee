"use strict"

###*
@ngdoc function
@name xWingmanApp.controller:CardbrowserCtrl
@description
# SquadManagerCtrl
Controller of the xWingmanApp
###

angular.module('ngAppBaseApp')

.controller('SquadManagerCtrl', ($scope, CardData, ManifestData) ->

  # prepare defaults
  $scope.faction = 'Rebel Alliance'
  $scope.s = selected: ''
  $scope.ships =
    info: {}
    selected: []
  $scope.cards =
    ships: CardData.basicCardData.ships
    pilots: {}
    pilotsById: CardData.basicCardData.pilotsById
    upgrades: {}
    upgradesById: CardData.basicCardData.upgradesById
    modifications: {}
    modificationsById: CardData.basicCardData.modificationsById
    titles: {}
    titlesById: CardData.basicCardData.titlesById

  # ----------------------------------------------------------------
  # watchers
  # ----------------------------------------------------------------

  # set up watcher for selected ships. recalculate commander points
  $scope.$watch 'ships.selected', ((collection) ->
    if collection
      $scope.pointsTotal = []
      $scope.squadTotal = 0;
      for ship in $scope.ships.selected
        $scope.pointsTotal.push(
          value: ship.points
          ship: ship.name
        )
        $scope.squadTotal += ship.points
  ), true

  # ----------------------------------------------------------------
  # public functions
  # ----------------------------------------------------------------

  $scope.addToCollection = (ship) ->
    return false if ship is ''
    #ship.modifications = []
    $scope.ships.selected.push $.extend(true, {}, ship)

  $scope.duplicateShip = (ship) ->
    $scope.ships.selected.push $.extend(true, {}, ship)


  # ----------------------------------------------------------------
  # private functions
  # ----------------------------------------------------------------

  # set up cards from CardData and ManifestData service
  prepCardData = ->
    # pilots
    for pilot_data in $scope.cards.pilotsById
      unless pilot_data.skip?
        pilot_data.sources = []
        $scope.cards.pilots[pilot_data.name] = pilot_data

    # upgrades
    for upgrade_data in $scope.cards.upgradesById
      unless upgrade_data.skip?
        upgrade_data.sources = []
        $scope.cards.upgrades[upgrade_data.name] = upgrade_data

    # modifications
    for mod_data in $scope.cards.modificationsById
      unless mod_data.skip?
        mod_data.sources = []
        $scope.cards.modifications[mod_data.name] = mod_data

    # title
    for title_data in $scope.cards.titlesById
      unless title_data.skip?
        title_data.sources = []
        $scope.cards.titles[title_data.name] = title_data

    # set sources from manifest
    for expansion, cards of ManifestData
      for card in cards
        try
          switch card.type
            when 'pilot'
              $scope.cards.pilots[card.name].sources.push expansion
            when 'upgrade'
              $scope.cards.upgrades[card.name].sources.push expansion
            when 'modification'
              $scope.cards.modifications[card.name].sources.push expansion
            when 'title'
              $scope.cards.titles[card.name].sources.push expansion
            when 'ship'
              ''
            else
              throw new Error('Unexpected card type #{card.type} for card #{card.name} of #{expansion}')

        catch e
          console.error 'Error adding card #{card.name} (#{card.type}) from #{expansion}'

  # initial fn call
  prepCardData()

)

.controller('SquadCtrl', ($scope, CardData, $filter) ->

  $scope.changePilot = ($item, $model) ->
    #console.log($item, $model)
    $scope.ship.upgrades = []
    $scope.ship.modifications = []
    $scope.ship.addons = []

  # ----------------------------------------------------------------
  # private functions
  # ----------------------------------------------------------------

  removeItem = (itemArray, item) ->
    idx = itemArray.indexOf item
    itemArray.splice(idx, 1) unless idx == -1
    return itemArray

  effectiveStats = ->
    # setup/recalculate ship.points
    $scope.ship.points = 0
    console.log 'recalc'
    # setup/recalculate ship.stats
    $scope.ship.stats =
      skill: $scope.ship.pilot.skill
      attack: $scope.ship.pilot.ship_override?.attack ? $scope.ship.attack
      energy: $scope.ship.pilot.ship_override?.energy ? $scope.ship.energy
      agility: $scope.ship.pilot.ship_override?.agility ? $scope.ship.agility
      hull: $scope.ship.pilot.ship_override?.hull ? $scope.ship.hull
      shields: $scope.ship.pilot.ship_override?.shields ? $scope.ship.shields
      actions: ($scope.ship.pilot.ship_override?.actions ? $scope.ship.actions).slice 0
      maneuvers: []


    # deep copy of maneuvers array
    for s in [0 ... ($scope.ship.maneuvers ? []).length]
      $scope.ship.stats.maneuvers[s] = $scope.ship.maneuvers[s].slice 0

    # apply upgrades modifier
    for upgrade in $scope.ship.upgrades
      upgrade.modifier_func($scope.ship.stats) if upgrade?.modifier_func?
      $scope.ship.points += upgrade.points if upgrade?

    # apply title modifier
    # TODO: Implement confersAddon
    $scope.ship.title.modifier_func($scope.ship.stats) if $scope.ship.title?.modifier_func?
    $scope.ship.points += $scope.ship.title.points if $scope.ship.title?

    # apply modification modifier
    for modification in $scope.ship.modifications
      modification.modifier_func($scope.ship.stats) if modification?.modifier_func?
      $scope.ship.points += modification.points if modification?

    # apply pilot modifier
    $scope.ship.pilot.modifier_func($scope.ship.stats) if $scope.ship.pilot?.modifier_func?
    $scope.ship.points += $scope.ship.pilot.points


  # select lowest available pilot for preselection unless there is not already one selected ...
  $scope.ship.pilot = $filter('orderBy')($filter('filter')($scope.cards.pilotsById, ship: $scope.ship.name, true), 'points')[0] unless $scope.ship.pilot?
  # ... and reset all modifications and upgrades
  $scope.ship.upgrades = [] unless $scope.ship.upgrades?
  $scope.ship.modifications = [] unless $scope.ship.modifications?
  $scope.ship.conferredAddon = []

  # ----------------------------------------------------------------
  # public functions
  # ----------------------------------------------------------------

  # clear dropdown selection
  $scope.clearSelection = (e, select) ->
    e.preventDefault();
    e.stopPropagation();
    select.selected = null;

  # check if ship has titles
  $scope.hasTitles = (ship) ->
    return $filter('filterByShip')($scope.cards.titlesById, ship).length > 0

  $scope.getConferredAddons = (addons) ->

    result = []

    angular.forEach(addons, (addon, key) ->
      for s in addon.confersAddons
        result.push s.slot
    )

    return result;

  # ----------------------------------------------------------------
  # watchers
  # ----------------------------------------------------------------

  # recalculate stats on element change
  $scope.$watch 'ship', ((collection) ->
    effectiveStats() if collection
  ), true

  $scope.$watch 'ship.modifications', ((collection) ->
    if collection
      # in case of changing, remove addon properly
      console.log 'checking for conferred addons'

      for addon in $scope.ship.conferredAddon
        if $scope.ship.modifications.indexOf(addon) == -1
          console.log 'pop',addon
          $scope.ship.conferredAddon = removeItem($scope.ship.conferredAddon, addon)

          #for item in addon.confersAddons
          #  console.log 'pop',item
            #$scope.ship.conferredAddon = removeItem($scope.ship.conferredAddon, item)

      for mod in $scope.ship.modifications
        if $scope.ship.conferredAddon.indexOf(mod) == -1 && mod?.confersAddons?
          console.log 'push',mod
          $scope.ship.conferredAddon.push(mod)

      ###
      for addon in $scope.ship.addons
        if $scope.ship.modifications.indexOf(addon) == -1
          for item in addon.confersAddons
              for upgrade in $scope.ship.upgrades
                if upgrade?
                  $scope.ship.upgrades = removeItem($scope.ship.upgrades, upgrade) if upgrade.slot == item.slot

              $scope.ship.pilot.slots = removeItem($scope.ship.pilot.slots, item.slot)

          $scope.ship.addons = removeItem($scope.ship.addons, addon)


      # push conferredAddons
      for mod in $scope.ship.modifications
        if $scope.ship.addons.indexOf(mod) == -1 && mod?
          if mod.confersAddons?
            $scope.ship.addons.push(mod)
            for item in mod.confersAddons
              $scope.ship.pilot.slots.push item.slot

      # apply conferredAddons
      #for addon in $scope.ship.addons
      #  for item in addon.confersAddons
      #    $scope.ship.pilot.slots.push item.slot if item.type == 'Upgrade'

      ###

  ), true

  # reset upgrades on pilot change and recalculate stats
  ###
  $scope.$watch 'ship.pilot', ((collection) ->
    effectiveStats() if collection
  ), true
  ###

)

.filter 'listfilter', [->
  (items, searchText) ->
    filtered = []
    angular.forEach items, (item) ->
      filtered.push item if item.factions.indexOf(searchText) >= 0

    filtered
]

.filter 'parseIconPlaceholder', [->
  (text) ->
    text.replace(/%ASTROMECH%/g, '<i class="xwing-font xwing-font-astromech"></i>')
    .replace(/%BANKLEFT%/g, '<i class="xwing-font xwing-font-bankleft"></i>')
    .replace(/%BANKRIGHT%/g, '<i class="xwing-font xwing-font-bankright"></i>')
    .replace(/%BARRELROLL%/g, '<i class="xwing-font xwing-font-barrelroll"></i>')
    .replace(/%BOMB%/g, '<i class="xwing-font xwing-font-bomb"></i>')
    .replace(/%BOOST%/g, '<i class="xwing-font xwing-font-boost"></i>')
    .replace(/%CANNON%/g, '<i class="xwing-font xwing-font-cannon"></i>')
    .replace(/%CARGO%/g, '<i class="xwing-font xwing-font-cargo"></i>')
    .replace(/%CLOAK%/g, '<i class="xwing-font xwing-font-cloak"></i>')
    .replace(/%COORDINATE%/g, '<i class="xwing-font xwing-font-coordinate"></i>')
    .replace(/%CRIT%/g, '<i class="xwing-font xwing-font-crit"></i>')
    .replace(/%CREW%/g, '<i class="xwing-font xwing-font-crew"></i>')
    .replace(/%ELITE%/g, '<i class="xwing-font xwing-font-elite"></i>')
    .replace(/%EVADE%/g, '<i class="xwing-font xwing-font-evade"></i>')
    .replace(/%FOCUS%/g, '<i class="xwing-font xwing-font-focus"></i>')
    .replace(/%HARDPOINT%/g, '<i class="xwing-font xwing-font-hardpoint"></i>')
    .replace(/%HIT%/g, '<i class="xwing-font xwing-font-hit"></i>')
    .replace(/%ILLICIT%/g, '<i class="xwing-font xwing-font-illicit"></i>')
    .replace(/%JAM%/g, '<i class="xwing-font xwing-font-jam"></i>')
    .replace(/%KTURN%/g, '<i class="xwing-font xwing-font-kturn"></i>')
    .replace(/%MISSILE%/g, '<i class="xwing-font xwing-font-missile"></i>')
    .replace(/%RECOVER%/g, '<i class="xwing-font xwing-font-recover"></i>')
    .replace(/%REINFORCE%/g, '<i class="xwing-font xwing-font-reinforce"></i>')
    .replace(/%SALVAGEDASTROMECH%/g, '<i class="xwing-font xwing-font-salvagedastromech"></i>')
    .replace(/%SLOOPLEFT%/g, '<i class="xwing-font xwing-font-sloopleft"></i>')
    .replace(/%SLOOPRIGHT%/g, '<i class="xwing-font xwing-font-sloopright"></i>')
    .replace(/%STRAIGHT%/g, '<i class="xwing-font xwing-font-straight"></i>')
    .replace(/%STOP%/g, '<i class="xwing-font xwing-font-stop"></i>')
    .replace(/%SYSTEM%/g, '<i class="xwing-font xwing-font-system"></i>')
    .replace(/%TARGETLOCK%/g, '<i class="xwing-font xwing-font-targetlock"></i>')
    .replace(/%TEAM%/g, '<i class="xwing-font xwing-font-team"></i>')
    .replace(/%TORPEDO%/g, '<i class="xwing-font xwing-font-torpedo"></i>')
    .replace(/%TURNLEFT%/g, '<i class="xwing-font xwing-font-turnleft"></i>')
    .replace(/%TURNRIGHT%/g, '<i class="xwing-font xwing-font-turnright"></i>')
    .replace(/%TURRET%/g, '<i class="xwing-font xwing-font-turret"></i>')
    .replace(/%UTURN%/g, '<i class="xwing-font xwing-font-kturn"></i>')
    .replace(/%HUGESHIPONLY%/g, '<span class="card-restriction">Huge Ship only.</span>')
    .replace(/%LARGESHIPONLY%/g, '<span class="card-restriction">Large Ship only.</span>')
    .replace(/%REBELONLY%/g, '<span class="card-restriction">Rebel only.</span>')
    .replace(/%IMPERIALONLY%/g, '<span class="card-restriction">Imperial only.</span>')
    .replace(/%SCUMONLY%/g, '<span class="card-restriction">Scum only.</span>')
    .replace(/%LINEBREAK%/g, '<br /><br />')
]

.filter 'unsafe', [
  '$sce'
  ($sce) ->
    return (val) ->
      $sce.trustAsHtml val
]

.filter 'filterByShip', [->
  (items, ship) ->
    filtered = []
    angular.forEach items, (item) ->
      if item.ship?
        unless item.ship is ship.name
          return
      if(item.restriction_func?)
        if(item.restriction_func(ship))
          filtered.push item unless item.skip
          return
        else
          return

      filtered.push item unless item.skip

    filtered
]

# update popover template for binding unsafe html
angular.module('template/popover/popover.html', []).run [
  '$templateCache'
  ($templateCache) ->
    $templateCache.put 'template/popover/popover.html', '<div class="popover {{placement}}" data-ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="arrow"></div>\n' + '\n' + '  <div class="popover-inner">\n' + '      <h3 class="popover-title" data-ng-bind-html="title | unsafe" data-ng-show="title"></h3>\n' + '      <div class="popover-content" data-ng-bind-html="content | unsafe"></div>\n' + '  </div>\n' + '</div>\n' + ''
]