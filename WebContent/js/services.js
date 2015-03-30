/* Services */
(function(app){
	'use strict';
	app.factory('ReservationService',function(){
		function ReservationService() {
			this.getPhysicalExaminations = function(){
				return [
				        {
				        	name:'学生套餐'				        	
				        },{
				        	name:'青年套餐'				        	
				        },{
				        	name:'老年套餐'				        	
				        },{
				        	name:'男性套餐'				        	
				        },{
				        	name:'女性套餐'				        	
				        },{
				        	name:'入职套餐'				        	
				        }
				        ]
			}
		}
	})
})(angular.module('peApp'))

//angular.module('peApp').factory('ReservationService', function(){
//	function ReservationService() {
//		this.hello = 'hh';
//		this.getPhysicalExaminations = function(){
//			return [
//			        {
//			        	name:'学生套餐'				        	
//			        },{
//			        	name:'青年套餐'				        	
//			        },{
//			        	name:'老年套餐'				        	
//			        },{
//			        	name:'男性套餐'				        	
//			        },{
//			        	name:'女性套餐'				        	
//			        },{
//			        	name:'入职套餐'				        	
//			        }
//			        ]
//		}
//	}
//});
