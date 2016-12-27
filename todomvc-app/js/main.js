(function(angular){
	
	var controllers = angular.module('app.controllers.main',['app.servers.main'])
	
	controllers.controller('MainController',['$scope','$routeParams','$route','MainService',function($scope,$routeParams,$route,MainService){
	
	
		$scope.text='';
		$scope.todos = MainService.get();
		$scope.add = function(){
			if(!$scope.text){
				return;
			}
		MainService.add($scope.text);
		$scope.text='';
		
	};
	$scope.remove = MainService.remove;
	$scope.clear = function(){
		var newtodos = MainService.clearCompleted();
		$scope.todos = newtodos;
	};
	
	$scope.existCompleted = MainService.existCompleted;
	$scope.currentId= -1;
	$scope.editing = function(id){
		$scope.currentId= id;
	};
	$scope.save = function(){
		$scope.currentId=-1;
	};
	var now = true;
	$scope.toggleAll = MainService.toggleAll;
	$scope.toggle = function(){
		MainService.save();
	}
	
	$scope.selector={};
	
	var status = $routeParams.status;
	
		  switch(status){
		    case 'active':
		    	 $scope.selector={completed:false};
				break;
			case 'completed':
				$scope.selector={completed:true};
			break;
				default:
				$route.updateParams({status:''})
				$scope.selector={};
			break;
		}

	$scope.equaCompare = function(source,target){

		return source === target;
	}
	
		
	}]);
	
	
})(angular)








































