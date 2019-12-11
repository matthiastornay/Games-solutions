function _getMpDistance(tableau, mp, start_cell, to_ignore) {
	// Opérations variables.
	
	push(tableau, start_cell);

	for(var i = 0; i <= 613; i++) {

		if(getCellContent(i) == CELL_EMPTY
		&& getCellDistance(start_cell, i) <= mp) {

			var distance = getPathLength(start_cell, i);

			if(distance > 0
			&& distance <= mp) {

				push(tableau, i);

			}

		} else {
			
			push(to_ignore, i);
			
		}

	}
	
	var multi = [[tableau], [to_ignore]];
	return multi;
	
}

function _saveDistance(tour, tableau, p_1, p_2) {
	// 50 opérations.
	
	if(tour == 1) {
	
		tableau[0] = 0;
		tableau[1] = 0;
		tableau[2] = getDistance(p_1, p_2);

	} else {
	
		tableau[1 + tour] = getDistance(p_1, p_2);
	
	}
	
	return tableau;
	
}

function _isMyLeekInTheMiddle(middle, in_the_middle) {
	// 600 opérations.

	for(var compteur = 0; compteur < 30; compteur++) {

		if(getCell() !== middle[compteur]) {

			in_the_middle = True;
			compteur = 30;

		}
		
	}

	return in_the_middle;

}

function _isSameDistance(tour, tableau) {
	
	var same_distance;
	
	if(tableau[tour + 1] == tableau[tour] == tableau[tour - 1]) {
		
		same_distance = True;
		
	}
	
	return same_distance;
	
}

function _testAndUse(objet, cible, n) {
	
	for(var i = 0; i < n; i++) {
	
		if(canUseChip(objet, cible)
		&& isChip(objet)) {

			useChip(objet, cible);

		} else if(canUseWeapon(objet, cible)
		&& isWeapon(objet)) {
			
			_testAndSet(objet);
			useWeapon(cible);
			
		}
	
	}
	
}

function _testAndSet(arme) {
	
	if(getWeapon() !== arme) {

		setWeapon(arme);
	
	}
	
	return 0;
	
}

function _averageDammages(arme, force) {
	
	var effects = getWeaponEffects(arme);
	
	return ((effects[0][1] + effects[0][2]) / 2) * (1 + force / 100);
	
}

function _nCoups(joueur) {
	
	return floor(getTP(joueur) / getWeaponCost(getWeapon(joueur)));
	
}
