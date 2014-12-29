"use strict"

###*
@ngdoc directive
@name xWingmanApp.directive:maneuverTable
@description
# maneuverTable
###
angular.module('ngAppBaseApp').directive 'maneuverTable', ->
  restrict: 'E'
  replace: true
  scope:
    ship: '='
  template: '<div class="info-maneuvers"></div>'

  link: ($scope, element, attr) ->
    $scope.$watch 'ship', ->

      getManeuverTableHTML = (maneuvers, baseManeuvers) ->

        if not maneuvers? or maneuvers.length == 0
          return 'Missing maneuver info.'

        maneuverTable = '<table><tbody>'

        for speed in [maneuvers.length - 1 .. 0]

          haveManeuver = false
          for v in maneuvers[speed]
            if v > 0
              haveManeuver = true
              break

          continue if not haveManeuver

          maneuverTable += "<tr><td>#{speed}</td>"
          for turn in [0 ... maneuvers[speed].length]

            maneuverTable += '<td>'
            if maneuvers[speed][turn] > 0

              color = switch maneuvers[speed][turn]
                when 1 then 'white'
                when 2 then 'green'
                when 3 then 'red'

              maneuverTable += '''<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 200 200">'''

              if speed == 0
                maneuverTable += '''<rect x="50" y="50" width="100" height="100" style="fill:#{color}" />'''
              else

                outlineColor = 'black'
                if maneuvers[speed][turn] != baseManeuvers[speed][turn]
                  outlineColor = 'gold' # highlight maneuvers modified by another card (e.g. R2 Astromech makes all 1 & 2 speed maneuvers green)

                transform = ''
                switch turn
                  when 0
                  # turn left
                    linePath = 'M160,180 L160,70 80,70'
                    trianglePath = 'M80,100 V40 L30,70 Z'

                  when 1
                  # bank left
                    linePath = 'M150,180 S150,120 80,60'
                    trianglePath = 'M80,100 V40 L30,70 Z'
                    transform = 'transform="translate(-5 -15) rotate(45 70 90)" '

                  when 2
                  # straight
                    linePath = 'M100,180 L100,100 100,80'
                    trianglePath = 'M70,80 H130 L100,30 Z'

                  when 3
                  # bank right
                    linePath = 'M50,180 S50,120 120,60'
                    trianglePath = 'M120,100 V40 L170,70 Z'
                    transform = 'transform="translate(5 -15) rotate(-45 130 90)" '

                  when 4
                  # turn right
                    linePath = 'M40,180 L40,70 120,70'
                    trianglePath = 'M120,100 V40 L170,70 Z'

                  when 5
                  # k-turn/u-turn
                    linePath = 'M50,180 L50,100 C50,10 140,10 140,100 L140,120'
                    trianglePath = 'M170,120 H110 L140,180 Z'
                  when 6
                  # segnor's loop left
                    linePath = 'M150,180 S150,120 80,60'
                    trianglePath = 'M80,100 V40 L30,70 Z'
                    transform = 'transform="translate(0 50)"'
                  when 7
                  # segnor's loop right
                    linePath = 'M50,180 S50,120 120,60'
                    trianglePath = 'M120,100 V40 L170,70 Z'
                    transform = 'transform="translate(0 50)"'

                maneuverTable += $.trim """
                          <path d='#{trianglePath}' fill='#{color}' stroke-width='5' stroke='#{outlineColor}' #{transform}/>
                          <path stroke-width='25' fill='none' stroke='#{outlineColor}' d='#{linePath}' />
                          <path stroke-width='15' fill='none' stroke='#{color}' d='#{linePath}' />
                        """

              maneuverTable += '</svg>'
            maneuverTable += '</td>'
          maneuverTable += '</tr>'
        maneuverTable += '</tbody></table>'
        maneuverTable
      element.html getManeuverTableHTML $scope.ship.maneuvers, $scope.ship.maneuvers;