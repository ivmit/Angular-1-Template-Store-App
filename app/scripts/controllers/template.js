'use strict';

/**
 * @ngdoc function
 * @name templateStoreApp.controller:TemplateCtrl
 * @description
 * # TemplateCtrl
 * Controller of the templateStoreApp
 */
angular.module('templateStoreApp')
  .controller('TemplateCtrl',['$routeParams' , '$http', '$filter', '$scope', function ($routeParams, $http, $filter, $scope) {
    var templateId = $routeParams.templateID;
    $http.get("json/templates.json").success(function(data){
      $scope.template = $filter('filter')(data, function(d){
       return d.id == templateId;
      });
      $scope.MainImage = $scope.template[0].images[0].name;

      console.log($scope.template)
    });
  }]);
