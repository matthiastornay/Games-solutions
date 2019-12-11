include('functions');

var mp = getMP();
var life = getLife();
var enemy = getNearestEnemy();
var life_enemy = getLife(enemy);
var me = getLeek();
var in_the_middle = False;
var tab_distance = [];
var same_distance = _isSameDistance(getTurn(), tab_distance);
var canKillHim = False;
var cells_me = [];
var tour_enemy_life = [];
global _SPARK_DAMMAGES = getChipEffects(CHIP_SPARK)[0][2];
global _CURRENT_WEAPON_DAMMAGES = getWeaponEffects(getWeapon())[0][2];
var cells_to_ignore_me = [];
var cells_ME = [[cells_me], [cells_to_ignore_me]];
var cells_enemy = [];
var _STRENGTH_EFFECTS = (1 + getStrength() / 100);
var _RESISTANCE_EFFECTS_ENEMY = (1 + getResistance(enemy)/100);
var _ABSOLUTE_SHIELD_ENEMY = getAbsoluteShield(enemy) * _RESISTANCE_EFFECTS_ENEMY;
var _RELATIVE_SHIELD_ENEMY = getRelativeShield(enemy) * _RESISTANCE_EFFECTS_ENEMY;
var _FINALS_DAMMAGES_SPARK = 3 * _SPARK_DAMMAGES * _STRENGTH_EFFECTS * (1 - _RELATIVE_SHIELD_ENEMY / 100) - _ABSOLUTE_SHIELD_ENEMY;
var _FINALS_DAMMAGES_CURRENT_WEAPON = 3 * _CURRENT_WEAPON_DAMMAGES * _STRENGTH_EFFECTS * (1 - _RELATIVE_SHIELD_ENEMY / 100) - _ABSOLUTE_SHIELD_ENEMY;
var cells_to_ignore_enemy = [];
var cells_ENEMY = [[cells_enemy], [cells_to_ignore_enemy]];
var cells_escape = [];
var cells_tampon = [];
var middle = [216, 217, 218, 219, 220, 221,
			  251, 241, 243, 244, 245, 246,
			  286, 277, 278, 279, 280, 281,
			  321, 322, 323, 324, 325, 327,
			  356, 357, 358, 359, 360, 361,
			  391, 392, 393, 394, 395, 396];
var n;
in_the_middle = _isMyLeekInTheMiddle(middle, in_the_middle);


// I though these puns were funny back in collège/lycée
global BDD = ["L’une des choses que j'ai toujours eu le plus de mal à comprendre chez les poireaux est leur manie de perpétuellement dire et répéter les plus plates évidences, genre : «Quelle belle journée» ou encore : «Chéri, j’ai l’impression que tu es tombé au fond d’un puits de dix mètres, est-ce que ça va ?»            ",
			 "I've got a gun for a mouth and a bullet with your name on it !",
			 "«EST-CE QUE VOUS ÊTES FROOOIDS ?!» - Un médecin légiste qui arrive au taf.        ",
			 "Après t'avoir tué je m'arrangerai pour qu'on te décerne un Darwin Award.",
			 "Quand on est mort, c'est pour longtemps.",
			 "C'est quand il y a un temps mort qu'il faut tuer le temps. Paradoxal, non ?",
			 "Ne souffler jamais dans un ballon en portant vos lunettes. Ça fera toujours deux verres en moins.",
			 "Cynique. Grossier personnage dont la vision déformée voit les choses comme elles sont, et non comme elles devraient être.",
			 "Selon les derniers chiffres, un tiers des statistiques sont fausses.",
			 "Si tu tentes de résister, je fonce vers tes bases de données et je te reprogramme avec une très grosse hache !",
			 "Au commencement, l'univers fut créé. Cela mécontenta beaucoup de monde, et fut largement considéré comme une mauvaise idée.",
			 "Pourquoi les gens naissent-ils? Pourquoi meurent-ils? Et pourquoi cherchent-ils dans l'intervalle à porter le plus souvent possible une montre à quartz numérique?",
			 "Ça me flanque la migraine rien qu'à m'abaisser à essayer de penser à votre niveau.",
			 "Chaque heure qui passe est une heure creuse. En particulier l'heure du déjeuner.",
			 "Samedi, ils ont trouvé un cachalot échoué sur les quais à... Paris. Nous sommes toujours à la recherche du pot de pétunias.",
			 "Il faut arrêter de prendre les c**s pour des gens.",
			 "Comme je suis contre la violence gratuite, voici un peu de monnaie.",
			 "Tu veux savoir quand tu vas être cambriolé ? Envoie ton adresse + les dates de tes vacances au 7 13 13 (appel surtaxé) !",
			 "À mon avis le mec qui a dit qu'on apprend de ses erreurs ne devait pas être parachutiste.",
			 "Tu cherches un bon coup ? Envoie G-I-R-A-F-E au 8 22 22.",
			 "La vitamine C... mais elle ne dira rien.",
			 "Parfois, il est 16 heures",
			 "Je prends les paris que c'est le même daltonien qui a créé le jambon blanc et le cordon bleu.",
			 "Il vaut mieux se taire et passer pour un c** plutôt que de parler et de ne laisser aucun doute sur le sujet.",
			 "Plop !",
			 "Entre une mauvaise cuisine et un empoisonnement, il n’y a qu’une différence d’intention.         ",
			 "Un jour j'ai rencontré une aubergine, une bien étrange expérience.",
			 "Wingardium leviosaaAA !",
			 "Le truc, pour voler, c'est de se jeter au sol et de rater son coup.",
			 "D'après une théorie, le jour où quelqu'un découvrira exactement à quoi sert l'Univers et pourquoi il est là, ledit Univers disparaîtra sur-le-champ pour se voir remplacé par quelque chose de considérablement plus inexplicable et bizarre.",
			 "Durant un moment, il ne se produisit rien. Puis, au bout d'une seconde à peu près, il continua de ne rien se produire."];
					
