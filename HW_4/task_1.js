/* Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:  - единицы (в свойстве units)  - десятки (в свойстве tens)  - сотни (в свойстве hundereds) Например, для числа 45 мы должны получить следующий объект: 
 
{   units: 5, //это единицы   tens: 4,  //это десятки   hundreds: 0, //это сотни } 
 
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект*/




let nmbr = (prompt('Введите число от 0 до 999'));

if ( Number(nmbr) === true) {

    console.log(`${Number.isInteger(nmbr)} - ваше число`);
}
else {
    console.log(`${nmbr} - это не число`)
};
