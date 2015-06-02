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
				$scope.searchrule = 'time';
				$scope.searchValue = today;
				var orderBy = localStorage['groupOrderBy'] || 'id';
				var order1 = localStorage['groupOrder1'] || 'asc';
				baseSearch('time',today,orderBy,order1);
			}
			$scope.todayReservation = function () {
				$route.reload();
			}
			$scope.todayReservations();
			$scope.show_physical_examination = function(physical_examination) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
			}
			$scope.detailReservation = function(id) {
				$location.path('detailGroupReservation');
				$location.search('id',id);				
			}
			
			$scope.todayExapination = function () {
				$scope.allReservationButton = false;
				$scope.todayReservationButton = false;
				$scope.todayExapinationButton = true;
				var date = new Date();
				if((date.getMonth()+1) <10) {
					var today = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+date.getDate();
				}else {
					var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
				}
				$scope.searchrule = 'reservation_date';
				$scope.searchValue = today;
				var orderBy = localStorage['groupOrderBy'] || 'id';
				var order1 = localStorage['groupOrder1'] || 'asc';
				baseSearch('reservation_date',today,orderBy,order1);
			}
			$scope.allReservation = function () {
				$scope.allReservationButton = true;
				$scope.todayReservationButton = false;
				$scope.todayExapinationButton = false;
				$scope.searchrule = '';
				$scope.searchValue = '';
				var orderBy = localStorage['groupOrderBy'] || 'id';
				var order1 = localStorage['groupOrder1'] || 'asc';
				baseSearch($scope.searchrule,$scope.searchValue,orderBy,order1);
			}
		});

