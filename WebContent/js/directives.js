'use strict';

/* Directives */
angular.module('peApp').directive('fDateTimePicker', function(){
    return {
        restrict: 'A',
        link:function(scope,element,attrs,ngModelCtrl){
            var options = attrs;
            element.datetimepicker(options);
        }
    }
});
