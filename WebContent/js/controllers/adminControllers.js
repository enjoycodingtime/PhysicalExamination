'use strict';

angular.module('peApp').controller('adminHearderCtrl',
		function($scope, $http, $location,$window,fGateway,LoginService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			var position = JSON.parse($window.sessionStorage.userInfo).position;
			if(position != '管理员'){
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
		function($scope, $http,fGateway, $location) {
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
		function($scope, $http,fGateway, $location) {
			var gateway = new fGateway();
			gateway.call('getOffice.com').then(function(data){
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
			})
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
			};
			
			$scope.calculateTotalAmount = function() {
				var totalAmount =0;
				for(var i=0;i<$scope.projectArray.length;i++) {
					totalAmount += parseInt($scope.projectArray[i].price);
				}
				return totalAmount;
			};
			
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
				else if($scope.projectArray.length == 0) {
					swal({
						title : "Error!",
						text : " 至少选择一个项目！",
						type : "warning",
						timer : 3000
					})
					return null;
				}
				else if(! $scope.combo_price) {
					swal({
						title : "Error!",
						text : " 请输入套餐价格！",
						type : "warning",
						timer : 3000
					})
					return null;
				}
				else{
				var stringCombo = JSON.stringify($scope.projectArray);
				gateway.call('addCombo.com',{
					combo_name : $scope.combo_name,
					combo_price:$scope.combo_price,
					combo_items : stringCombo
				}).then(function(data){
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
				})
				}
			}
			
			$scope.searchByOfficeAction = function(office){
				$scope.office_id = office.id;
				gateway.call('getExaminationProjectByOfficeId.com',{office_id:$scope.office_id}).then(function(data){
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
				})
			};
			
		});

angular.module('peApp').controller('officeCtrlController',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			gateway.call('getOffice.com').then(function(data) {
				if (data == 'error') {
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
			});			
			$scope.add_office_action = function(){
				gateway.call('addOffice.com',{
					office_name : $scope.office_name,
					office_type:$scope.office_type,
					office_number : $scope.office_number
				}).then(function(data){
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
				})
			}
			
			$scope.modifyOfficeAction = function (office){
				$scope.office_id = office.id;
				$scope.modify_name = office.office_name;
				$scope.modify_number = office.office_number;				
				$scope.modify_type = office.office_type;				
			}
			
			
			$scope.modify_office_action = function (){
				console.log($scope.modify_type);
				$http({
					method : 'POST',
					url : 'modifyOffice.com',
					data : {
						office_id : $scope.office_id,
						office_name : $scope.modify_name,
						office_type:$scope.modify_type,
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
			
			$scope.manage_examination_project = function (office) {
				$location.path('manageExaminationProject');
				$location.search('office_id',office.id);
				$location.search('office_name',office.office_name);
			}
			
		});

angular.module('peApp').controller('manageExaminationProjectCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			$scope.office_id = $location.search()['office_id'];
			$scope.office_name = $location.search()['office_name'];
			gateway.call('getExaminationProjectByOfficeId.com',{office_id:$scope.office_id}).then(function(data){
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.examinationProjects = data;
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
								$scope.examinationProjects = items;
							}
						};
				}
			})
			gateway.call('getphysicalFeature.com').then(function(data){
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.physicalFeatures = data;
				}
			})
			$scope.projectArray = [];
			$scope.showPhysicalFeature = function (examinationProject) {
				var physical_feature_id = JSON.parse(examinationProject.physical_feature_id || '[]');
				$scope.physicalFeatures =[];
				for(var i=0;i<physical_feature_id.length;i++) {
					gateway.call('getphysicalFeatureById.com',{id:physical_feature_id[i]}).then(function(data){
						$scope.physicalFeatures.push(data[0]);
					})
				}
			}
			$scope.selectphysicalFeature = function(physicalFeature) {
						if (_.indexOf($scope.projectArray,
								physicalFeature.id) != -1) {
							$scope
									.delete_project_action(physicalFeature.id);
						} else {
							$scope.projectArray.push(physicalFeature.id);
						}
						$scope.physical_feature_code = $scope.projectArray.join();
			};
			$scope.delete_project_action = function(project) {
				var index = _.indexOf($scope.projectArray, project);
				$scope.projectArray.splice(index, 1);
			}
			
			$scope.addExaminationProject = function(){
				$scope.physical_feature_id = JSON
				.stringify($scope.projectArray);
				gateway.call('addExaminationProject.com',{
					office_id:$location.search()['office_id'],
					physical_feature_id:$scope.physical_feature_id,
					project_name : $scope.project_name,
					price : $scope.price,
					combo_price : $scope.combo_price
				}).then(function(data){
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
				})
			}
			
			$scope.delete_examination_project = function (examination_project){
				swal({
					title : "Alert",
					text : "确认删除<"+examination_project.project_name+">这个科室吗？",
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
		    						id : examination_project.id
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
			
			$scope.modifyExaminationProject = function (examinationProject){
				$scope.project_id = examinationProject.id;
				$scope.project_name = examinationProject.project_name;				
				$scope.price = examinationProject.price;				
				$scope.combo_price = examinationProject.combo_price;				
				$scope.physical_feature_id = examinationProject.physical_feature_id;
				$scope.projectArray = JSON.parse($scope.physical_feature_id || '[]') ;
				$scope.physical_feature_code = $scope.projectArray.join();
			}
			$scope.formatePhysicalFeature = function(physical_feature_id) {
				var result = JSON.parse(physical_feature_id || '[]').join()
				return result;
			}			
			$scope.modify_project_action = function (){
				$scope.physical_feature_id = JSON
				.stringify($scope.projectArray);
				$http({
					method : 'POST',
					url : 'modifyProject.com',
					data : {
						project_id : $scope.project_id,
						project_name : $scope.project_name,
						price:$scope.price,
						combo_price:$scope.combo_price,
						physical_feature_id:$scope.physical_feature_id
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
		function($scope, $http, $location,fGateway,$route) {
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
		function($scope, $http, $location,fGateway,$route) {
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
		function($scope, $http, $location,fGateway,$route) {
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
					$scope.combo_price = data[0].combo_price;
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
			
			$scope.searchByOfficeAction = function(office){
				$scope.office_id = office.id;
				gateway.call('getExaminationProjectByOfficeId.com',{office_id:$scope.office_id}).then(function(data){
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
				})
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
				else if($scope.projectArray.length == 0) {
					swal({
						title : "Error!",
						text : " 至少选择一个项目！",
						type : "warning",
						timer : 3000
					})
					return null;
				}
				else if(!$scope.combo_price) {
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
						combo_price : $scope.combo_price,
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
			gateway.call('getOffice.com').then(function(d) {
				if (d == 'error') {
					swal("Sorry!", "系统错误", "error");
				} else {
					$scope.offices = d;
				}
			});
			$scope.positions = EmployeeService.positions;
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
			
			$scope.sign_in = function(){
				gateway.call('signIn.com', {
					username : $scope.username,
					password : '12345678',
					office_id : $scope.office.id,
					position : $scope.position
				}).then(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "注册失败",
							type : "warning",
							timer : 3000
						})
					} else {
						swal({
							title : "sucess!",
							text : "注册成功,员工号位：" + data,
							type : "success"
						});
					}
				})
			}
			
			$scope.modifyEmployeeAction = function(employee) {
				$scope.id = employee.id;
				$scope.modify_name = employee.name;
				$scope.modify_position= employee.position;
				$scope.modify_office_name= employee.office;
				$scope.modify_office= _.findWhere($scope.offices,{office_name:$scope.modify_office_name});
			};
			
			$scope.modify_employee_action = function () {
				gateway.call('modifyEmployee.com',{
						id : $scope.id,
						name : $scope.modify_name,
						position : $scope.modify_position,
						office_id:$scope.modify_office.id
				}).then(function(data){
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
				})
			}
			
			$scope.delete_employee_action = function (id,name){
				var gateway = new fGateway();
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
	                		gateway.call('deleteEmployee.com',{id:id}).then(function(data){
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
	                		})
	                	}
	                	
	                	
				})
							
			}
		});

angular.module('peApp').controller('physicalFeatureCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			gateway.call('getphysicalFeature.com').then(function(data){
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.physicalFeatures = data;
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
								$scope.physicalFeatures = items;
							}
						};
				}

			})
			$scope.add_physicalFeature_action = function(){
				gateway.call('addphysicalFeature.com', {
					name : $scope.name,
					result : $scope.result,
					operator : $scope.operator,
					compare_man : $scope.compare_man,
					compare_woman : $scope.compare_woman
				}).then(function(data) {
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
							type : "success"
						});
						$route.reload();
					}
				})
			}
			
			$scope.modifyphysicalFeatureAction = function(physicalFeature) {
				$scope.id = physicalFeature.id;
				$scope.modify_name = physicalFeature.name;
				$scope.modify_result = physicalFeature.result;
				$scope.modify_operator = physicalFeature.operator;
				$scope.modify_compare_man = physicalFeature.compare_man;
				$scope.modify_compare_woman = physicalFeature.compare_woman;
			};
			
			$scope.modify_physicalFeature_action = function () {
				gateway.call('modifyphysicalFeature.com',{
						id : $scope.id,
						name : $scope.modify_name,
						result : $scope.modify_result,
						operator : $scope.modify_operator,
						compare_man : $scope.modify_compare_man,
						compare_woman : $scope.modify_compare_woman
				}).then(function(data){
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
				})
			}
			
			$scope.delete_physicalFeature_action = function (id,name){
				swal({
					title : "Alert",
					text : "确认移除<"+name+">这个体征词吗？",
					type : "warning",
					showCancelButton: true,
		            confirmButtonColor: "#5CB85C",
		            confirmButtonText: "yes",
		            closeOnConfirm: true },
		            function(isConfirm){
		            	if(isConfirm){
		            		gateway.call('deletephysicalFeature.com',{id:id}).then(function(data){
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
		            		})
		            	}
				})
			}
		});
