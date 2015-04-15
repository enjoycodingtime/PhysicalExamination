'use strict';
//angular.module('peApp', ['ui.bootstrap']);
angular.module('peApp').controller('reservationCtrl',
		function($scope, $http, $location, fGateway, $route) {
			$(function() {
				$('#dateTimePicker').datetimepicker({
					startDate : '-0d',
					minView : "month",
					format : "yyyy/m/dd",
					todayBtn : true,
					todayHighlight : true,
					autoclose : true
				});
			});
			$scope.reservationInformation = {};
			var gateway = new fGateway();
			gateway.call('getCombos.com').then(function(d){
		        if(d=='error'){
		        	swal("Sorry!", "系统错误", "error");
		        }
		        else {
		        	$scope.physicalExaminations = d;
		        }
		    });
			gateway.call('getOffice.com').then(function(d){
		        if(d=='error'){
		        	swal("Sorry!", "系统错误", "error");
		        }
		        else {
		        	$scope.offices = d;
		        }
		    });
			
			$scope.projectArray =[];
			$scope.selectOneProject = function(examinationProjectItem){
				if(_.indexOf($scope.projectArray, examinationProjectItem) != -1) {
					$scope.delete_project_action(examinationProjectItem);
				}else{
					$scope.projectArray.push(examinationProjectItem);
				}
			};
			
			$scope.delete_project_action = function (project) {
				var index = _.indexOf($scope.projectArray, project);
				$scope.projectArray.splice(index, 1);
			}
			
			$scope.searchByOfficeAction = function(office_name){
				$scope.office_name = office_name;
				gateway.call('getExaminationProjectByOfficeName.com',{
					office_name : office_name
				}).then(function(d){
			        if(d=='error'){
			        	swal("Sorry!", "系统错误", "error");
			        }
			        else {
			        	$scope.examinationProjects = d;
			        }
			    });
				
			};
			
			$scope.findByCombo = function(id) {
				gateway.call('getComboById.com',{
					id : id
				}).then(function(d){
			        if(d=='error'){
			        	swal("Sorry!", "系统错误", "error");
			        }
			        else {
			        	$scope.projectArray = JSON.parse(d[0].combo_items);
			        }
			    });
			}
			
			$scope.submit = function() {
				$scope.reservationInformation.date = $('#reservation_date').val();
				$scope.reservationInformation.physical_examination = JSON.stringify($scope.projectArray);
				console.log($scope.reservationInformation);
				gateway.call('reservation.com',$scope.reservationInformation).then(function(d){
			        if(d=='error'){
			        	swal("Sorry!", "系统错误", "error");
			        }
			        else {
			        	swal({
							title : "sucess!",
							text : "预约成功",
							type : "success",
							timer : 2000
						});
						$route.reload();
			        }
			    });			

			}

		});
