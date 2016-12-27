(function (angular) {
	'use strict';

	var myApp = angular.module('app',['ngRoute','app.controllers.main','app.servers.main']);
	
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/:status?',{
			controller:'MainController',
			templateUrl:'main_temp'
		})
		.otherwise({redirectTo:'/'})
	}])

//	myApp.controller('MainController',['$scope','$routeParams','$route',function($scope,$routeParams,$route){
//	function getId(){
//		var id = Math.random();
//		for(var i=0;i<$scope.todos.length;i++){
//				if($scope.todos[i].id === id){
//					id=getId();
//					break;
//				}
//			}
//		return id;
//		
//	}
//	
//		$scope.text='';
//		$scope.todos = [
//			{
//				id:1,
//				text:'学习',
//				completed:false
//			},
//			{
//				id:2,
//				text:'睡觉',
//				completed:false
//			},
//			{
//				id:3,
//				text:'打豆豆',
//				completed:true
//			}
//		];
//		$scope.add = function(){
//			if(!$scope.text){
//				return;
//			}
//		$scope.todos.push({
//			id:getId(),
//			text:$scope.text,
//			completed:false
//		});
//		$scope.text='';
//		
//	};
//	$scope.remove =function(id){
//			for(var i=0;i<$scope.todos.length;i++){
//				if($scope.todos[i].id === id){
//					$scope.todos.splice(i,1);
//					break;
//				}
//			}
//		}
//	$scope.clear=function(){
//		var result=[]
//		for(var i=0;i<$scope.todos.length;i++){
//				if(!$scope.todos[i].completed){
//					result.push($scope.todos[i]);
//					
//				}
//			}
//		$scope.todos=result;
//	}
//	
//	$scope.existCompleted = function(){
//		for(var i=0;i<$scope.todos.length;i++){
//				if($scope.todos[i].completed){
//					return true;
//					
//				}
//			}
//		return false;
//	}
//	$scope.currentId= -1;
//	$scope.editing = function(id){
//		$scope.currentId= id;
//	};
//	$scope.save = function(){
//		$scope.currentId=-1;
//	};
//	var now = true;
//	$scope.toggleAll = function(){
//		for (var i=0;i<$scope.todos.length;i++) {
//			$scope.todos[i].completed = now;
//		}
//		now = !now;
//	}
//	
//	
//	$scope.selector={};
//	
//	var status = $routeParams.status;
//	
//		  switch(status){
//		    case 'active':
//		    	 $scope.selector={completed:false};
//				break;
//			case 'completed':
//				$scope.selector={completed:true};
//			break;
//				default:
//				$route.updateParams({status:''})
//				$scope.selector={};
//			break;
//		}
//
//	$scope.equaCompare = function(source,target){
//		console.log(source);
//		console.log(target);
//		return source === target;
//	}
//	
//		
//	}]);
//	

})(angular);
