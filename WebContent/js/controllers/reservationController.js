'use strict';

angular.module('peApp').controller('reservationCtrl',
		function($scope, $http, $location,ReservationService,$route) {
			$(function() {
				$('#dateTimePicker').datetimepicker({
					startDate : '-0d',
					minView : "month",
					format : "yyyy/mm/dd",
					todayBtn : true,
					todayHighlight : true,
					autoclose : true
				});
			});
			$scope.reservationInformation ={};
			$scope.physicalExaminations =  [
			    					        {
			    					        	name:'学生套餐'				        	
			    					        },{
			    					        	name:'青年套餐'				        	
			    					        },{
			    					        	name:'老年套餐'				        	
			    					        },{
			    					        	name:'男性套餐'				        	
			    					        },{
			    					        	name:'女性套餐'				        	
			    					        },{
			    					        	name:'入职套餐'				        	
			    					        }
			    					        ];
			$scope.submit = function(reservationInformation){
				reservationInformation.date = '2015/04/01';
				console.log(reservationInformation);$http({
					method : 'POST',
					url : 'reservation.com',
					data :reservationInformation
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "系统错误",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "预约成功",
							type : "success",
							timer : 2000
						});
						$route.reload();
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
			
			

		});
