'use strict';
// angular.module('peApp', ['ui.bootstrap']);
angular
		.module('peApp')
		.controller(
				'groupReservationCtrl',
				function($scope, $http, $location, fGateway, $route) {
					$(function() {
						$('#dateTimePicker').datetimepicker({
							startDate : '-0d',
							minView : "month",
							format : "yyyy-mm-dd",
							todayBtn : true,
							todayHighlight : true,
							autoclose : true
						});
					});
					$scope.reservationInformation = {};
					var gateway = new fGateway();
					gateway.call('getCombos.com').then(function(d) {
						if (d == 'error') {
							swal("Sorry!", "系统错误", "error");
						} else {
							$scope.physicalExaminations = d;
						}
					});
					$scope.projectArray = [];
					$scope.selectOneProject = function(examinationProjectItem) {
						if (_.indexOf($scope.projectArray,
								examinationProjectItem) != -1) {
							$scope
									.delete_project_action(examinationProjectItem);
						} else {
							$scope.projectArray.push(examinationProjectItem);
						}
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
										$scope.reservationInformation.totalAmount = d[0].combo_price;
										$scope.changePriceAction();
									}
								});
					}
					$scope.calculateTotalAmount = function() {
						var totalAmount =0;
						for(var i=0;i<$scope.projectArray.length;i++) {
							totalAmount += parseInt($scope.projectArray[i].price);
						}
						$scope.reservationInformation.totalAmount = totalAmount;
						return totalAmount;
					};

					$scope.submit = function() {
						var date = new Date();
						$scope.reservationInformation.reservation_date = $(
								'#reservation_date').val();
						$scope.reservationInformation.physical_examination = JSON
								.stringify($scope.projectArray);
						$scope.reservationInformation.combo_id = $scope.physicalExamination.id;
						if (verify($scope.reservationInformation)) {
							swal({
								title : "Alert",
								text : "填写信息不完整或者格式不正确",
								type : "warning",
								timer : 2000
							})
						}  else if(!verifyPhoneNumber($scope.reservationInformation.leaderPhoneNumber)){
							swal({
								title : "Alert",
								text : "电话号码格式不正确，请重新输入",
								type : "warning",
								timer : 2000
							})
						}else {
							gateway.call('groupRreservation.com',
									$scope.reservationInformation).then(
									function(d) {
										if (d == 'error') {
											swal("Sorry!", "系统错误", "error");
										} else {
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
					}
					var verify = function(obj) {
						if (obj.groupName &&  obj.leaderPhoneNumber
								&& obj.group_number && obj.leaderName && obj.address
								&& obj.reservation_date) {
							return false;
						}
						return true;
					}

					var verifyPhoneNumber = function(value) {
						var isPhone = /^([0-9]{3,4})?[0-9]{7,8}$/;
						var isMob=/^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
						if(isMob.test(value)||isPhone.test(value)){
							return true;
						}
						else{
							return false;
						}
					}
					$scope.changePriceAction = function() {
						if($scope.reservationInformation.comboDiscount && ($scope.reservationInformation.comboDiscount>100 ||$scope.reservationInformation.comboDiscount ==0)) {
							$scope.reservationInformation.comboDiscount =100;
							swal({
								title : "Alert",
								text : "套餐折扣值在1-100之间，请重新输入!",
								type : "warning",
								timer : 2000
							})
						}
						if($scope.reservationInformation.group_number && $scope.reservationInformation.comboDiscount && $scope.reservationInformation.totalAmount) {
							$scope.reservationInformation.allCount = $scope.reservationInformation.group_number * $scope.reservationInformation.comboDiscount * $scope.reservationInformation.totalAmount/100;
						}
					}
				});



'use strict';

angular.module('peApp').controller(
		'groupReservationBoxCtrl',
		function($scope, $http, $location,$route,fGateway) {
			var gateway = new fGateway();
			var baseSearch = function (rule,value,order,order1) {
				var orderBy = order + ' ' +order1;
				localStorage['groupOrderBy'] = order;
				localStorage['groupOrder1'] = order1;
				$scope.orderBy1 = order;
				$scope.orderBy2 = order1;
				gateway.call('getGroupReservation.com',{rule:rule,value:value,orderBy:orderBy}).then(function(data) {
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
				if((date.getMonth()+1) <10) {
					var today = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+date.getDate();
				}else {
					var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
				}
				$scope.allReservationButton = false;
				$scope.todayReservationButton = true;
				$scope.todayExapinationButton = false;
				$scope.searchrule = 'reservation_date';
				$scope.searchValue = today;
				var orderBy = localStorage['groupOrderBy'] || 'id';
				var order1 = localStorage['groupOrder1'] || 'asc';
				baseSearch('time',today,orderBy,order1);
			}
			$scope.todayReservations();
			$scope.show_physical_examination = function(physical_examination) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
			}
			$scope.detailReservation = function(id) {
				$location.path('detailReservation');
				$location.search('id',id);				
			}
			
			$scope.todayExapination = function () {
				$scope.allReservationButton = false;
				$scope.todayReservationButton = false;
				$scope.todayExapinationButton = true;
				var date = new Date();
				var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
				gateway.call('getReservationByDate.com',{rule:'date',date:today}).then(function(data) {
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
			$scope.allReservation = function () {
				$route.reload();
			}
		});