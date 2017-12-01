# Tic, tac, toe.

Learn code basics with Tic, tac, toe.

## 7- Dumb AI
She can win, but you got to help her out.

### New concepts
- Code refactoring

### New code
tictactoe.js
```js
var getCellsArray = function() {
	return $(".cell").map(function() {
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
}
```

tictactoe.js
```js
...
var checkVictory = function(cellsArray) {
...
```

tictactoe.js
```js
...
var nextTurn = function() {
	var cellsArray = getCellsArray();
	var victory = checkVictory(cellsArray);
...
```

tictactoe.js
```js
...
var nextTurn = function() {
	var cellsArray = getCellsArray();
	var victory = checkVictory(cellsArray);
	if(victory.player == 0) {
		$("#notice").html("Draw game...");
        $("#replay-button").show();
        userToPlay = -1;
	}
	else if(victory.player > 0) {
		$("#notice").html("Player " + victory.player + " won!");
        $("#replay-button").show();
        for(var i=0; i<victory.cells.length; i++) {
			var cellIndex = victory.cells[i];
			$(".cell:eq(" + cellIndex + ")").addClass("epic").addClass("epic-once");

		}
		setTimeout(function() {
			for(var i=0; i<victory.cells.length; i++) {
				var cellIndex = victory.cells[i];
				$(".cell:eq(" + cellIndex + ")").removeClass("epic-once");
			}
		}, 300);
		userToPlay = -1;
	}
	else {
		userToPlay = (userToPlay) % 2 + 1;
		if(userToPlay == 2) {
			$("#notice").html("Player 2 is playing...");
			setTimeout(function() {
				var cellToPlayIndex = chooseCellToPlay(cellsArray, 2);
				$(".cell:eq(" + cellToPlayIndex + ")").html("o").addClass("played");
				nextTurn();
			}, 1000);
		}
		else {
			$("#notice").html("Player " + userToPlay + " to play");		
		}
	}
};
...
```

tictactoe_ai.js
```js
var chooseCellToPlay = function(cellsArray, playerToPlay) {
	for(var i=0; i<cellsArray.length; i++) {
		if(cellsArray[i] == 0) {
			return i;
		}
	}
};
```


### All code
