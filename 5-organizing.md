<!-- include(header.md) -->

## 5- Organizing in files
Because it's beginning to look messy.

### New concepts
- Including files in HTML

### New code

```html
<head>
    <script src="jquery.js"></script>
    <script src="5-organizing.js"></script>
    <link href="5-organizing.css" rel="stylesheet"/>
</head>
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
