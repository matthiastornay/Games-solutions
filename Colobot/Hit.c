extern void object::Hit_1() {

	aim(-3);
	
	while(true) {
		
		object target = radar(TargetBot);
		float test = direction(target.position);

		turn(test);

		object target2 = radar(TargetBot);
		float test2 = direction(target2.position);

		if(test == test2) {

			fire(1);

		}

	}

}
