'use strict'

###*
 # @ngdoc function
 # @name ngAppBaseApp.controller:CollectionCtrl
 # @description
 # # CollectionCtrl
 # Controller of the ngAppBaseApp
###
angular.module('ngAppBaseApp')
  .controller 'CollectionCtrl', ($scope, CardData, $modal) ->
    $scope.expansions = CardData.expansions
    $scope.filterView = showSeason:
                          0: true
                          1: true
                          2: true
                          3: true
                          4: true

    $scope.sortBy = 'name'
    $scope.reverseOrder = false
    $scope.savedCollection = localStorage.getItem("MySWXCollection");
    $scope.myCollection = if localStorage.getItem('MySWXCollection') isnt null then JSON.parse $scope.savedCollection else []

    $scope.changeOrder = (order) ->
      if $scope.sortBy is order
        $scope.reverseOrder = !$scope.reverseOrder
      else
        $scope.sortBy = order

    $scope.clearAll = ->
      localStorage.clear()
      $scope.myCollection = []

    $scope.add = (expansion) ->
      $scope.myCollection.push expansion
      localStorage.setItem('MySWXCollection', JSON.stringify $scope.myCollection);

    $scope.open = (expansion, size) ->
      modalInstance = $modal.open(
        templateUrl: "imageModal.html"
        controller: "ImageModalCtrl"
        size: size
        resolve:
          item: ->
            expansion
      )



angular.module("ngAppBaseApp").controller "ImageModalCtrl", ($scope, $modalInstance, item) ->
  $scope.expansion = item
  $scope.cancel = ->
    $modalInstance.dismiss "cancel"



