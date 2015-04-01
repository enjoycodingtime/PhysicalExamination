'use strict';

angular.module('peApp').controller('physicalExaminationRegistrationCtrl',
		function($scope, $http, $location) {
			$scope.search = function (id){
				$http({
					method : 'GET',
					url : 'isReservation.com',
					params : {
						id : $scope.id
					}
				}).success(function(data) {					
					if (data == "error" || data.length ==0) {
						swal({
							title : "Error!",
							text : "没有预约信息",
							type : "warning",
							timer : 3000
						})
					} else {
						$scope.reservationInfo = data[0];
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
		});