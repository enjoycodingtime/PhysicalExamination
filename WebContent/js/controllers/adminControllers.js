'use strict';

angular.module('peApp').controller('adminHomeCtrl',
		function($scope, $http, $location) {

		});
angular.module('peApp').controller('comboSideBarCtrl',
		function($scope, $http, $location) {
			$scope.isClickCombo = false;
			$scope.showSecondMenu = function() {
				$scope.isClickCombo = !$scope.isClickCombo;
			}
			$scope.isClickPeople = false;
			$scope.showPeopleMenu = function() {
				$scope.isClickPeople = !$scope.isClickPeople;
			}
		});
angular.module('peApp').controller('addComboCtrl',
		function($scope, $http, $location) {
			$http({
				method : 'GET',
				url : 'getExaminationProject.com',
				data : $scope.reservationInformation
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.examinationProjectItems = data;
				}

				// 加载成功之后做一些事
			}).error(function(data, status, headers, config) {
				// 处理错误

				console.log('sorry');
			});
			var projectArray =[];
			$scope.selectOneProject = function(examinationProjectItem){
				projectArray.push(examinationProjectItem);
				
			};
			
			$scope.addCombo = function(selectExaminationProjectItems){
				var stringCombo = JSON.stringify(projectArray);
				$http({
					method : 'POST',
					url : 'addCombo.com',
					data : {
						combo_name : $scope.combo_name,
						combo_items : stringCombo
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "保存失败，请重试！",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "添加套餐成功",
							type : "success",
							timer : 2000
						});
						$location.path('addCombo');
					}

					// 加载成功之后做一些事
				}).error(function(data, status, headers, config) {
					// 处理错误

					console.log('sorry');
				});
			}
			
		});

angular.module('peApp').controller('officeCtrlController',
		function($scope, $http, $location,$route) {
			$http({
				method : 'GET',
				url : 'getOffice.com'
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.offices = data;
				}

				// 加载成功之后做一些事
			}).error(function(data, status, headers, config) {
				// 处理错误

				console.log('sorry');
			});
			
			$scope.add_office_action = function(){
				$http({
					method : 'POST',
					url : 'addOffice.com',
					data : {
						office_name : $scope.office_name,
						office_number : $scope.office_number
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "添加失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "添加成功",
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
			
			$scope.modifyOfficeAction = function (id,office_name,office_number){
				$scope.office_id = id;
				$scope.modify_name = office_name;
				$scope.modify_number = office_number;				
			}
			$scope.modify_office_action = function (){
				$http({
					method : 'POST',
					url : 'amodifyOffice.com',
					data : {
						office_id : $scope.office_id,
						office_name : $scope.modify_name,
						office_number : $scope.modify_number
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "修改失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "修改成功",
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
			
			
			$scope.delete_office_action = function (office_id,office_name){
				swal({
					title : "Alert",
					text : "确认删除<"+office_name+">这个科室吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		$http({
		    					method : 'POST',
		    					url : 'deleteOffice.com',
		    					data : {
		    						office_id : office_id
		    					}
		    				}).success(function(data) {
		    					if (data == "error") {
		    						swal({
		    							title : "Error!",
		    							text : "删除失败",
		    							type : "warning",
		    							timer : 3000
		    						})
		    					} else {
		    						swal({
		    							title : "sucess!",
		    							text : "删除成功",
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
	                	
	                	
				})
							
			}
			
			$scope.manage_examination_project = function (office_name) {
				$location.path('manageExaminationProject');
				$location.search('office_name',office_name);
			}
			
		});

angular.module('peApp').controller('manageExaminationProjectCtrl',
		function($scope, $http, $location,$route) {
			$scope.office_name = $location.search()['office_name'];
			$http({
				method : 'POST',
				url : 'getExaminationProjectByOfficeName.com',
				data : {
					office_name : $scope.office_name
				}
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.examinationProjects = data;
				}

				// 加载成功之后做一些事
			}).error(function(data, status, headers, config) {
				swal({
					title : "Error!",
					text : "系统错误2，请联系管理员",
					type : "warning",
					timer : 3000
				})
			});
			
			$scope.addExaminationProject = function(){
				$http({
					method : 'POST',
					url : 'addExaminationProject.com',
					data : {
						office_name:$location.search()['office_name'],
						project_name : $scope.project_name,
						reference_standard : $scope.reference_standard
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "添加失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "添加成功",
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
			
			$scope.delete_examination_project = function (id,name){
				swal({
					title : "Alert",
					text : "确认删除<"+name+">这个科室吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		$http({
		    					method : 'POST',
		    					url : 'deleteExaminationProject.com',
		    					data : {
		    						id : id
		    					}
		    				}).success(function(data) {
		    					if (data == "error") {
		    						swal({
		    							title : "Error!",
		    							text : "删除失败",
		    							type : "warning",
		    							timer : 3000
		    						})
		    					} else {
		    						swal({
		    							title : "sucess!",
		    							text : "删除成功",
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
	                	
	                	
				})
							
			}
			
			$scope.modifyExaminationProject = function (id,project_name,reference_standard){
				$scope.project_id = id;
				$scope.modify_project_name = project_name;				
				$scope.modify_reference_standard = reference_standard;				
			}
			$scope.modify_project_action = function (){
				$http({
					method : 'POST',
					url : 'modifyProject.com',
					data : {
						project_id : $scope.project_id,
						project_name : $scope.modify_project_name,
						reference_standard : $scope.modify_reference_standard
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "修改失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "修改成功",
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