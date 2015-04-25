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
	}).when('/manageExaminationProject', {
		templateUrl : 'views/admin/manageExaminationProject.html',
		controller : 'manageExaminationProjectCtrl'
	}).when('/manageExaminationProject1', {
		templateUrl : 'views/manage/manageExaminationProject.html',
		controller : 'manageExaminationProjectCtrl'
	}).when('/selectCombo', {
		templateUrl : 'views/admin/selectCombo.html',
		controller : 'selectComboCtrl'
	}).when('/manageComboExaminationProject', {
		templateUrl : 'views/admin/manageComboExaminationProject.html',
		controller : 'manageComboExaminationProjectCtrl'
	}).when('/manageComboExaminationProject1', {
		templateUrl : 'views/manage/manageComboExaminationProject.html',
		controller : 'manageComboExaminationProjectCtrl'
	}).when('/employees', {
		templateUrl : 'views/admin/employees.html',
		controller : 'employeesCtrl'
	}).when('/modifyCombo', {
		templateUrl : 'views/admin/modifyCombo.html',
		controller : 'modifyComboCtrl'
	}).when('/registrationList', {
		templateUrl : 'views/receptionists/registrationList.html',
		controller : 'registrationListCtrl'
	}).when('/fenjian', {
		templateUrl : 'views/doctor/fenjian.html',
		controller : 'fenjianCtrl'
	}).when('/zongjian', {
		templateUrl : 'views/doctor/zongjian.html',
		controller : 'zongjianCtrl'
	}).when('/detailReservation', {
		templateUrl : 'views/receptionists/detailReservation.html',
		controller : 'detailReservationCtrl'
	}).when('/showDetailReservation', {
		templateUrl : 'views/manage/showDetailReservation.html',
		controller : 'showDetailReservationCtrl'
	}).when('/queryDayReport', {
		templateUrl : 'views/manage/queryDayReport.html',
		controller : 'queryDayReportCtrl'
	}).when('/queryReservatioin', {
		templateUrl : 'views/manage/queryReservatioin.html',
		controller : 'queryReservatioinCtrl'
	}).when('/comboStatistics', {
		templateUrl : 'views/manage/comboStatistics.html',
		controller : 'comboStatisticsCtrl'
	}).when('/officeStatistics', {
		templateUrl : 'views/manage/officeStatistics.html',
		controller : 'officeStatisticsCtrl'
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