angular.module('peApp').controller('conclusionCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			gateway.call('getConclusion.com').then(function(data){
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.conclusions = data;
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
								$scope.conclusions = items;
							}
						};
				}

			})
			$scope.add_conclusion_action = function(){
				gateway.call('addConclusion.com', {
					name : $scope.name,
					conclusion : $scope.conclusion,
					explain_disease : $scope.explain_disease,
					suggestion : $scope.suggestion
				}).then(function(data) {
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
							type : "success"
						});
						$route.reload();
					}
				})
			}
			
			$scope.modifyConclusionAction = function(conclusion) {
				$scope.id = conclusion.id;
				$scope.modify_name = conclusion.name;
				$scope.modify_conclusion = conclusion.conclusion;
				$scope.modify_explain_disease = conclusion.explain_disease;
				$scope.modify_suggestion = conclusion.suggestion;
			};
			
			$scope.modify_conclusion_action = function () {
				gateway.call('modifyConclusion.com',{
						id : $scope.id,
						name : $scope.modify_name,
						conclusion : $scope.modify_conclusion,
						explain_disease : $scope.modify_explain_disease,
						suggestion : $scope.modify_suggestion
				}).then(function(data){
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
				})
			}
			
			$scope.delete_conclusion_action = function (id,name){
				swal({
					title : "Alert",
					text : "确认移除<"+name+">这个结论词吗？",
					type : "warning",
					showCancelButton: true,
		            confirmButtonColor: "#5CB85C",
		            confirmButtonText: "yes",
		            closeOnConfirm: true },
		            function(isConfirm){
		            	if(isConfirm){
		            		gateway.call('deleteConclusion.com',{id:id}).then(function(data){
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
		            		})
		            	}
				})
			}
		});