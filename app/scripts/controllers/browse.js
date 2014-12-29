'use strict';

/**
 * @ngdoc function
 * @name xWingmanApp.controller:BrowsectrlCtrl
 * @description
 * # BrowsectrlCtrl
 * Controller of the xWingmanApp
 */
angular.module('xWingmanApp')
  .controller('BrowseCtrl', function ($scope, CardData) {

    var _data, _ships, _pilots, _upgrades, _modifications, _titles;

    _data           = CardData;
    _ships          = _data.basicCardData.ships;
    _pilots         = _data.basicCardData.pilotsById;
    _upgrades       = _data.basicCardData.upgradesById;
    _modifications  = _data.basicCardData.modificationsById;
    _titles         = _data.basicCardData.titlesById;

    // assign to scope
    $scope.cards          = _data;
    $scope.ships          = _ships;
    $scope.pilots         = _pilots;
    $scope.upgrades       = _upgrades;
    $scope.modifications  = _modifications;
    $scope.titles         = _titles;

    // set defaults
    $scope.filterView = {
      showShips: true,
      showPilots: true,
      showUpgrades: true,
      showModifications: true,
      showTitles: true
    };


  })
  .controller('ShipCtrl', function($scope, CardData) {
    $scope.hideDetails = true;

  })
  .controller('PilotCtrl', function($scope, CardData) {
    $scope.pilotShip = undefined;
    $scope.getShip = function (ship) {

      angular.forEach(CardData.basicCardData.ships, function(value, key) {

        if (value.name === ship) {
          $scope.pilotShip = value.attack;
        }

      })
    }
  })
  .filter('filterShipsByFaction',[ function () {
    return function(items, searchText) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( item.factions.indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    };
  }])
  .filter('filterByType',[ function () {
    return function(items, searchText) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( item.factions.indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    };
  }])
  .filter('parseIconPlaceholder', function () {
    return function (text, target, otherProp) {
      return text.replace(/%ASTROMECH%/g, '<i class="xwing-font xwing-font-astromech"></i>').replace(/%BANKLEFT%/g, '<i class="xwing-font xwing-font-bankleft"></i>').replace(/%BANKRIGHT%/g, '<i class="xwing-font xwing-font-bankright"></i>').replace(/%BARRELROLL%/g, '<i class="xwing-font xwing-font-barrelroll"></i>').replace(/%BOMB%/g, '<i class="xwing-font xwing-font-bomb"></i>').replace(/%BOOST%/g, '<i class="xwing-font xwing-font-boost"></i>').replace(/%CANNON%/g, '<i class="xwing-font xwing-font-cannon"></i>').replace(/%CARGO%/g, '<i class="xwing-font xwing-font-cargo"></i>').replace(/%CLOAK%/g, '<i class="xwing-font xwing-font-cloak"></i>').replace(/%COORDINATE%/g, '<i class="xwing-font xwing-font-coordinate"></i>').replace(/%CRIT%/g, '<i class="xwing-font xwing-font-crit"></i>').replace(/%CREW%/g, '<i class="xwing-font xwing-font-crew"></i>').replace(/%ELITE%/g, '<i class="xwing-font xwing-font-elite"></i>').replace(/%EVADE%/g, '<i class="xwing-font xwing-font-evade"></i>').replace(/%FOCUS%/g, '<i class="xwing-font xwing-font-focus"></i>').replace(/%HARDPOINT%/g, '<i class="xwing-font xwing-font-hardpoint"></i>').replace(/%HIT%/g, '<i class="xwing-font xwing-font-hit"></i>').replace(/%ILLICIT%/g, '<i class="xwing-font xwing-font-illicit"></i>').replace(/%JAM%/g, '<i class="xwing-font xwing-font-jam"></i>').replace(/%KTURN%/g, '<i class="xwing-font xwing-font-kturn"></i>').replace(/%MISSILE%/g, '<i class="xwing-font xwing-font-missile"></i>').replace(/%RECOVER%/g, '<i class="xwing-font xwing-font-recover"></i>').replace(/%REINFORCE%/g, '<i class="xwing-font xwing-font-reinforce"></i>').replace(/%SALVAGEDASTROMECH%/g, '<i class="xwing-font xwing-font-salvagedastromech"></i>').replace(/%SLOOPLEFT%/g, '<i class="xwing-font xwing-font-sloopleft"></i>').replace(/%SLOOPRIGHT%/g, '<i class="xwing-font xwing-font-sloopright"></i>').replace(/%STRAIGHT%/g, '<i class="xwing-font xwing-font-straight"></i>').replace(/%STOP%/g, '<i class="xwing-font xwing-font-stop"></i>').replace(/%SYSTEM%/g, '<i class="xwing-font xwing-font-system"></i>').replace(/%TARGETLOCK%/g, '<i class="xwing-font xwing-font-targetlock"></i>').replace(/%TEAM%/g, '<i class="xwing-font xwing-font-team"></i>').replace(/%TORPEDO%/g, '<i class="xwing-font xwing-font-torpedo"></i>').replace(/%TURNLEFT%/g, '<i class="xwing-font xwing-font-turnleft"></i>').replace(/%TURNRIGHT%/g, '<i class="xwing-font xwing-font-turnright"></i>').replace(/%TURRET%/g, '<i class="xwing-font xwing-font-turret"></i>').replace(/%UTURN%/g, '<i class="xwing-font xwing-font-kturn"></i>').replace(/%HUGESHIPONLY%/g, '<span class="card-restriction">Huge Ship only.</span>').replace(/%LARGESHIPONLY%/g, '<span class="card-restriction">Large Ship only.</span>').replace(/%REBELONLY%/g, '<span class="card-restriction">Rebel only.</span>').replace(/%IMPERIALONLY%/g, '<span class="card-restriction">Imperial only.</span>').replace(/%SCUMONLY%/g, '<span class="card-restriction">Scum only.</span>').replace(/%LINEBREAK%/g, '<br /><br />').replace(/%FR_HUGESHIPONLY%/g, '<span class="card-restriction">Vaisseau immense uniquement.</span>').replace(/%FR_LARGESHIPONLY%/g, '<span class="card-restriction">Grand vaisseau uniquement.</span>').replace(/%FR_REBELONLY%/g, '<span class="card-restriction">Rebelle uniquement.</span>').replace(/%FR_IMPERIALONLY%/g, '<span class="card-restriction">Impérial uniquement.</span>').replace(/%FR_SCUMONLY%/g, '<span class="card-restriction">Racailles uniquement.</span>');
    };
  });

