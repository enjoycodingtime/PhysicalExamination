'use strict';

angular.module('peApp').controller('logInCtrl',
		function($scope, $http, $location) {
			$scope.log_in = function() {
				$http({
					method : 'POST',
					url : 'home.com',
					data : {
						username : $scope.username,
						password : $scope.password
						 }
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "用户名、密码或职位信息错误",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "登陆成功",
							type : "success",
							timer : 2000
						});
						$location.path(data);
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
			
			$scope.sign_in = function(){
				$http({
					method : 'POST',
					url : 'signIn.com',
					data : {
						username : $scope.username,
						password : $scope.password,
						position : $scope.position
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "注册失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "注册成功",
							type : "success",
							timer : 2000
						});
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
		});