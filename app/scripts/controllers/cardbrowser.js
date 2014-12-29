'use strict';

/**
 * @ngdoc function
 * @name xWingmanApp.controller:CardbrowserCtrl
 * @description
 * # CardbrowserCtrl
 * Controller of the xWingmanApp
 */
angular.module('xWingmanApp')
  .controller('CardbrowserCtrl', function ($scope, CardData) {

    var _data;

    $scope.faction = 'Rebel Alliance';

    $scope.s = {
        selected: ''
    };
    $scope.ships = {
        selected: []
    };
    $scope.pilots = {
      selected: []
    };

    $scope.addToCollection = function(ship) {
      $scope.ships.selected.push(ship);
    };

    _data = CardData;

    $scope.basicCardData = _data.basicCardData;

  })
  .filter('listfilter',[ function () {
    return function(items, searchText) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( item.factions.indexOf(searchText) >= 0 ) filtered.push(item);
      });
      return filtered;
    };
  }]);