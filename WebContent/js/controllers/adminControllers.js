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