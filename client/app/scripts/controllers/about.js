'use strict';

/**
 * @ngdoc function
 * @name posAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the posAppApp
 */
angular.module('posApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
