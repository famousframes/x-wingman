'use strict'

###*
 # @ngdoc function
 # @name ngAppBaseApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the ngAppBaseApp
###
angular.module('ngAppBaseApp')
  .controller 'NavCtrl', ($scope, $location) ->

    $scope.isActive  = (route) ->
      route == $location.path()