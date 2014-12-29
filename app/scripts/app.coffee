'use strict'

###*
 # @ngdoc overview
 # @name ngAppBaseApp
 # @description
 # # ngAppBaseApp
 #
 # Main module of the application.
###
angular
  .module('ngAppBaseApp', [
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
  .config ($routeProvider, uiSelectConfig, $translateProvider, localStorageServiceProvider) ->

    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/browse',
        templateUrl: 'views/browse.html'
        controller: 'BrowseCtrl'
      .when '/squadmanager',
        templateUrl: 'views/squadmanager.html'
        controller: 'SquadManagerCtrl'
      .when '/collection',
        templateUrl: 'views/collection.html'
        controller: 'CollectionCtrl'
      .otherwise
        redirectTo: '/'

    uiSelectConfig.theme = 'bootstrap'

    $translateProvider.useStaticFilesLoader
      prefix: "i18n/translations."
      suffix: ".json"

    $translateProvider.preferredLanguage "en"
