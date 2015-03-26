'use strict';

/* Controllers */

var PEControllers = angular.module('PEControllers', []);

PEControllers.controller('indexCtrl', ['$scope',
  function($scope) {
	$scope.test = 'hello world';
  }]);
PEControllers.controller('logInCtrl',function($scope,$http) {
                                        	$scope.test = 'hello world';
                                        	$scope.log_in = function () {
                                        		$http({method:'POST',url:'home.com', data: {username:$scope.username,password:$scope.password,position:$scope.position}
                                        		}).success(function(data, status, headers, config) {
                                        			
                                        		    //加载成功之后做一些事
                                        		}).error(function(data, status, headers, config) {
                                        		    //处理错误
                                        			
                                        			console.log('sorry');
                                        		});
                                        	}
                                          });