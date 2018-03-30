var event, ok, i=1, correct=0;

do {
    ok = false;
    var masElement=i-1;                     //позиция объекта в массиве
       event = +prompt('Ставка: '+winAmount['q'+i]+
        '\nВопрос №'+i+'\n'+question[masElement].a00+'\n'+question[masElement].a1+
        '\n'+question[masElement].a2+'\n'+question[masElement].a3+'\n'+question[masElement].a4+
        '\nЧтобы прекратить игру введите (-1)');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(question[masElement].a0, event);
    }
   i++; 
} while (ok && i<=10);
    if (correct==10){
        alert('Поздравляем, вы МИЛЛИОНЕР!');
    }
    else if (correct>=5){
        alert('Поздравляем, вы выиграли 50 000 рублей');  
    }
    else
        alert('До новых встреч!')
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
       i--;
        return true;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        i--;
        return true;
    }
    else if (correctAnswer(event)==true){;
         return true;
    }
    else
        return false;
//------------------------------------------проверка правильного ответа
function correctAnswer(event){
    if (event==question[masElement].aa){
        alert('Это правильный ответ!!!');
        correct++;
        return true;
    }
    else {
        alert('Нет, ответ не верен!!! Вы проиграли!!!');
        return false;
    }
}
}