var userToPlay;
var resetGame = function() {
    $(".cell").html("").removeClass("played");
    userToPlay = 1;
    $("#notice").html("Player 1 to play");
    $("#replay-button").hide();
}
var checkVictory = function() {
	var lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
		];
	var cellsArray = $(".cell").map(function() {
		if($(this).html() == "x") {
			return 1;
		}
		else if($(this).html() == "o") {
			return 2;
		}
		else {
			return 0;
		}
	});
	
	for(var i=0; i<lines.length; i++) {
		var line = lines[i];
		var values = [];
		for(var j=0; j<line.length; j++) {
			var cellIndex = line[j];
			var value = cellsArray[cellIndex];
			values.push(value);
		}
		if(values.toString() == [1, 1, 1].toString()) {
			return 1;
		}
		else if(values.toString() == [2, 2, 2].toString()) {
			return 2;
		}
	}

	var drawGame = true;
	for(var i=0; i<cellsArray.length; i++) {
		if(cellsArray[i] == 0) {
			drawGame = false;
		}
	}
	if(drawGame) {
		return 0;
	} 
	else {
		return -1;
	}
}
var nextTurn = function() {
	var victory = checkVictory();
	if(victory == 0) {
		$("#notice").html("Draw game...");
        $("#replay-button").show();
        userToPlay = -1;
	}
	else if(victory > 0) {
		$("#notice").html("Player " + victory + " won!");
        $("#replay-button").show();
        userToPlay = -1;
	}
	else {
		userToPlay = (userToPlay) % 2 + 1;
    	$("#notice").html("Player " + userToPlay + " to play");	
	}
};

$(function() {
    $(".cell").click(function() {
        var cell = $(this);
        if(cell.html() == "") {
            if(userToPlay == 1) {
                cell.html("x").addClass("played");
                nextTurn();
            }
            else if(userToPlay == 2) {
                cell.html("o").addClass("played");
                nextTurn();
            }
        }
    });

    $("#replay-button").click(function() {
        resetGame();
    })

    resetGame();
})