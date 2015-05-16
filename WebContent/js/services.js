
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
					var id = JSON.parse($window.sessionStorage.userInfo).id;
					return gateway.call('hasLoggedin.com',{
						id : id
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
			this.pathOfPosition = function(position) {
				var path = '';
				switch (position) {
				case '管理员':
					path = 'admin';
					break;	
				case '总台主管':
				case '科室主管':
				case '院长':
				case '副院长':
					path = 'manage';
					break;
				case '总台医师':
					path = 'receptionist';
					break;
				case '总检医师':
					path = 'zongjian';
					break;
				case '分检医师':
					path = 'fenjian';
					break;
				default:
					break;
				}
				return path;
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
			this.positionCode = {
					admin:'gl',
					manage:'ld',
					doctor:'ys',
					receptionist:'zt'
			}
			this.positions = ['管理员','总台医师','总台主管','分检医师','总检医师','科室主管','院长','副院长'];
			this.managePositions = ['总台主管','科室主管','院长','副院长'];
		}
		return new EmployeeService();
	});
	
})(angular.module('peApp'));