/*Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий). 
let */

let a = 2;
let x = 1 + (a *= 2);  // в скобках происходит удвоение переменной a, затем к ней прибавляется 1

alert (a); // ответ - 4
alert (x); // ответ - 5