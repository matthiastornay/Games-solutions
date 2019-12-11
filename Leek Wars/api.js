function _initReachablesCellsTabs(empty_cells_tab, egg_cell) {
	
	push(empty_cells_tab, egg_cell);
	
}

function _determineReachablesAndUnreachablesCells(reachables_cells_tab, unreachables_cells_tab, mp) {
	
	var _CELL;
	var _DISTANCE;

	for(_CELL = 0; _CELL < 613; _CELL++) {

		if(getCellContent(_CELL) == CELL_EMPTY					   		   && getCellDistance(reachables_cells_tab[0], _CELL) <= mp) {

			_DISTANCE = getPathLength(reachables_cells_tab[0], _CELL);
	
		}
		
		if(_DISTANCE > 0												&& _DISTANCE <= mp) {

			push(reachables_cells_tab, _CELL);

		} else {

		push(unreachables_cells_tab, _CELL);
		
		}
	
	}
			
}

function _determineSafeCellsAmongReachablesOneSTab(reachables_cells_tab, dangerous_leek, safe_cells_tab) {
	
	var _CELL;
	
	for(_CELL in reachables_cells_tab) {
		
		if(!lineOfSight(getCell(dangerous_leek), _CELL, getLeek())
		&& getWeaponMaxRange(getWeapon(dangerous_leek) >= getCellDistance(getCell(dangerous_leek), _CELL))) {
		
			push(safe_cells_tab, _CELL);
		
		}
		
	}
		
}

function _debugGetOperations() {
	
	debug(getOperations());
	
}
