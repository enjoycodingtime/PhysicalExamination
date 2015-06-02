'use strict';

var peApp = angular.module('peApp', [ 'ngRoute' ]);

peApp.config([ '$routeProvider', function($routeProvider) {
	
	var auth = function($q, $location, LoginService) {
        var deferred = $q.defer();
        LoginService.hasLoggedin().then(function(hasLogin) {
            if (hasLogin != 'yes') {
            	$location.path('/');
                deferred.reject();
            }
            setTimeout(function() {
                deferred.resolve();
            }, 0);
        });
        return deferred.promise;
    };
    
	$routeProvider.when('/', {
		templateUrl : 'views/log_in.html',
		controller : 'logInCtrl'
	}).when('/receptionist', {
		templateUrl : 'views/receptionists/receptionist.html',
		controller : 'receptionistCtrl',
        resolve: {auth: auth}
	}).when('/changePassword', {
		templateUrl : 'views/employee/changePassword.html',
		controller : 'changePasswordCtrl',
	}).when('/admin', {
		templateUrl : 'views/admin/adminHome.html',
		controller : 'adminHomeCtrl',
        resolve: {auth: auth}
	}).when('/doctor', {
		templateUrl : 'views/doctor/doctorHome.html',
		controller : 'doctorHomeCtrl',
        resolve: {auth: auth}
	}).when('/manage', {
		templateUrl : 'views/manage/manageHome.html',
		controller : 'manageHomeCtrl',
        resolve: {auth: auth}
	}).when('/reservation', {
		templateUrl : 'views/receptionists/reservation.html',
		controller : 'reservationCtrl',
        resolve: {auth: auth}
	}).when('/importGroupReservation', {
		templateUrl : 'views/receptionists/importGroupReservation.html',
		controller : 'importGroupReservationCtrl',
        resolve: {auth: auth}
	}).when('/groupReservation', {
		templateUrl : 'views/receptionists/groupReservation.html',
		controller : 'groupReservationCtrl',
        resolve: {auth: auth}
	}).when('/groupReservationBox', {
		templateUrl : 'views/receptionists/groupReservationBox.html',
		controller : 'groupReservationBoxCtrl',
        resolve: {auth: auth}
	}).when('/addCombo', {
		templateUrl : 'views/admin/addCombo.html',
		controller : 'addComboCtrl',
        resolve: {auth: auth}
	}).when('/editCombo', {
		templateUrl : 'views/admin/editCombo.html',
		controller : 'comboCtrl',
        resolve: {auth: auth}
	}).when('/deleteCombo', {
		templateUrl : 'views/admin/deleteCombo.html',
		controller : 'comboCtrl',
        resolve: {auth: auth}
	}).when('/reservationBox', {
		templateUrl : 'views/receptionists/reservationBox.html',
		controller : 'reservationBoxCtrl',
        resolve: {auth: auth}
	}).when('/physicalExaminationRegistration', {
		templateUrl : 'views/receptionists/physicalExaminationRegistration.html',
		controller : 'physicalExaminationRegistrationCtrl',
        resolve: {auth: auth}
	}).when('/officeCtrl', {
		templateUrl : 'views/admin/officeCtrl.html',
		controller : 'officeCtrlController',
        resolve: {auth: auth}
	}).when('/manageExaminationProject', {
		templateUrl : 'views/admin/manageExaminationProject.html',
		controller : 'manageExaminationProjectCtrl',
        resolve: {auth: auth}
	}).when('/manageExaminationProject1', {
		templateUrl : 'views/manage/manageExaminationProject.html',
		controller : 'manageExaminationProjectCtrl',
        resolve: {auth: auth}
	}).when('/selectCombo', {
		templateUrl : 'views/admin/selectCombo.html',
		controller : 'selectComboCtrl',
        resolve: {auth: auth}
	}).when('/manageComboExaminationProject', {
		templateUrl : 'views/admin/manageComboExaminationProject.html',
		controller : 'manageComboExaminationProjectCtrl',
        resolve: {auth: auth}
	}).when('/manageComboExaminationProject1', {
		templateUrl : 'views/manage/manageComboExaminationProject.html',
		controller : 'manageComboExaminationProjectCtrl',
        resolve: {auth: auth}
	}).when('/employees', {
		templateUrl : 'views/admin/employees.html',
		controller : 'employeesCtrl',
        resolve: {auth: auth}
	}).when('/modifyCombo', {
		templateUrl : 'views/admin/modifyCombo.html',
		controller : 'modifyComboCtrl',
        resolve: {auth: auth}
	}).when('/registrationList', {
		templateUrl : 'views/receptionists/registrationList.html',
		controller : 'registrationListCtrl',
        resolve: {auth: auth}
	}).when('/fenjian', {
		templateUrl : 'views/doctor/fenjian.html',
		controller : 'fenjianCtrl',
        resolve: {auth: auth}
	}).when('/completeTodayFenjian', {
		templateUrl : 'views/doctor/completedToday.html',
		controller : 'completedTodayCtrl',
        resolve: {auth: auth}
	}).when('/zongjian', {
		templateUrl : 'views/doctor/zongjian.html',
		controller : 'zongjianCtrl',
        resolve: {auth: auth}
	}).when('/detailReservation', {
		templateUrl : 'views/receptionists/detailReservation.html',
		controller : 'detailReservationCtrl',
        resolve: {auth: auth}
	}).when('/detailGroupReservation', {
		templateUrl : 'views/receptionists/detailGroupReservation.html',
		controller : 'detailGroupReservationCtrl',
        resolve: {auth: auth}
	}).when('/showDetailReservation', {
		templateUrl : 'views/manage/showDetailReservation.html',
		controller : 'showDetailReservationCtrl',
        resolve: {auth: auth}
	}).when('/queryDayReport', {
		templateUrl : 'views/manage/queryDayReport.html',
		controller : 'queryDayReportCtrl',
        resolve: {auth: auth}
	}).when('/queryMonthReport', {
		templateUrl : 'views/manage/queryMonthReport.html',
		controller : 'queryMonthReportCtrl',
        resolve: {auth: auth}
	}).when('/queryReservatioin', {
		templateUrl : 'views/manage/queryReservatioin.html',
		controller : 'queryReservatioinCtrl',
        resolve: {auth: auth}
	}).when('/queryRegistration', {
		templateUrl : 'views/manage/queryRegistration.html',
		controller : 'queryRegistrationCtrl',
        resolve: {auth: auth}
	}).when('/comboStatistics', {
		templateUrl : 'views/manage/comboStatistics.html',
		controller : 'comboStatisticsCtrl',
        resolve: {auth: auth}
	}).when('/officeStatistics', {
		templateUrl : 'views/manage/officeStatistics.html',
		controller : 'officeStatisticsCtrl',
        resolve: {auth: auth}
	}).when('/conclusion', {
		templateUrl : 'views/admin/conclusion.html',
		controller : 'conclusionCtrl',
        resolve: {auth: auth}
	}).when('/physicalFeature', {
		templateUrl : 'views/admin/physicalFeature.html',
		controller : 'physicalFeatureCtrl',
        resolve: {auth: auth}
	}).when('/fenjianResult', {
		templateUrl : 'views/doctor/fenjian_add_result.html',
		controller : 'fenjianResultCtrl',
        resolve: {auth: auth}
	}).when('/zongjianResult', {
		templateUrl : 'views/doctor/zongjian_add_result.html',
		controller : 'zongjianResultCtrl',
        resolve: {auth: auth}
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