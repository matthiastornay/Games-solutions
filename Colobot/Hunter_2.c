extern void object::Hunter_2() {
	
	object killer;
	float pos;
	
	jet(0.2);
	while(position.z < 15);
	
	aim(-20);
	
	while(true) {
		
		killer = radar(AlienAnt);
		pos = topo(position);
		
		turn(direction(killer.position));
		motor(1,1);

		if((position.z)-pos <= 3) {

			jet(0.2);
			while((position.z)-pos > 3);

		} else if(distance(position, killer.position) <= 40) {

			fire(1);

		}

	}

}
