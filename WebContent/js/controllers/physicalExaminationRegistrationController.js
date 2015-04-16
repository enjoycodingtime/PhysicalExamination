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
				if($scope.reservationInfo.status ==1) {
					swal("Sorry!", "该预约已经登记", "error");
					return 0;
				}else if($scope.reservationInfo.date != date){
					swal("Sorry!", "预约日期是："+$scope.reservationInfo.date+",不是今天!", "error");
					return 0;
				}else{
					$scope.reservationInfo.date = date;
					gateway.call('registrate.com',$scope.reservationInfo).then(function(d){
				        if(d=='error'|| d.length ==0){
				        	swal("Sorry!", "等级失败，请联系管理员", "error");
				        }
				        else {
				        	swal("Success!", "登记成功", "success");
				        }
				    });
				}
				
			}
		});