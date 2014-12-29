'use strict'

###*
 # @ngdoc function
 # @name ngAppBaseApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the ngAppBaseApp
###
angular.module('ngAppBaseApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
