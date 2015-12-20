'use strict';

/**
 * @ngdoc overview
 * @name templateStoreApp
 * @description
 * # templateStoreApp
 *
 * Main module of the application.
 */
angular
  .module('templateStoreApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl',
        controllerAs: 'templates'
      })
      .when('/templates/:templateID', {
        templateUrl: 'views/template.html',
        controller: 'TemplateCtrl',
        controllerAs: 'template'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
