var chooseCellToPlay = function(cellsArray, playerToPlay) {
	for(var i=0; i<cellsArray.length; i++) {
		if(cellsArray[i] == 0) {
			return i;
		}
	}
};