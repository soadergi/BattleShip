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
		console.log(input);
		return input
	}
}

var model = {
	//generateShipLocation: function(){},
}


window.onload = view.init;

//mvc pattern
//document.getElementById()
//indexOf
//charAt