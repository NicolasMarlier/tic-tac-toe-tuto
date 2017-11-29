var chooseCellToPlay = function(cellsArray, playerToPlay) {
	var iaResult = computeWinProbabilities(cellsArray, userToPlay);
	var miminumProbabilityForOpponentToWin = 1.0;
	var miminumProbabilityForOpponentToWinIndex = -1;
	for(var i=0; i<cellsArray.length; i++) {
		if(iaResult[i] && iaResult[i][userToPlay % 2 + 1] <= miminumProbabilityForOpponentToWin) {
			miminumProbabilityForOpponentToWinIndex = i;
			miminumProbabilityForOpponentToWin = iaResult[i][userToPlay % 2 +1];
		}
	}
	return miminumProbabilityForOpponentToWinIndex;
};

var computeWinProbabilities = function(cellsArray, userToPlay, turnAhead) {
	if(turnAhead == undefined) {
		turnAhead = 0;
	}


	var result = [];
	
	for(var i=0; i<cellsArray.length; i++) {
		var cellValue = cellsArray[i];
		// We can play here
		if(cellValue == 0) {
			
			
			var cellsArrayModified = cellsArray.slice();
			cellsArrayModified[i] = userToPlay;
			

			var victory = checkVictory(cellsArrayModified);
			if(victory.player == 2) {
				//console.log("Turn " + turnAhead + "| User 2 victory");
				result.push({2: 1, 1: 0, 0: 0});
			}
			else if(victory.player == 1) {
				//console.log("Turn " + turnAhead + "| User 1 victory");
				result.push({1: 1, 2: 0, 0: 0});
			}
			else if(victory.player == 0) {
				//console.log("Turn " + turnAhead + "| Drwa game");
				result.push({1: 0, 2: 0, 0: 1});	
			}
			else {
				
				var possibilities = computeWinProbabilities(cellsArrayModified, userToPlay % 2 +1, turnAhead + 1);
				var length = possibilities.length;
				var possibilitiesStats = {
					0: 0,
					1: 0,
					2: 0
				}
				
				var possibilitiesLength = 0;
				for(var j=0; j<possibilities.length; j++) {
					if(possibilities[j]) {
						possibilitiesLength += 1;
						possibilitiesStats[0] += possibilities[j][0];
						possibilitiesStats[1] += possibilities[j][1];
						possibilitiesStats[2] += possibilities[j][2];
					}
				}
				possibilitiesStats[0] = possibilitiesStats[0] * 1.0 / possibilitiesLength;
				possibilitiesStats[1] = possibilitiesStats[1] * 1.0 / possibilitiesLength;
				possibilitiesStats[2] = possibilitiesStats[2] * 1.0 / possibilitiesLength;
				result.push(possibilitiesStats);
			}
		}
		else {
			result.push(null);
		}
	}

	return result;
};