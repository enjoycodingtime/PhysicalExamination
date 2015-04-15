
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
})(angular.module('peApp'));