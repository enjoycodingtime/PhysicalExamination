'use strict';
angular.module('peApp').controller('doctorHearderCtrl',
		function($scope, $http, $location,$window,LoginService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			var position = JSON.parse($window.sessionStorage.userInfo).position;
			if(_.indexOf(["总检医师","分检医师"], position) == -1){
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
angular.module('peApp').controller('doctorHomeCtrl',
		function($scope, $http, $location,$route,$window) {
			$scope.permission = JSON.parse($window.sessionStorage.userInfo).permission;
		});

angular.module('peApp').controller('doctorSidebarCtrl',
		function($scope, $http, $location,$route,$window) {
	$scope.position = JSON.parse($window.sessionStorage.userInfo).position;
		});

angular.module('peApp').controller('fenjianCtrl',
		function($scope, $http, $location, fGateway,$route,$window) {
			$scope.office_name = JSON.parse($window.sessionStorage.userInfo).office;
			var gateway = new fGateway();
			gateway.call('getOffice.com').then(function(d) {
				if (d == 'error') {
					swal("Sorry!", "系统错误", "error");
				} else {
					$scope.offices = d;
				}
			});
			$scope.id = '';
			$scope.selected_physical_examination = [];
			var date = new Date();
			$scope.date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
			$scope.getPhysicalExaminationsByOffice = function(office) {
				$scope.physicalExaminationOfThisOffice = [];
				gateway.call('getRegistrateByDate.com',{date:$scope.date}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						var physicalExaminations = d;
						physicalExaminations.forEach(function(value) {
							var physical_examination = JSON.parse(value.physical_examination);
							physical_examination.forEach(function(v) {
								if(v.office_name == office && _.indexOf($scope.physicalExaminationOfThisOffice, value) == -1 && !v.result){
									$scope.physicalExaminationOfThisOffice.push(value);
								}
							});
							
							$scope.paginationConf = {
									currentPage : 1,
									totalItems : $scope.physicalExaminationOfThisOffice.length,
									itemsPerPage : 15,
									pagesLength : 15,
									perPageOptions : [ 10, 20, 30, 40, 50 ],
									rememberPerPage : 'perPageItems',
									onChange : function() {
										var items = [];
										for (var int = 0; int < $scope.physicalExaminationOfThisOffice.length; int++) {
											if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
												items.push($scope.physicalExaminationOfThisOffice[int]);
											}
										}
										$scope.physicalExaminationOfThisOffice = items;
									}
								};
						})
					}
				})
			}
			$scope.getPhysicalExaminationsByOffice($scope.office_name);
			$scope.show_physical_examination = function(id) {
				$location.path('fenjianResult');
				$location.search('id',id);
				
			};			
		});

angular.module('peApp').controller('zongjianCtrl',
		function($scope, $http, $location, fGateway,$route) {
			var gateway = new fGateway();
			var date = new Date();
			$scope.date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
			$scope.id = '';
			$scope.getRegistrationLists = function() {
				$scope.registrationLists = [];
				gateway.call('getRegistrateByDate.com',{date:$scope.date}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						var registrationLists = d;
						registrationLists.forEach(function(value) {
							var physical_examination = JSON.parse(value.physical_examination);
							var isAllHaveResult = 1;
							physical_examination.forEach(function(v) {
								if(!v.result){
									console.log('1');
									isAllHaveResult = 0;
								}
							})
							if(isAllHaveResult && !value.comments){
								$scope.registrationLists.push(value);
							}
						})
					}
				})
			}
			
			$scope.getRegistrationLists();
			

			$scope.show_physical_examination = function(item) {
				$location.path('zongjianResult');
				$location.search('id',item.id);
			};
			
			
		});
angular.module('peApp').controller('completedTodayCtrl',
		function($scope, $http, $location, fGateway,$route,$window) {
			$scope.office_name = JSON.parse($window.sessionStorage.userInfo).office;
			var gateway = new fGateway();
			$scope.id = '';
			$scope.selected_physical_examination = [];
			var date = new Date();
			$scope.date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
			$scope.getPhysicalExaminationsByOffice = function(office) {
				$scope.physicalExaminationOfThisOffice = [];
				gateway.call('getRegistrateByDate.com',{date:$scope.date}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						var physicalExaminations = d;
						physicalExaminations.forEach(function(value) {
							var physical_examination = JSON.parse(value.physical_examination);
							physical_examination.forEach(function(v) {
								if(v.office_name == office && _.indexOf($scope.physicalExaminationOfThisOffice, value) == -1 && v.result){
									$scope.physicalExaminationOfThisOffice.push(value);
								}
							});
							
							$scope.paginationConf = {
									currentPage : 1,
									totalItems : $scope.physicalExaminationOfThisOffice.length,
									itemsPerPage : 15,
									pagesLength : 15,
									perPageOptions : [ 10, 20, 30, 40, 50 ],
									rememberPerPage : 'perPageItems',
									onChange : function() {
										var items = [];
										for (var int = 0; int < $scope.physicalExaminationOfThisOffice.length; int++) {
											if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
												items.push($scope.physicalExaminationOfThisOffice[int]);
											}
										}
										$scope.physicalExaminationOfThisOffice = items;
									}
								};
						})
					}
				})
			}
			$scope.getPhysicalExaminationsByOffice($scope.office_name);
			$scope.show_physical_examination = function(id) {
				$location.path('fenjianResult');
				$location.search('id',id);
				$location.search('s','true');
				
			};			
		});

