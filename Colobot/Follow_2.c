extern void object::Follow_2() {

	float direction, distance;
	
	while(1) {

		direction = receive("Direction");
		distance = receive("Length");

		turn(direction);
		move(distance);

	}

}
