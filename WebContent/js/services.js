
(function (app) {
	"use strict";
	app.factory('fGateway', function ($http, $q) {
		function fGatewayFunc() {
			this.call = function (method, parameters) {
				var defer = $q.defer();
				$http.post(method,parameters).success(function (data) {
					defer.resolve(data);
				}).error(function (data) {
					defer.reject(data);
				});
				return defer.promise;
			};
		}
		return fGatewayFunc;
	});
	app.factory('LoginService',function($location,fGateway,$window){
		var gateway = new fGateway();
		function LoginService() {			
			this.hasLoggedin = function() {
				if($window.sessionStorage.userInfo){
					var username = JSON.parse($window.sessionStorage.userInfo).name;
					return gateway.call('hasLoggedin.com',{
						username : username
					});
				}else{
					return gateway.call('hasLoggedin.com',{
						username : ''
					});
				}
			};
			this.logout = function(){
				return gateway.call('logout.com');
			}
		}
		return new LoginService();
	});
	app.factory('EmployeeService',function(){
		function EmployeeService (){
			this.permissionList = {
					admin:['管理员'],
					manage:['科级','院级'],
					doctor:['分检医师','总检医师'],
					receptionist:['前台医师']
			}			
		}
		return new EmployeeService();
	})
})(angular.module('peApp'));