extern void object::Follow_1() {
	
	int x, sens;
	
	for(x = 0; x < 5; x++) {
		
		move(20);
		sens = receive("Direction");
		turn(sens);

	}

}
