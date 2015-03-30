'use strict';

/* Filters */

angular.module('', []).filter('', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
