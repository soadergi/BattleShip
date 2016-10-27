//window.onload = view.init;

var view = {
	//displayMessage: function(){},
	//displayHit: function(){},
	//displayMiss: function(){},
	init: function(){
		//model.generateShipLocation();
		document.getElementById("button").addEventListener("click", controller.getUserInput);
	},
	//handleFire: function(){},
}

var controller = {
	getUserInput: function(){
		var user_input = document.getElementById("sector_input").value;
		console.log(user_input);
		var ABCDEFG = ["A","B","C","D","E","F","G"];
		var input = ABCDEFG.indexOf(user_input[0]) + user_input[1];
		if(input.charAt[0] == -1){break}
			console.log(input);
		model.checkShot(input);
	}
}

var model = {
	shipLocation: {
		ship1: {
			location: ["10","11","12"],
			alive: ["1","1","1"]
		},
		ship2: {
			location: ["30","31","32"],
			alive: ["1","1","1"]
		},
		ship3: {
			location: ["50","51","52"],
			alive: ["1","1","1"]
		}
	},
	generateShipLocation: function(){
		//Код генерации кораблей
		//Возвращает объект model.shipLocation.ships{}
	},
	checkShot: function(input){
		return this.shipLocation.ship1.location.some(function(arrVal){
			return input == arrVal;
		});
	}
}


window.onload = view.init;
