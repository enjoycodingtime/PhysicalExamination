'use strict';

var peApp = angular.module('peApp', [ 'ngRoute' ]);

peApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/log_in.html',
		controller : 'logInCtrl'
	}).when('/receptionist', {
		templateUrl : 'views/receptionists/receptionist.html',
		controller : 'receptionistCtrl'
	}).when('/admin', {
		templateUrl : 'views/admin/adminHome.html',
		controller : 'adminHomeCtrl'
	}).when('/doctor', {
		templateUrl : 'views/doctor/doctorHome.html',
		controller : 'doctorHomeCtrl'
	}).when('/manage', {
		templateUrl : 'views/manage/manageHome.html',
		controller : 'manageHomeCtrl'
	}).when('/reservation', {
		templateUrl : 'views/receptionists/reservation.html',
		controller : 'reservationCtrl'
	}).when('/addCombo', {
		templateUrl : 'views/admin/addCombo.html',
		controller : 'addComboCtrl'
	}).when('/editCombo', {
		templateUrl : 'views/admin/editCombo.html',
		controller : 'comboCtrl'
	}).when('/deleteCombo', {
		templateUrl : 'views/admin/deleteCombo.html',
		controller : 'comboCtrl'
	}).when('/reservationBox', {
		templateUrl : 'views/receptionists/reservationBox.html',
		controller : 'reservationBoxCtrl'
	}).when('/physicalExaminationRegistration', {
		templateUrl : 'views/receptionists/physicalExaminationRegistration.html',
		controller : 'physicalExaminationRegistrationCtrl'
	}).when('/officeCtrl', {
		templateUrl : 'views/admin/officeCtrl.html',
		controller : 'officeCtrlController'
	}).otherwise({
		redirectTo : '/'
	});
} ]);

peApp
		.config(function($httpProvider) {
			$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

			// Override $http service's default transformRequest
			$httpProvider.defaults.transformRequest = [ function(data) {
				/**
				 * The workhorse; converts an object to x-www-form-urlencoded
				 * serialization.
				 * 
				 * @param {Object}
				 *            obj
				 * @return {String}
				 */
				var param = function(obj) {
					var query = '';
					var name, value, fullSubName, subName, subValue, innerObj, i;

					for (name in obj) {
						value = obj[name];

						if (value instanceof Array) {
							for (i = 0; i < value.length; ++i) {
								subValue = value[i];
								fullSubName = name + '[' + i + ']';
								innerObj = {};
								innerObj[fullSubName] = subValue;
								query += param(innerObj) + '&';
							}
						} else if (value instanceof Object) {
							for (subName in value) {
								subValue = value[subName];
								fullSubName = name + '[' + subName + ']';
								innerObj = {};
								innerObj[fullSubName] = subValue;
								query += param(innerObj) + '&';
							}
						} else if (value !== undefined && value !== null) {
							query += encodeURIComponent(name) + '='
									+ encodeURIComponent(value) + '&';
						}
					}

					return query.length ? query.substr(0, query.length - 1)
							: query;
				};

				return angular.isObject(data)
						&& String(data) !== '[object File]' ? param(data)
						: data;
			} ];

		});