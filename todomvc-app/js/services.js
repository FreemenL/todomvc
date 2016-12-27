(function (angular){
	angular.module('app.servers.main',[])
		.service('MainService',['$window',function($window){
			var  storage = $window.localStorage;
			var todos = storage['my_todo_list']?JSON.parse(storage['my_todo_list']):[];
		function getId(){
			var id = Math.random();
			for(var i=0;i<todos.length;i++){
					if(todos[i].id === id){
						id=getId();
						break;
					}
				}
			return id;
		
		};
		this.save=function (){
			storage['my_todo_list']=JSON.stringify(todos);
		}
	this.get = function(){
		return todos;
	}
	this.add = function(text){
		todos.push({
			id:getId(),
			text:text,
			completed:false
		});
		this.save();		
	};
	this.remove =function(id){
		for(var i=0;i<todos.length;i++){
				if(todos[i].id === id){
					todos.splice(i,1);
					break;
				}
			}
		this.save();	
	}
	this.clearCompleted=function(){
		var result=[]
		for(var i=0;i<todos.length;i++){
				if(!todos[i].completed){
					result.push(todos[i]);
					
				}
			}
		todos=result;
		this.save();	
		return todos;
	}
	
	this.existCompleted = function(){
		for(var i=0;i<todos.length;i++){
				if(todos[i].completed){
					return true;
					
				}
			}
		return false;
	}
	this.update = function(id,target){
		
	}
	var now = true;
	this.toggleAll = function(){
		for (var i=0;i<todos.length;i++) {
			todos[i].completed = now;
		}
		now = !now;
		this.save();	
	};
	
	

}])	
})(angular);
