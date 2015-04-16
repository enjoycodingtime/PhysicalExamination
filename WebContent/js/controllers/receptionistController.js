'use strict';

angular.module('peApp').controller('receptionistCtrl',
		function($scope, $http, $location) {

		});
angular.module('peApp').controller(
		'registrationListCtrl',
		function($scope, $http, $location,fGateway) {
			var gateway = new fGateway();
			gateway.call('getRegistrationList.com').then(function(d){
		        if(d=='error'){
		        	swal("Sorry!", "系统错误", "error");
		        }
		        else {
		        	$scope.registrationLists = d;
		        }
		    });

			$scope.show_physical_examination = function(physical_examination,comments) {
				$scope.selected_physical_examination = JSON
						.parse(physical_examination);
				$scope.comments = comments;
			}
		});