angular.module('peApp').controller('fenjianResultCtrl',
		function($scope, $http, $location, fGateway,$route,$window) {
			$scope.examinationProject = {};
			$scope.office_name = JSON.parse($window.sessionStorage.userInfo).office;
			var gateway = new fGateway();
			$scope.id = $location.search().id;
			$scope.isShowPage = $location.search().s;
			$scope.getPhysicalExaminationsById = function(id) {
				gateway.call('getRegistrateById.com',{id:id}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						$scope.registrationList = d[0];
						$scope.selected_physical_examination = JSON.parse($scope.registrationList.physical_examination);
						
					}
				})
			}
			$scope.getPhysicalExaminationsById($scope.id);
			
			$scope.addComments = function(index,d){
				$scope.selected_physical_examination[index] = d;
				swal("Success!", "添加分检结果成功", "success");
			}
			$scope.submit = function(d){
				var physical_examination_result = JSON.stringify($scope.selected_physical_examination);
				gateway.call('tijiaofenjianjieguo.com',{
					id:$scope.id,
					physical_examination_result:physical_examination_result
				}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						swal("Success!", "保存分检结果成功", "success");
						$location.path('fenjian');
						
					}
				});
			}
			$scope.showPhysicalFeature = function (examinationProject) {
				var physical_feature_id = JSON.parse(examinationProject.physical_feature_id);
				$scope.physicalFeatures =[];
				for(var i=0;i<physical_feature_id.length;i++) {
					gateway.call('getphysicalFeatureById.com',{id:physical_feature_id[i]}).then(function(data){
						$scope.physicalFeatures.push(data[0]);
					})
				}
			}
			$scope.setCurrentEdit = function(fee){
		        $scope.currentEdit = fee;
		    };
			$scope.showConclusions = function() {
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
			}
			$scope.showConclusions();
			$scope.getConclusion = function(conclusion) {
				var conclusion = 
					'结论名：'+conclusion.name+';结论词：'+conclusion.conclusion+';疾病解释:'+conclusion.explain_disease+';总结建议:'+conclusion.suggestion;
				$scope.currentEdit.conclusion = conclusion;
			}
		});


angular.module('peApp').controller('zongjianResultCtrl',
		function($scope, $http, $location, fGateway,$route,$window) {
			$scope.examinationProject = {};
			$scope.office_name = JSON.parse($window.sessionStorage.userInfo).office;
			var gateway = new fGateway();
			$scope.id = $location.search().id;
			$scope.isShowPage = $location.search().s;
			$scope.getPhysicalExaminationsById = function(id) {
				gateway.call('getRegistrateById.com',{id:id}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						$scope.registrationList = d[0];
						$scope.selected_physical_examination = JSON.parse($scope.registrationList.physical_examination);
						
					}
				})
			}
			$scope.getPhysicalExaminationsById($scope.id);
			$scope.submit = function(comments){
				gateway.call('tijiaozongjianjieguo.com',{
					id:$scope.id,
					comments:comments
				}).then(function(d) {
					if (d == 'error') {
						swal("Sorry!", "系统错误", "error");
					} else {
						swal("Success!", "添加总检结果成功", "success");
						$scope.getPhysicalExaminationsByOffice($scope.office.office_name);
					}
				});
			}
			$scope.showPhysicalFeature = function (examinationProject) {
				var physical_feature_id = JSON.parse(examinationProject.physical_feature_id);
				$scope.physicalFeatures =[];
				for(var i=0;i<physical_feature_id.length;i++) {
					gateway.call('getphysicalFeatureById.com',{id:physical_feature_id[i]}).then(function(data){
						$scope.physicalFeatures.push(data[0]);
					})
				}
			}
			$scope.recheck = function(index,fee){
				swal({
					title : "Alert!",
					text : "确定要重新检查该项目吗？",
					type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    closeOnConfirm: true
				},function(isConfirm){
					if(isConfirm) {
						$scope.$apply(function () {
								$scope.selected_physical_examination[index].result = '';
								$scope.selected_physical_examination[index].conclusion = '';
						      });
						var physical_examination_result = JSON.stringify($scope.selected_physical_examination);
						gateway.call('tijiaofenjianjieguo.com',{
							id:$scope.id,
							physical_examination_result:physical_examination_result
						}).then(function(d) {
							if (d == 'error') {
								swal("Sorry!", "系统错误", "error");
							} else {
								swal("Success!", "重检成功", "success");
								$location.path('zongjian');
								
							}
						});
						
					}
				})
		        
		    };
			$scope.showConclusions = function() {
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
			}
			$scope.showConclusions();
		});

