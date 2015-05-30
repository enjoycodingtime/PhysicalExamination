'use strict';
angular.module('peApp').controller('manageHearderCtrl',
		function($scope, $http, $location,$window,LoginService,EmployeeService) {
			$scope.username = JSON.parse($window.sessionStorage.userInfo).name;
			var position = JSON.parse($window.sessionStorage.userInfo).position;
			var managePositions = EmployeeService.managePositions;
			if(_.indexOf(managePositions, position) == -1){
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
angular.module('peApp').controller('manageHomeCtrl',
		function($scope, $http, $location) {

		});

angular.module('peApp').controller('queryDayReportCtrl',
		function($scope, $http, $location,fGateway) {
			$(function() {
				$('#dateTimePicker').datetimepicker({
					minView : "month",
					format : "yyyy/m/dd",
					todayBtn : true,
					todayHighlight : true,
					autoclose : true
				});
			});
			var gateway = new fGateway();
			$scope.getDayReport = function() {
				var numargs = arguments.length;
				if(numargs ==0){
					$scope.date = $('#reservation_date').val();
				}else{
					$scope.date = arguments[0];
				}
				if($scope.date ) {
					gateway.call('getRegistrateByDate.com',{date:$scope.date}).then(function(data) {
						if (data == "error") {
							swal({
								title : "Error!",
								text : "系统错误，请联系管理员",
								type : "warning",
								timer : 3000
							})
						} else if ($scope.date.length ==0){
							swal({
								title : "Alert!",
								text : "这一天没有体检记录",
								type : "warning",
								timer : 3000
							})
						}else {
							$scope.allRegistrateNumber = data.length;
							$scope.registratedNumber = 0;
							$scope.registrated = [];
							$scope.noRegistrated = [];
							for (var index = 0; index < data.length; index ++) {
								if(data[index].comment) {
									$scope.registratedNumber ++;
									$scope.registrated.push(data[index]);
								}else{
									$scope.noRegistrated.push(data[index]);
								}
								
							}
							$scope.notRegistratedNumber = $scope.allRegistrateNumber - $scope.registratedNumber;
							$scope.paginationConf1 = {
									currentPage : 1,
									totalItems : $scope.registrated.length,
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
										$scope.registrated = items;
									}
								};
							$scope.paginationConf2 = {
									currentPage : 1,
									totalItems : $scope.noRegistrated.length,
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
										$scope.noRegistrated = items;
									}
								};
							}
					});		
				}else{
					swal({
						title : "Alert!",
						text : "请选择日期",
						type : "warning",
						timer : 3000
					})
				}
				
			}
			var date = new Date();
			$scope.date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
			$scope.getDayReport($scope.date);
		});


angular.module('peApp').controller('officeStatisticsCtrl',
		function($scope, $http, $location,fGateway) {
			var gateway = new fGateway();
			$scope.getOffices = function() {
					gateway.call('getOffice.com').then(function(data) {
						if (data == "error") {
							swal({
								title : "Error!",
								text : "系统错误，请联系管理员",
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
			}
			$scope.manage_examination_project = function (office) {
				$location.path('manageExaminationProject1');
				$location.search('office_name',office.office_name);
				$location.search('office_id',office.id);
			}
			$scope.getOffices();
		});


angular.module('peApp').controller('comboStatisticsCtrl',
		function($scope, $http, $location,fGateway) {
			var gateway = new fGateway();
			$scope.getCombos = function() {
				gateway.call('getCombos.com').then(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "系统错误，请联系管理员",
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
				});		
			}
			$scope.manage_combo_examination_project = function (id) {
				$location.path('manageComboExaminationProject1');
				$location.search('id',id);
			}
			$scope.getCombos();
		});


angular.module('peApp').controller(
		'queryReservatioinCtrl',
		function($scope, $http, $location,$route,fGateway,registrationService) {
			$scope.rules = registrationService.searchRules;
			var gateway = new fGateway();
			var baseSearch = function (rule,value,order,order1) {
				var orderBy = order + ' ' +order1;
				localStorage['orderBy'] = order;
				localStorage['order1'] = order1;
				$scope.orderBy1 = order;
				$scope.orderBy2 = order1;
				gateway.call('getReservationByRule.com',{rule:rule,value:value,orderBy:orderBy}).then(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "系统错误，请联系管理员",
							type : "warning",
							timer : 3000
						})
					} else {
						$scope.reservationItems = data;
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
									$scope.reservationItems = items;
								}
							};
						}
				});
			}
			$scope.todayReservations = function (){
				var date = new Date();
				var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
				$scope.allReservationButton = false;
				$scope.todayReservationButton = true;
				$scope.todayExapinationButton = false;
				$scope.searchrule = 'reservation_date';
				$scope.searchValue = today;
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch('reservation_date',today,orderBy,order1);
			}
			$scope.show_physical_examination = function(physical_examination) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
			}
			$scope.detailReservation = function(id) {
				$location.path('showetailReservation');
				$location.search('id',id);				
			}
			$scope.todayReservation = function () {
				$route.reload();
			}
			
			$scope.todayExapination = function () {
				$scope.allReservationButton = false;
				$scope.todayReservationButton = false;
				$scope.todayExapinationButton = true;
				var date = new Date();
				var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
				$scope.searchrule = 'day';
				$scope.searchValue = today;
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.allReservation = function () {
				$scope.allReservationButton = true;
				$scope.todayReservationButton = false;
				$scope.todayExapinationButton = false;
				$scope.searchrule = '';
				$scope.searchValue = '';
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
				
			}
			$scope.detailSearch = function() {
				$scope.showDetailSearch = true;
			}
			$scope.searchAction = function(rule,searchValue) {
				$scope.searchrule = rule.value;
				$scope.searchValue = searchValue;
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.orderByAction = function(rule) {
				if(localStorage['orderBy'] == rule) {
					if(localStorage['order1'] == 'asc'){
						localStorage['order1'] = 'desc';
					}else {
						localStorage['order1'] = 'asc';
					}
				}else {
					localStorage['orderBy'] = rule;
				}
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				$scope.rule = rule;
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.todayReservations();
			

		});

angular.module('peApp').controller(
		'queryRegistrationCtrl',
		function($scope, $http, $location,fGateway,$route,registrationService) {
			var gateway = new fGateway();
			$scope.rules = registrationService.searchRules;
			var baseSearch = function (rule,value,order,order1) {
				var orderBy = order + ' ' +order1;
				localStorage['orderBy'] = order;
				localStorage['order1'] = order1;
				$scope.orderBy1 = order;
				$scope.orderBy2 = order1;
				gateway.call('getRegistrateByRule.com',{rule:rule,value:value,orderBy:orderBy}).then(function(data) {
					if (data == "error") {
						swal({
							title : "Error!",
							text : "系统错误，请联系管理员",
							type : "warning",
							timer : 3000
						})
					} else {
						$scope.registrationLists = data;
						$scope.paginationConf = {
								currentPage : 1,
								totalItems : $scope.registrationLists.length,
								itemsPerPage : 15,
								pagesLength : 15,
								perPageOptions : [ 10, 20, 30, 40, 50 ],
								rememberPerPage : 'perPageItems',
								onChange : function() {
									var items = [];
									for (var int = 0; int < $scope.registrationLists.length; int++) {
										if(int>=(this.currentPage-1)*this.itemsPerPage && int<(this.currentPage)*this.itemsPerPage) {
											items.push($scope.registrationLists[int]);
										}
									}
									$scope.registrationLists = items;
								}
						};
						}
				});
			}
			$scope.allRegistratioin = function (){
				$scope.allReservationButton = true;
				$scope.todayReservationButton = false;
				$scope.searchrule = '';
				$scope.searchValue = '';
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.todayRegistration = function () {
				$scope.allReservationButton = false;
				$scope.todayReservationButton = true;
				var date = new Date();
				var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
				$scope.searchrule = 'day';
				$scope.searchValue = today;
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.todayRegistration();
			$scope.todayReservation = function () {
				$route.reload();
			}
			$scope.show_physical_examination = function(physical_examination,comments) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
				$scope.comments = comments;
			}
			$scope.detailSearch = function() {
				$scope.showDetailSearch = true;
			}
			$scope.searchAction = function(rule,searchValue) {
				$scope.searchrule = rule.value;
				$scope.searchValue = searchValue;
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
			$scope.orderByAction = function(rule) {
				if(localStorage['orderBy'] == rule) {
					if(localStorage['order1'] == 'asc'){
						localStorage['order1'] = 'desc';
					}else {
						localStorage['order1'] = 'asc';
					}
				}else {
					localStorage['orderBy'] = rule;
				}
				var orderBy = localStorage['orderBy'] || 'id';
				var order1 = localStorage['order1'] || 'asc';
				$scope.rule = rule;
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
		});

angular.module('peApp').controller(
		'showDetailReservationCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			var id = $location.search().id;
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
			$scope.nationals = [ "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族",
					"土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族",
					"白族", "哈尼族", "哈萨克族", "黎族", "傣族", "畲族", "傈僳族",
					"仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族",
					"羌族", "土族", "仫佬族", "锡伯族", "柯尔克孜族", "达斡尔族", "景颇族",
					"毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族",
					"怒族", "京族", "基诺族", "德昂族", "保安族", "俄罗斯族", "裕固族",
					"乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族" ];
			$scope.marriages = [ "已婚", "未婚" ];
			gateway.call('getCombos.com').then(function(d) {
				if (d == 'error') {
					swal("Sorry!", "系统错误", "error");
				} else {
					$scope.physicalExaminations = d;
				}
			});
			gateway.call('getOffice.com').then(function(d) {
				if (d == 'error') {
					swal("Sorry!", "系统错误", "error");
				} else {
					$scope.offices = d;
				}
			});
			gateway.call('isReservation.com',{
				id : id
			}).then(function(d){
		        if(d=='error'|| d.length ==0){
		        	swal("Sorry!", "没有预约信息", "error");
		        }
		        else {
		        	$scope.reservationInformation = d[0];
		        	$scope.projectArray = JSON.parse($scope.reservationInformation.physical_examination);
		        	$scope.selectOneProject = function(examinationProjectItem) {
						if (_.indexOf($scope.projectArray,
								examinationProjectItem) != -1) {
							$scope
									.delete_project_action(examinationProjectItem);
						} else {
							$scope.projectArray.push(examinationProjectItem);
						}
					};

					$scope.delete_project_action = function(project) {
						var index = _.indexOf($scope.projectArray, project);
						$scope.projectArray.splice(index, 1);
					}

					$scope.searchByOfficeAction = function(office_name) {
						$scope.office_name = office_name;
						gateway.call('getExaminationProjectByOfficeName.com', {
							office_name : office_name
						}).then(function(d) {
							if (d == 'error') {
								swal("Sorry!", "系统错误", "error");
							} else {
								$scope.examinationProjects = d;
							}
						});

					};

					$scope.findByCombo = function(id) {
						gateway.call('getComboById.com', {
							id : id
						}).then(
								function(d) {
									if (d == 'error') {
										swal("Sorry!", "系统错误", "error");
									} else {
										$scope.projectArray = JSON
												.parse(d[0].combo_items);
									}
								});
					}
					
					$scope.submit = function() {
						var date = new Date();
						date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
						$scope.reservationInformation.reservation_date = date;
						$scope.reservationInformation.date = $(
								'#reservation_date').val();
						$scope.reservationInformation.physical_examination = JSON
								.stringify($scope.projectArray);
						try{
							$scope.reservationInformation.combo = $scope.physicalExamination.combo_name;						
						}catch (e) {
//							$scope.reservationInformation.combo = $scope.reservationInformation.combo;
						}
						$scope.reservationInformation = resolved($scope.reservationInformation);
						if (verify($scope.reservationInformation)) {
							swal({
								title : "Alert",
								text : "填写信息不完整或者格式不正确",
								type : "warning",
								timer : 2000
							})
						} else if (!IdCardValidate($scope.reservationInformation.idCard)) {
							swal({
								title : "Alert",
								text : "身份证信息不完整或者格式不正确",
								type : "warning",
								timer : 2000
							})
						} else {
							gateway.call('updateReservation.com',
									$scope.reservationInformation).then(
									function(d) {
										if (d == 'error') {
											swal("Sorry!", "系统错误", "error");
										} else {
											swal({
												title : "sucess!",
												text : "修改成功",
												type : "success",
												timer : 2000
											});
											$route.reload();
										}
									});
						}
					}
					var verify = function(obj) {
						if (obj.name && obj.idCard && obj.phone_number
								&& obj.nationa && obj.marriage && obj.address
								&& obj.date) {
							return false;
						}
						return true;
					}

					var resolved = function(reservationInformation) {
						var idCard = reservationInformation.idCard;
						if (parseInt(idCard.substr(16, 1)) % 2 == 1) {
							reservationInformation.sex = 'man';
						} else {
							reservationInformation.sex = 'woman';
						}
						reservationInformation.birthday = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14); 
						return reservationInformation;
					}
		        }
		    });
			$scope.modify = true;
			$scope.modify = function () {
				$scope.modify = false;
			}
			$scope.cancel = function () {
				$route.reload()
			}
		});

angular.module('peApp').controller('queryMonthReportCtrl',
		function($scope, $http, $location,fGateway) {
			$(function() {
				$('#dateTimePicker').datetimepicker({
					format : "yyyy/m",
					todayBtn : true,
					startView:3,
					minView:3,
					todayHighlight : true,
					autoclose : true
				});
			});
			var gateway = new fGateway();
			$scope.getDayReport = function() {
				var numargs = arguments.length;
				if(numargs ==0){
					$scope.date = $('#reservation_date').val();
				}else{
					$scope.date = arguments[0];
				}
				if($scope.date ) {
					gateway.call('getRegistrateByMonth.com',{date:$scope.date}).then(function(data) {
						if (data == "error") {
							swal({
								title : "Error!",
								text : "系统错误，请联系管理员",
								type : "warning",
								timer : 3000
							})
						} else {
							$scope.allRegistrateNumber = data.length;
							$scope.registratedNumber = 0;
							$scope.registrated = [];
							$scope.noRegistrated = [];
							for (var index = 0; index < data.length; index ++) {
								if(data[index].comment) {
									$scope.registratedNumber ++;
									$scope.registrated.push(data[index]);
								}else{
									$scope.noRegistrated.push(data[index]);
								}
								
							}
							$scope.notRegistratedNumber = $scope.allRegistrateNumber - $scope.registratedNumber;
							$scope.paginationConf1 = {
									currentPage : 1,
									totalItems : $scope.registrated.length,
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
										$scope.registrated = items;
									}
								};
							$scope.paginationConf2 = {
									currentPage : 1,
									totalItems : $scope.noRegistrated.length,
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
										$scope.noRegistrated = items;
									}
								};
							}
					});		
				}else{
					swal({
						title : "Alert!",
						text : "请选择日期",
						type : "warning",
						timer : 3000
					})
				}
				
			}
			var date = new Date();
			$scope.date = date.getFullYear()+'/'+(date.getMonth()+1);
			$scope.getDayReport($scope.date);
		});
