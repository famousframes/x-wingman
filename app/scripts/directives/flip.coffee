'use strict'

###*
 # @ngdoc directive
 # @name ngAppBaseApp.directive:flip
 # @description
 # # flip
###
angular.module('ngAppBaseApp')
  .directive "flip", ->

    setDim = (element, width, height) ->
      element.style.width = width
      element.style.height = height

    restrict: "E"
    controller: ($scope, $element, $attrs) ->
      showFront = ->
        self.front.removeClass "flipHideFront"
        self.back.addClass "flipHideBack"
        return
      showBack = ->
        self.back.removeClass "flipHideBack"
        self.front.addClass "flipHideFront"
        return
      self = this
      self.front = null
      self.back = null

      self.init = ->
        self.front.addClass "flipBasic"
        self.back.addClass "flipBasic"
        showFront()
        self.front.on "click", showBack
        self.back.on "click", showFront
        return

      return

    link: (scope, element, attrs, ctrl) ->
      width = attrs.flipWidth or "100%"
      height = attrs.flipHeight or "270px"
      element.addClass "flip"
      if ctrl.front and ctrl.back
        [
          element
          ctrl.front
          ctrl.back
        ].forEach (el) ->
          setDim el[0], width, height
          return

        ctrl.init()
      else
        console.error "FLIP: 2 panels required."
      return

  .directive 'flipPanel', ->
    restrict: 'E'
    require: '^flip'

    #transclusion : true,
    link: (scope, element, attrs, flipCtr) ->
      unless flipCtr.front
        flipCtr.front = element
      else unless flipCtr.back
        flipCtr.back = element
      else
        console.error 'FLIP: Too many panels.'
      return