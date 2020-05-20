/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от 
переданного значения операции (использовать switch) выполнить одну из арифметических операций 
(использовать функции из задания 4) и вернуть полученное значение. 
 */

'use strict';

    function dlt(a, b) {
        if (b != 0)
            let del = a / b;
        else
            alert('Делить на ноль нельзя!');   
        return del; 
    }

    function sum(a, b) {
        let summ = a + b;
        return summ; 
    }

    function diff(a, b) {
        let dff = a - b;
        return dff; 
    }

    function mult(a, b) {
        let mlt = a * b;
        return mlt; 
    }

    function choise_oper(a, b, oper) {
        
        switch(oper) {
            case "*":
                console.log("Результат умножения: " + mult(a, b));
                break;
            case "+":
                console.log("Результат сложения:" + sum(a, b));
                break;
            case "-":
                console.log("Результат вычитания:" + diff(a, b));
                break;
            case "/":
                console.log("Результат деления"+ dlt(a, b));
                break;
            default:
                console.log("некорректно введен знак");
    }
}
 
let a = Number(prompt("Введите первое число: "));
let b = Number(prompt("Введите второе число: "));
let oper = prompt("Введите знак операции: ");

let result_operation = choise_oper(a, b, oper);