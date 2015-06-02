'use strict';
// angular.module('peApp', ['ui.bootstrap']);
angular
		.module('peApp')
		.controller(
				'reservationCtrl',
				function($scope, $http, $location, fGateway, $route) {
					$(function() {
						$('#dateTimePicker').datetimepicker({
							startDate : '-0d',
							minView : "month",
							format : "yyyy/m/d",
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
					$scope.reservationInformation = {};
					var gateway = new fGateway();
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

					$scope.delete_project_action = function(project) {
						var index = _.indexOf($scope.projectArray, project);
						$scope.projectArray.splice(index, 1);
					}

					$scope.searchByOfficeAction = function(office) {
						$scope.office_id = office.id;
						gateway.call('getExaminationProjectByOfficeId.com', {
							office_id : $scope.office_id
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
										$scope.reservationInformation.totalAmount = d[0].combo_price;
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
					$scope.numberOfThisDay = function() {
						console.log('ss')
					}
					$scope.submit = function() {
						var date = new Date();
						var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
						$scope.reservationInformation.reservation_date = today;
						$scope.reservationInformation.date = $(
								'#reservation_date').val();
						$scope.reservationInformation.physical_examination = JSON
								.stringify($scope.projectArray);
						try{
							$scope.reservationInformation.combo = $scope.physicalExamination.combo_name;
						}catch (e) {
							$scope.reservationInformation.combo = '自选';
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
						} else if(!verifyPhoneNumber($scope.reservationInformation.phone_number)){
							swal({
								title : "Alert",
								text : "电话号码格式不正确，请重新输入",
								type : "warning",
								timer : 2000
							})
						}else {
							gateway.call('reservation.com',
									$scope.reservationInformation).then(
									function(d) {
										if (d == 'error') {
											swal("Sorry!", "系统错误", "error");
										}else if (d=='今天预约过了'){
											swal({
												title : "Alert",
												text : "这个改身份证号码在这天已经预约体检，不能重复预约",
												type : "warning",
												timer : 2000
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
									});
						}
					}
					var verify = function(obj) {
						if (obj.name && obj.idCard && obj.phone_number
								&& obj.national && obj.marriage && obj.address
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
				});
