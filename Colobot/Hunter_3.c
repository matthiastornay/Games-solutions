extern void object::Hunter_3() {
	
	object killer;
	
	aim(-5);
	
	while(true) {

		killer = radar(AlienWasp); // Could be replace by "Any"

		turn(direction(killer.position));
		motor(1,1);
		
		jet(0);

		if((position.z) < (killer.position.z)) {

			jet(0.3);
			wait(0.1);

		} else if((position.z) > (killer.position.z)) {

			jet(-0.3);
			wait(0.1);

		}

		killer = radar(AlienWasp); // Could be replace by "Any"

		turn(direction(killer.position));

		if(distance(position, killer.position) <= 4) {
			
			fire(1);

		}
		
	}

}

