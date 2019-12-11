extern void object::Go() {
	
	int x = 0;
	
	for(x = 0; x < 7; x++) {
		
		move(5);
		turn(90);
		fire(1);
		turn(-90);

	}
	
}
