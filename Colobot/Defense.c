extern void object::Defense_1() {

	while(true) {
		
		object fourmis = radar(AlienAnt);
		
		if(distance(position, fourmis.position) <= 40) {

			turn(direction(fourmis.position));
			fire(2);
			
		}
		 
	}

}
