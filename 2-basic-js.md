# Tic, tac, toe.

Learn code basics with Tic, tac, toe.

## 2- Basic JS
Actually playable Tic Tac Toe.

### What we aim
[See demo](2-basic-js.html)

### New concepts
- Writing Javascript
- Jquery
- Variables
- Functions
- Callbacks
- Events
- DOM
- Basic DOM manipulation

### New Code
tictactoe.html
```html
		...
		<h1>Tic tac toe</h1>
        <div id="notice">Player 1 to play</div>
        <table>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </table>
    </body>
```

tictactoe.html
```html
<head>
	<script src="jquery.js"></script>
</head>
```

tictactoe.html
```html
<body>
	<script>
        var userToPlay = 1;
        var nextTurn = function() {
            userToPlay = (userToPlay) % 2 + 1;
            $("#notice").html("Player " + userToPlay + " to play");
        };

        $(function() {
            $("td").click(function() {
                var cell = $(this);
                if(cell.html() == "-") {
                    if(userToPlay == 1) {
                        cell.html("x");
                        nextTurn();
                    }
                    else {
                        cell.html("o");
                        nextTurn();
                    }

                }
            });
        })

    </script>
    ...
```

### All Code
```html
<html>
    <head>
    	<script src="jquery.js"></script>
    </head>
    <body>
    	<script>
            var userToPlay = 1;
            var nextTurn = function() {
                userToPlay = (userToPlay) % 2 + 1;
                $("#notice").html("Player " + userToPlay + " to play");
            };

            $(function() {
                $("td").click(function() {
                    var cell = $(this);
                    if(cell.html() == "-") {
                        if(userToPlay == 1) {
                            cell.html("x");
                            nextTurn();
                        }
                        else {
                            cell.html("o");
                            nextTurn();
                        }

                    }
                });
            })

        </script>


        <h1>Tic tac toe</h1>
        <div id="notice">Player 1 to play</div>
        <table>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </table>
    </body>
</html>
```
