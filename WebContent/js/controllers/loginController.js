'use strict';

angular.module('peApp').controller('logInCtrl',
		function($scope, $http, $location,$window,LoginService) {
			var onload = function () {
	            var container1 = document.getElementById("vCode1");
	            var code1 = new vCode(container1);
	            $scope.code1 = code1;
	        };
	        onload();
			$scope.log_in = function() {
	            if(!$scope.code1.verify($scope.yanzhangma)){
	            	swal({
						title : "Error!",
						text : "验证码错误，请重新输入",
						type : "warning",
						timer : 3000
					})
					return null;
	            }
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
						if($scope.password =='12345678'){
							swal({
								title : "Alert!",
								text : "密码过于简单，请修改密码",
								type : "warning",
								timer:2000
							})
							$location.path('changePassword');
							$location.search('id',$scope.id);
						}else{
							var userInfo = {
									id:data[0].id,
									name:data[0].name,
									position:data[0].position,
									office:data[0].office
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
							$location.path(LoginService.pathOfPosition(userInfo.position));
						}
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
		});