'use strict';

/**
 * @ngdoc function
 * @name posApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the posApp
 */
angular.module('posApp')
  .controller('UserCtrl', function ($scope, $http, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.empList=[];
	$http.get("http://localhost:1337/user/")
		 .success(function(data){
		 	$scope.empList=data;
		 	$log.info($scope.empList);
		 });
  });