angular.module('peApp').controller(
		'importGroupReservationCtrl',
		function($scope, $http, $location,$route,fGateway) {
			var gateway = new fGateway();
			
			$scope.disable = false;
			var OsObject = ""; 
			var isIE = !-[1,];
			$scope.isIE = function() { //ie?  
			    if (!!window.ActiveXObject || "ActiveXObject" in window)  
			        return true;  
			    else  
			        return false;  
			} 
			 if(!$scope.isIE()) { 
				 swal({
						title : "Error!",
						text : "该功能页面需在IE下使用",
						type : "warning",
						timer : 3000
					})
				$scope.disable = true;
			   } 
			$scope.readThis = function(){ 
						var tempStr = "";
						var peopleInfor  = [];
						var filePath = document.all.upfile.value;
						var oXL = new ActiveXObject("Excel.application");
						var oWB = oXL.Workbooks.open(filePath);
						oWB.worksheets(1).select();
						var oSheet = oWB.ActiveSheet;
						if(oSheet.Cells(1, 1).value.toString() != '团体id' || oSheet.Cells(2, 1).value.toString() != '名字'||oSheet.Cells(2, 2).value.toString() != '身份证号码'||oSheet.Cells(2, 3).value.toString() != '电话号码'||oSheet.Cells(2, 4).value.toString() != '民族') {
							swal({
								title : "Error!",
								text : "Excel文件内容格式不合格，请检查！",
								type : "warning",
								timer : 3000
							})
							return 
						}
						var group_id = oSheet.Cells(1, 2).value.toString();
						$scope.group_id = group_id;
						gateway.call('getGroupReservation.com',{rule:'id',value:group_id,orderBy:'id'}).then(function(data){
							if (data == "error") {
								swal({
									title : "Error!",
									text : "系统错误，请联系管理员",
									type : "warning",
									timer : 3000
								})
							} else if(data[0].status ==1) {
								swal({
									title : "Error!",
									text : "该团体名单已经导入",
									type : "warning",
									timer : 3000
								})
								return;
							}else {
								$scope.groupInfo = data[0];
							try {
								for (var i = 3; i < $scope.groupInfo.group_number+3; i++) {
									var obj ={};
									if (oSheet.Cells(i, 2).value == "null"
										|| oSheet.Cells(i, 3).value == "null")
										break;
									var a = oSheet.Cells(i, 2).value.toString() == "undefined" ? ""
											: oSheet.Cells(i, 2).value;
									obj.name = oSheet.Cells(i, 1).value;
									obj.idCard = oSheet.Cells(i, 2).value;
									obj.phone_number = oSheet.Cells(i, 3).value;
									obj.nationa = oSheet.Cells(i, 4).value;
									obj.address = oSheet.Cells(i, 5).value;
									obj.marriage = oSheet.Cells(i, 6).value;
									obj.groupName =  $scope.groupInfo.groupName;
									obj.group_id =  group_id;
									obj.combo =  $scope.groupInfo.combo_id;
									obj.date =  $scope.groupInfo.reservation_date;
									obj.reservation_date =  $scope.groupInfo.reservation_date;
									obj.physical_examination = $scope.groupInfo.physical_examination;
									obj = resolved(obj);
									peopleInfor.push(obj);
								}
							} catch (e) {
								console.log('导入错误',e)
							}
							oXL.Quit();
							CollectGarbage();
							$scope.peopleInfors= peopleInfor;
							}
						})
					} 
			var resolved = function(obj) {
				var idCard = obj.idCard;
				if (parseInt(idCard.substr(16, 1)) % 2 == 1) {
					obj.sex = 'man';
				} else {
					obj.sex = 'woman';
				}
				obj.birthday = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14); 
				return obj;
			}
			$scope.submit = function () {
				$scope.peopleInfors.forEach(function(value) {
					gateway.call('groupRegistrate.com',value).then(function(d){
				        if(d=='error'|| d.length ==0){
				        	swal("Sorry!", "登记失败，请联系管理员", "error");
				        	return
				        }
				    });
					swal("Success!", "登记成功", "success");
					gateway.call('changeStatusOfGroup.com',{id:$scope.group_id}).then(function(data){
						if(d=='error'){
				        	swal("Sorry!", "修改团体预约状态失败", "error");
				        	return
				        }
					})
				})
			}
		})
		
		
		
		angular.module('peApp').controller(
		'detailGroupReservationCtrl',
		function($scope, $http, $location,fGateway,$route) {
			var gateway = new fGateway();
			var id = $location.search().id;
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
			gateway.call('getCombos.com').then(function(d) {
				if (d == 'error') {
					swal("Sorry!", "系统错误", "error");
				} else {
					$scope.physicalExaminations = d;
				}
			});
			gateway.call('isGroupReservation.com',{
				id : id
			}).then(function(d){
		        if(d=='error'|| d.length ==0){
		        	swal("Sorry!", "没有预约信息", "error");
		        }
		        else {
		        	$scope.reservationInformation = d[0];
		        	$scope.combo_name = $scope.reservationInformation.combo_id;
		        	$scope.physicalExamination = _.findWhere($scope.physicalExaminations,{combo_name:$scope.combo_name});
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
						$scope.reservationInformation.reservation_date = $(
								'#reservation_date').val();
						$scope.reservationInformation.physical_examination = JSON
								.stringify($scope.projectArray);
						$scope.reservationInformation = resolved($scope.reservationInformation);
						$scope.reservationInformation.combo_id = $scope.physicalExamination.id;
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
							gateway.call('updateGroupReservation.com',
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
						if (obj.groupName &&  obj.leaderPhoneNumber
								&& obj.group_number && obj.leaderName && obj.address
								&& obj.reservation_date) {
							return false;
						}
						return true;
					}
					$scope.changePriceAction = function() {
						if($scope.reservationInformation.combo_discount && ($scope.reservationInformation.combo_discount>100 ||$scope.reservationInformation.combo_discount ==0)) {
							$scope.reservationInformation.combo_discount =100;
							swal({
								title : "Alert",
								text : "套餐折扣值在1-100之间，请重新输入!",
								type : "warning",
								timer : 2000
							})
						}
						if($scope.reservationInformation.group_number && $scope.reservationInformation.combo_discount && $scope.reservationInformation.totalAmount) {
							$scope.reservationInformation.allCount = $scope.reservationInformation.group_number * $scope.reservationInformation.combo_discount * $scope.reservationInformation.totalAmount/100;
						}
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
			$scope.deleteReservation = function () {
				swal({
					title : "Alert",
					text : "确认删除吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		gateway.call('delectGroupReservation.com',{id:id}).then(function(data){
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
	        						$location.path('reservationBox');
	        					}
	        				})
	                	}
				})
				
			}
			
		});
