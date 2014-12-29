'use strict'

###*
 # @ngdoc function
 # @name ngAppBaseApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the ngAppBaseApp
###
angular.module('ngAppBaseApp')
  .controller 'MainCtrl', ($scope, $location) ->

    $scope.isActive  = (route) ->
      route == $location.path()

    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
