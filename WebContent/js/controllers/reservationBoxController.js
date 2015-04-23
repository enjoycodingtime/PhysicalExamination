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
				var today = new Date().toLocaleDateString();
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
				var today = new Date().toLocaleDateString();
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