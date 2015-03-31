'use strict';

angular.module('peApp').controller('reservationBoxCtrl',
		function($scope, $http, $location) {
			$http({
				method : 'GET',
				url : 'getReservation.com',
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.reservationItems = data;
					console.log($scope.reservationItems)
				}

				// 加载成功之后做一些事
			}).error(function(data, status, headers, config) {
				swal({
					title : "Error!",
					text : "系统错误，请联系管理员",
					type : "warning",
					timer : 3000
				})
			});
			
		});