'use strict';

angular.module('peApp').controller('logInCtrl',
		function($scope, $http, $location,$window,EmployeeService) {
			$scope.log_in = function() {
				$http({
					method : 'POST',
					url : 'home.com',
					data : {
						id : $scope.id,
						password : $scope.password
						 }
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "员工号、密码或职位信息错误",
							type : "warning",
							timer : 3000
						})
					} else {
						if(data[0].permission) {
							
							var userInfo = {
									id:data[0].id,
									name:data[0].name,
									position:data[0].position,
									permission:data[0].permission
							}							
							$window.sessionStorage.userInfo = JSON.stringify(userInfo);
							var id = JSON.parse($window.sessionStorage.userInfo).id;							
							var username = JSON.parse($window.sessionStorage.userInfo).name;							
							swal({
								title : "sucess!",
								text : username+" 登陆成功",
								type : "success",
								timer : 2000
							});
							$location.path(data[0].position);
						}else{
							swal({
								title : "Alert!",
								text : "该账号还未通过管理审核！",
								type : "warning",
								timer : 2000
							});
						}
						
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
							text : "注册成功,员工号位："+data,
							type : "success"
						});
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
		});