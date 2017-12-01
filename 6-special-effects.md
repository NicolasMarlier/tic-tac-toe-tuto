# Tic, tac, toe.

Learn code basics with Tic, tac, toe.

## 6- Special effects
Another level of Wow.

### New concepts
- CSS Transitions
- SetTimeout

### New code

tictactoe.css
```css
.cell.epic {
    background: #56c356;
    color: white;
    transition-duration: 0.3s;
    transition-property: font-size;
}
.cell.epic-once {
    font-size: 100px;
}
```

tictactoe.js
```js
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
			return {
				player: 1,
				cells: line
			};
		}
		else if(values.toString() == [2, 2, 2].toString()) {
			return {
				player: 2,
				cells: line
			};
		}
	}

	var drawGame = true;
	for(var i=0; i<cellsArray.length; i++) {
		if(cellsArray[i] == 0) {
			drawGame = false;
		}
	}
	if(drawGame) {
		return {
			player: 0
		};
	}
	else {
		return {
			player: -1
		};
	}
}
```

tictactoe.js
```js
var nextTurn = function() {
	var victory = checkVictory();
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
    	$("#notice").html("Player " + userToPlay + " to play");
	}
};
```



### All code

tictactoe.html
```html
<html>
    <head>
    	<script src="jquery.js"></script>
        <script src="tictactoe.js"></script>
        <link href="tictactoe.css" rel="stylesheet"/>
    </head>
    <body>
        <h1>Tic tac toe</h1>
        <div id="notice">Player 1 to play</div>
        <div id="tic-tac-toe">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>

        <div id="replay-button">Replay</div>
    </body>
</html>
```

tictactoe.js
```js
var userToPlay;
var resetGame = function() {
    $(".cell").html("").removeClass("played epic");
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
			return {
				player: 1,
				cells: line
			};
		}
		else if(values.toString() == [2, 2, 2].toString()) {
			return {
				player: 2,
				cells: line
			};
		}
	}

	var drawGame = true;
	for(var i=0; i<cellsArray.length; i++) {
		if(cellsArray[i] == 0) {
			drawGame = false;
		}
	}
	if(drawGame) {
		return {
			player: 0
		};
	}
	else {
		return {
			player: -1
		};
	}
}
var nextTurn = function() {
	var victory = checkVictory();
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
```

tictactoe.css
```css
body {
    background: #f0f0f0;
    font-family: sans-serif;
}
h1 {
    text-align: center;
    font-size: 36px;
    padding: 20px 0;
}
#notice {
    text-align: center;
    font-size: 18px;
}
#tic-tac-toe {
    width: 300px;
    height: 300px;
    margin: 40px auto;
    border-right: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    border-radius: 20px 20px 20px 20px;
    background: white;
}
.cell {
    border-top: 1px solid #aaa;
    border-left: 1px solid #aaa;
    height: 99px;
    width: 99px;
    float:left;
    text-align: center;
    font-size: 60px;
    line-height: 99px;
    user-select: none;
    cursor: default;
}
.cell:nth-child(1)  {
    border-radius: 20px 0px 0 0;
}
.cell:nth-child(3) {
    border-radius: 0px 20px 0 0;    
}
.cell:nth-child(7) {
    border-radius: 0px 0px 0 20px;  
}
.cell:nth-child(9) {
    border-radius: 0px 0px 20px 0px;
}
.cell:not(.played) {
    cursor: pointer;
}
.cell:not(.played):hover {
    background: #fafafa;
    border-color: #666;
}
.cell.epic {
    background: #56c356;
    color: white;
    transition-duration: 0.3s;
    transition-property: font-size;
}
.cell.epic-once {
    font-size: 100px;
}
#replay-button {
    margin: 0 auto;
    width: 80px;
    text-align: center;
    border: 1px solid #aaa;
    background: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
}
#replay-button:hover {
    background: #fafafa;
}
```
