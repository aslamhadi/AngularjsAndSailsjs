'use strict';

/**
 * @ngdoc function
 * @name posApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the posApp
 */
angular.module('posApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
