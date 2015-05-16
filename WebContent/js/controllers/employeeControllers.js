'use strict';

angular.module('peApp').controller('changePasswordCtrl',
		function($scope, $http, $location,$window,fGateway,LoginService) {
			var gateway = new fGateway();
			$scope.changePassword = function() {
				if($scope.password1 != $scope.password2 || !$scope.password1 ||!$scope.password2) {
					swal({
						title : "Alert!",
						text : "两次输入密码不一致，请重新输入！",
						type : "warning",
						timer:2000
					})
				}else{
					var id = $location.search().id;
					gateway.call('changePassword.com',{id:id,password:$scope.password1}).then(function(data){
						if (data == 'error') {
							swal("Sorry!", "系统错误","error");
						} else {
							swal("Success!", "修改成功","success");
							$location.path('/');
						}
					})
				}
			}
		});