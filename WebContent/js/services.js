'use strict';

/* Services */

var PEServices = angular.module('PEServices', ['ngResource']);

PEServices.factory('LogInService', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
