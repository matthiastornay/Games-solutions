include('functions');					
include('variables');					
					
_testAndSet(WEAPON_GRENADE_LAUNCHER);					
					
_saveDistance(getTurn(), tab_distance, me, enemy);					
					
for(var i = 0; i < mp; i++) {					
					
	for(n = 0; n < 2; n++) {				
					
		if(getEnemiesLife() <= i * _nCoups(me) * 			
((getWeaponEffects(WEAPON_GRENADE_LAUNCHER)[0][1] + getWeaponEffects(WEAPON_GRENADE_LAUNCHER)[0][2]) / 2) * (1 + getStrength() / 100)					
		&& getLife() > i * _nCoups(enemy) * ((getWeaponEffects(getWeapon(enemy))[0][1] + getWeaponEffects(getWeapon(enemy))[0][2]) / 2) * (1 + getStrength(enemy) / 100)) {			
					
			canKillHim = True;		
			moveToward(enemy);		
					
		}			
					
	}				
					
	if(getTurn() >= 2				
	|| !canKillHim) {				
					
		_testAndUse(CHIP_HELMET, me, 1);			
		_testAndUse(CHIP_PROTEIN, me, 1);			
		_testAndUse(CHIP_SHIELD, me, 1);			
					
	}				
					
	if(canUseWeapon(WEAPON_GRENADE_LAUNCHER, enemy)				
	|| canKillHim) {				
					
		_testAndSet(WEAPON_GRENADE_LAUNCHER);			
					
		if(getLife() <= 0.4 * life) {			
					
			_testAndUse(CHIP_BANDAGE, me, 1);		
			_testAndUse(WEAPON_GRENADE_LAUNCHER, enemy, 2);		
					
		} else {			
					
			_testAndUse(WEAPON_GRENADE_LAUNCHER, enemy, 2);		
					
		}			
					
		moveAwayFrom(enemy);			
					
	} else if(canUseWeapon(WEAPON_LASER, enemy)) {				
					
		_testAndSet(WEAPON_LASER);			
					
		if(getLife() <= 0.75 * life) {			
					
			_testAndUse(CHIP_BANDAGE, me, 1);		
			_testAndUse(WEAPON_LASER, enemy, 2);		
					
		} else {			
					
			_testAndUse(WEAPON_LASER, enemy, 2);		
					
		}			
					
		moveAwayFrom(enemy); 			
					
	} else if(canUseChip(CHIP_SPARK, enemy)) {				
					
		if(getLife() <= 0.5 * life) {			
					
			_testAndUse(CHIP_CURE, me, 1);		
			_testAndUse(CHIP_BANDAGE, me, 1);		
			_testAndUse(CHIP_SPARK, enemy, _nCoups(getLeek()));		
					
		} else {			
					
			if(_FINALS_DAMMAGES_SPARK < _FINALS_DAMMAGES_CURRENT_WEAPON) {		
			debug(_FINALS_DAMMAGES_SPARK);		
			for(var go = 1; go < mp; go++) {		
					
				moveToward(enemy, go);	
					
				if(canUseWeapon(enemy)) {	
					
					_testAndUse(getWeapon(), enemy, _nCoups(getLeek()));
					go = mp;
					
				}	
					
			}		
					
			} else if(_FINALS_DAMMAGES_SPARK >= _FINALS_DAMMAGES_CURRENT_WEAPON) {		
			debug(_FINALS_DAMMAGES_SPARK);		
				_testAndUse(CHIP_SPARK, enemy, 3);	
					
			}		
		}			
					
		moveAwayFrom(enemy);			
					
	} else {				
					
		_testAndUse(CHIP_BANDAGE, me, 1);			
		_testAndUse(CHIP_CURE, me, 1);			
					
		moveToward(enemy, 1);			
					
	}				
					
}					
					
if(getTP() >= 1) {					
					
	say(BDD[randInt(0, count(BDD))]);				
					
}					
					
debug(getOperations());					

