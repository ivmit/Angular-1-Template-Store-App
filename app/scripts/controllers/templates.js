'use strict';

/**
 * @ngdoc function
 * @name templateStoreApp.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the templateStoreApp
 */
angular.module('templateStoreApp')
  .controller('TemplatesCtrl',['$http','$scope', function ($http,$scope) {
    $http.get('json/templates.json').success(function(data){
      $scope.templates = data;
    });
  }]);
