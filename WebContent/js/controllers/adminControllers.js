'use strict';

angular.module('peApp').controller('adminHearderCtrl',
		function($scope, $http, $location,$window,LoginService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			var position = JSON.parse($window.sessionStorage.userInfo).position;
			if(position != 'admin'){
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
			
			$scope.addCombo = function(){
				if(! $scope.combo_name) {
					swal({
						title : "Error!",
						text : " 请输入套餐名！",
						type : "warning",
						timer : 3000
					})
					return null;
				}
				if($scope.projectArray.length == 0) {
					swal({
						title : "Error!",
						text : " 至少选择一个项目！",
						type : "warning",
						timer : 3000
					})
					return null;
				}else{
				var stringCombo = JSON.stringify($scope.projectArray);
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
			}
			
			$scope.searchByOfficeAction = function(office_name){
				$scope.office_name = office_name;
				$http({
					method : 'POST',
					url : 'getExaminationProjectByOfficeName.com',
					data : {
						office_name : office_name
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
				
			};
			
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
					$scope.paginationConf = {
							currentPage : 1,
							totalItems : data.length,
							itemsPerPage : 15,
							pagesLength : 15,
							perPageOptions : [ 10, 20, 30, 40, 50 ],
							rememberPerPage : 'perPageItems',
							onChange : function() {
								var items = [];
								for (var int = 0; int < data.length; int++) {
									if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
										items.push(data[int]);
									}
								}
								$scope.offices = items;
							}
						};
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
		    						office_id : office_id,
		    						office_name:office_name
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


angular.module('peApp').controller('selectComboCtrl',
		function($scope, $http, $location,$route) {
			$http({
				method : 'GET',
				url : 'getCombos.com'
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.combos = data;
					$scope.paginationConf = {
							currentPage : 1,
							totalItems : data.length,
							itemsPerPage : 15,
							pagesLength : 15,
							perPageOptions : [ 10, 20, 30, 40, 50 ],
							rememberPerPage : 'perPageItems',
							onChange : function() {
								var items = [];
								for (var int = 0; int < data.length; int++) {
									if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
										items.push(data[int]);
									}
								}
								$scope.combos = items;
							}
						};
				}

				// 加载成功之后做一些事
			}).error(function(data, status, headers, config) {
				// 处理错误

				console.log('sorry');
			});
			
			$scope.modifyCombo = function(id){
				$location.path('modifyCombo');
				$location.search('id',id);
			}
			
			$scope.deleteCombo = function(id,name) {
				swal({
					title : "Alert",
					text : "确认删除<"+name+">这个套餐吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		$http({
		    					method : 'POST',
		    					url : 'deleteCombo.com',
		    					data : {
		    						office_id : id
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
			
			$scope.manage_combo_examination_project = function (id) {
				$location.path('manageComboExaminationProject');
				$location.search('id',id);
			}
			
		});

angular.module('peApp').controller('manageComboExaminationProjectCtrl',
		function($scope, $http, $location,$route) {
			$scope.id = $location.search()['id'];
			$http({
				method : 'POST',
				url : 'getComboById.com',
				data : {
					id : $scope.id
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
					$scope.combos = JSON.parse(data[0].combo_items);
					$scope.combo_name = data[0].combo_name;
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
		});


angular.module('peApp').controller('modifyComboCtrl',
		function($scope, $http, $location,$route) {
			$scope.id = $location.search()['id'];
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
			$http({
				method : 'POST',
				url : 'getComboById.com',
				data : {
					id : $scope.id
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
					$scope.combos = JSON.parse(data[0].combo_items);
					$scope.combo_name = data[0].combo_name;
					$scope.projectArray = $scope.combos ||[];
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
			
			$scope.searchByOfficeAction = function(office_name){
				$scope.office_name = office_name;
				$http({
					method : 'POST',
					url : 'getExaminationProjectByOfficeName.com',
					data : {
						office_name : office_name
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
				
			};
			
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
			
			$scope.modifyCombo = function(){
				if(! $scope.combo_name) {
					swal({
						title : "Error!",
						text : " 请输入套餐名！",
						type : "warning",
						timer : 3000
					})
					return null;
				}
				if($scope.projectArray.length == 0) {
					swal({
						title : "Error!",
						text : " 至少选择一个项目！",
						type : "warning",
						timer : 3000
					})
					return null;
				}else{
				var stringCombo = JSON.stringify($scope.projectArray);
				$http({
					method : 'POST',
					url : 'modifyCombo.com',
					data : {
						id:$scope.id,
						combo_name : $scope.combo_name,
						combo_items : stringCombo
					}
				}).success(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "修改失败，请重试！",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "修改套餐成功",
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
			}
			
		});

angular.module('peApp').controller('employeesCtrl',
		function($scope, $http, $location, $route,EmployeeService,fGateway) {
			var gateway = new fGateway();
			$scope.positions = [ {
				name : '总台医师',
				id:'receptionist'
			}, {
				name : '体检医师',
				id:'doctor'
			}, {
				name : '领导',
				id:'manage'
			} ];
			$http({
				method : 'GET',
				url : 'getEmployees.com',
			}).success(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.employees = data;
					$scope.paginationConf = {
							currentPage : 1,
							totalItems : data.length,
							itemsPerPage : 15,
							pagesLength : 15,
							perPageOptions : [ 10, 20, 30, 40, 50 ],
							rememberPerPage : 'perPageItems',
							onChange : function() {
								var items = [];
								for (var int = 0; int < data.length; int++) {
									if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
										items.push(data[int]);
									}
								}
								$scope.employees = items;
							}
						};
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
			$scope.modifyEmployeeAction = function(id,username,position) {
				$scope.id = id;
				$scope.modify_name = username;
				$scope.modify_position= position;
			};
			
			$scope.setPermissionAction = function (employee){
				$scope.permissionList = EmployeeService.permissionList[employee.position];
				$scope.employee = employee;
				
			};
			$scope.setPermission = function(){
				gateway.call('setPermission.com',{
					id:$scope.employee.id,
					permission:$scope.permission}).then(function(data){
						if (data == "error") {
							swal({
								title : "Error!",
								text : "系统错误，请联系管理员",
								type : "warning",
								timer : 3000
							})
						}else{
							swal({
								title : "sucess!",
								text : "授权成功！",
								type : "success",
								timer : 2000
							});
							$route.reload();
						}
					});
			}
			
			$scope.modify_employee_action = function () {
				$http({
					method : 'POST',
					url : 'modifyEmployee.com',
					data : {
						id : $scope.id,
						name : $scope.modify_name,
						position : $scope.modify_position.id
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
			
			$scope.delete_employee_action = function (id,name){
				swal({
					title : "Alert",
					text : "确认移除<"+name+">这个员工的信息吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		$http({
		    					method : 'POST',
		    					url : 'deleteEmployee.com',
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
		});