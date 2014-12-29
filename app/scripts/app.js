'use strict';

/**
 * @ngdoc overview
 * @name xWingmanApp
 * @description
 * # xWingmanApp
 *
 * Main module of the application.
 */
angular
  .module('xWingmanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select',
    'ui.bootstrap',
    'pascalprecht.translate',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/squad', {
        templateUrl: 'views/cardbrowser.html',
        controller: 'CardbrowserCtrl'
      })
      .when('/browse', {
          templateUrl: 'views/browse.html',
          controller: 'BrowseCtrl'
      })
      .otherwise({
        redirectTo: '/browse'
      });
  })
  .config(function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  })
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'scripts/data/translations.',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }]);
