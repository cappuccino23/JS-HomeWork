/* Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат. 
Обязательно использовать оператор return. */

'use strict';

    function dlt(a, b) {
        let del;
        del = a / b;
        return del; 
    }

    function sum(a, b) {
        let summ;
        summ = a + b;
        return summ; 
    }

    function diff(a, b) {
        let dff;
        dff = a - b;
        return dff; 
    }


    function mult(a, b) {
        let mlt;
        mlt = a * b;
        return mlt; 
    }


    let a = Number(prompt("Введите первое число: "));
    let b = Number(prompt("Введите второе число: "));
    let oper = prompt("Введите знак операции: ");

    if (oper === '/')
        
        if (b != 0) 
            console.log('Результат деления: ' + dlt(a, b)); 
        else
            alert('Делить на ноль нельзя!');
  

    else if (oper === '*') 
        {
         console.log('Результат суммы: ' + mult(a, b));
        }

    else if (oper === '+') 
        {
            console.log('Результат сложения: ' + sum(a, b));
        }

    else if (oper === '-') 
        {
            console.log('Результат разности: ' + diff(a, b));
        }

    else 
        alert ('Вы ввели некорректную операцию');
        