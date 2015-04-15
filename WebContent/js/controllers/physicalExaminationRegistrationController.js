'use strict';

angular.module('peApp').controller('physicalExaminationRegistrationCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			$scope.search = function (id){
				gateway.call('isReservation.com',{
					id : $scope.id
				}).then(function(d){
			        if(d=='error'|| d.length ==0){
			        	swal("Sorry!", "没有预约信息", "error");
			        }
			        else {
			        	$scope.reservationInfo = d[0];
			        }
			    });
			}
			
			$scope.registrate = function () {
				var date = new Date().toLocaleDateString();
				$scope.reservationInfo.date = date;
				console.log($scope.reservationInfo);
				gateway.call('registrate.com',$scope.reservationInfo).then(function(d){
			        if(d=='error'|| d.length ==0){
			        	swal("Sorry!", "等级失败，请联系管理员", "error");
			        }
			        else {
			        	swal("Sorry!", "登记成功", "success");
			        }
			    });
			}
		});