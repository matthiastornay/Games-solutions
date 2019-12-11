extern void object::Hunter_1() {
	
	object killer;
	
	jet(0.2);
	while(position.z < 15);
	
	aim(-20);
	
	while(true) {

		killer = radar(AlienAnt);

		turn(direction(killer.position));
		motor(1,1);

		if(distance(position, killer.position) <= 40) {
			fire(1);
		
		}

	}

}
