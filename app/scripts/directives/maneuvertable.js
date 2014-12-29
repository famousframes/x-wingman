'use strict';

/**
 * @ngdoc directive
 * @name xWingmanApp.directive:maneuverTable
 * @description
 * # maneuverTable
 */
angular.module('xWingmanApp')
  .directive('maneuverTable', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        ship: '='
      },
      template: '<div class="info-maneuvers"></div>',
      link: function ($scope, element, attr) {
        $scope.$watch('ship', function() {
          var getManeuverTableHTML = function(maneuvers, baseManeuvers) {
            var color, haveManeuver, linePath, outTable, outlineColor, speed, transform, trianglePath, turn, v, _i, _j, _k, _len, _ref, _ref1, _ref2;
            if ((maneuvers == null) || maneuvers.length === 0) {
              return "Missing maneuver info.";
            }
            outTable = "<table><tbody>";
            for (speed = _i = _ref = maneuvers.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; speed = _ref <= 0 ? ++_i : --_i) {
              haveManeuver = false;
              _ref1 = maneuvers[speed];
              for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
                v = _ref1[_j];
                if (v > 0) {
                  haveManeuver = true;
                  break;
                }
              }
              if (!haveManeuver) {
                continue;
              }
              outTable += "<tr><td>" + speed + "</td>";
              for (turn = _k = 0, _ref2 = maneuvers[speed].length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; turn = 0 <= _ref2 ? ++_k : --_k) {
                outTable += "<td>";
                if (maneuvers[speed][turn] > 0) {
                  color = (function() {
                    switch (maneuvers[speed][turn]) {
                      case 1:
                        return "white";
                      case 2:
                        return "green";
                      case 3:
                        return "red";
                    }
                  })();
                  outTable += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30px\" height=\"30px\" viewBox=\"0 0 200 200\">";
                  if (speed === 0) {
                    outTable += "<rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" style=\"fill:" + color + "\" />";
                  } else {
                    outlineColor = "black";
                    if (maneuvers[speed][turn] !== baseManeuvers[speed][turn]) {
                      outlineColor = "gold";
                    }
                    transform = "";
                    switch (turn) {
                      case 0:
                        linePath = "M160,180 L160,70 80,70";
                        trianglePath = "M80,100 V40 L30,70 Z";
                        break;
                      case 1:
                        linePath = "M150,180 S150,120 80,60";
                        trianglePath = "M80,100 V40 L30,70 Z";
                        transform = "transform='translate(-5 -15) rotate(45 70 90)' ";
                        break;
                      case 2:
                        linePath = "M100,180 L100,100 100,80";
                        trianglePath = "M70,80 H130 L100,30 Z";
                        break;
                      case 3:
                        linePath = "M50,180 S50,120 120,60";
                        trianglePath = "M120,100 V40 L170,70 Z";
                        transform = "transform='translate(5 -15) rotate(-45 130 90)' ";
                        break;
                      case 4:
                        linePath = "M40,180 L40,70 120,70";
                        trianglePath = "M120,100 V40 L170,70 Z";
                        break;
                      case 5:
                        linePath = "M50,180 L50,100 C50,10 140,10 140,100 L140,120";
                        trianglePath = "M170,120 H110 L140,180 Z";
                        break;
                      case 6:
                        linePath = "M150,180 S150,120 80,60";
                        trianglePath = "M80,100 V40 L30,70 Z";
                        transform = "transform='translate(0 50)'";
                        break;
                      case 7:
                        linePath = "M50,180 S50,120 120,60";
                        trianglePath = "M120,100 V40 L170,70 Z";
                        transform = "transform='translate(0 50)'";
                    }
                    outTable += $.trim("<path d='" + trianglePath + "' fill='" + color + "' stroke-width='5' stroke='" + outlineColor + "' " + transform + "/>\n<path stroke-width='25' fill='none' stroke='" + outlineColor + "' d='" + linePath + "' />\n<path stroke-width='15' fill='none' stroke='" + color + "' d='" + linePath + "' />");
                  }
                  outTable += "</svg>";
                }
                outTable += "</td>";
              }
              outTable += "</tr>";
            }
            outTable += "</tbody></table>";
            return outTable;
          };

          element.html(getManeuverTableHTML($scope.ship.maneuvers,$scope.ship.maneuvers));

        });

      }
    };
  });
