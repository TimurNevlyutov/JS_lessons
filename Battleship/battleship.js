//объявление переменных
	var location1=3, location2=4, location3=5;
	var guess; // номер текущей попытки
	var hits=0; // попадания
	var guesses=0; //количество попыток
	var isSunk=false; //потоплен или нет
	console.log(location1, location2, location3);
	// random
	// основной цикл
	while (isSunk!=true){
		guess= +prompt('введите координату для выстрела (0-6): ');
		if (guess<0 || guess>6){
			alert('введите правильное число');
		} else {
			++guesses;
		if (guess == location1 || guess == location2 || guess == location3){
			++hits;
			alert('Попадание!');
				}
	}
		if (hits==3){
					isSunk=true;
					alert('Корабль потоплен!');
	}
}