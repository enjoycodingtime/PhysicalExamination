angular.module('peApp').controller('hearderCtrl',
		function($scope, $http, $location,$window,LoginService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			$scope.logout = function () {
				LoginService.logout();
				$location.path('/');
			}
		});

angular.module('peApp').controller('receptionistsHeaderCtrl',
		function($scope, $http, $location,$window,LoginService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			var position = JSON.parse($window.sessionStorage.userInfo).position;
			if(position != 'receptionist'){
				swal({
					title : "Error!",
					text : "没权限打开该页面！",
					type : "warning",
					timer : 3000
				})
				$location.path('/');
			}
			$scope.logout = function () {
				LoginService.logout();
				$location.path('/');
			}
		});