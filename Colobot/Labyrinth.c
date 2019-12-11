extern void object::Labyrinth() {

	object obstacle, obstacleG, obstacleD;
	
	while(1) {
		
		obstacle = radar(Barrier, 0, 45, 0, 5);
		obstacleG = radar(Barrier, 90, 45, 0, 5);
		obstacleD = radar(Barrier, -90, 45, 0, 5);
		
		if(obstacleG == null) {

			turn(90);

		} else if(obstacleD == null) {

			turn(-90);

		}

		move(5);

	}

}
