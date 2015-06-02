'use strict';

angular.module('peApp').controller(
		'reservationBoxCtrl',
		function($scope, $http, $location,$route,fGateway) {
			var gateway = new fGateway();
			gateway.call('getReservation.com').then(function(data) {
				if (data == "error") {
					swal({
						title : "Error!",
						text : "系统错误，请联系管理员",
						type : "warning",
						timer : 3000
					})
				} else {
					$scope.reservationItems = data;
					$scope.allReservationButton = true;
					$scope.todayReservationButton = false;
					$scope.todayExapinationButton = false;
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
			
			$scope.show_physical_examination = function(physical_examination) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
			}
			$scope.detailReservation = function(id) {
				$location.path('detailReservation');
				$location.search('id',id);				
			}
			$scope.todayReservation = function () {
				$scope.allReservationButton = false;
				$scope.todayReservationButton = true;
				$scope.todayExapinationButton = false;
				var date = new Date();
				var today = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
				gateway.call('getReservationByDate.com',{rule:'reservation_date',date:today}).then(function(data) {
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
			$scope.deleteItems = [];
			$scope.selectOneProjectToDelete = function(id) {
				if (_.indexOf($scope.deleteItems,
						id) != -1) {
					$scope.delete_project_action(id);
				} else {
					$scope.deleteItems.push(id);
				}
			}
			$scope.delete_project_action = function(id) {
				var index = _.indexOf($scope.deleteItems, id);
				$scope.deleteItems.splice(index, 1);
			}
			$scope.deleteSelectedItems = function() {
				swal({
					title : "Alert",
					text : "确认删除这些预约信息吗？",
					type : "warning",
					showCancelButton: true,
	                confirmButtonColor: "#5CB85C",
	                confirmButtonText: "yes",
	                closeOnConfirm: true },
	                function(isConfirm){
	                	if(isConfirm){
	                		$scope.deleteItems.forEach(function(value) {
	                			gateway.call('delectReservation.com',{id:value}).then(function(data){
	                				if (data == "error") {
	                					swal({
	                						title : "Error!",
	                						text : "删除失败",
	                						type : "warning",
	                						timer : 3000
	                					});
	                					return;
	                				} 
	                			})
	                		})	                		
	                		$route.reload();
	                	}
				})
			}
		});