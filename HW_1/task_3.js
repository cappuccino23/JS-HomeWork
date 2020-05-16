/* Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению: 
10 + 10 + "10" 
10 + "10" + 10 
10 + 10 + +"10" 
10 / -"" 
10 / +"2,5" */


'use strict';
let a1 = null;
let a2 = null;
let a3 = null;
let a4 = null;
let a5 = null;

a1 = 10 + 10 + "10"; 
/* Вывод = 2010, так как последовательно произошло сложение двух чисел, потом неявное приведение к строке и последующая конкатенация строк*/
a2 = 10 + "10" + 10;  
/*Вывод = 101010, так как последовательно произошло приведение числа к строковому значению, последующая конкатенация и с третьим числом так же - преобразование к строковому типу и конкатенация строк*/
a3 = 10 + 10 + +"10"; 
/*Вывод = 30, так как последовательно произошло сложение двух чисел, */
a4 = 10 / -"" ;
/*Вывод: -Infinity, так как произошло неявное приведение к числу 0.0, а деление на -0.0*/
a5 = 10 / +"2,5";
/*Вывод: NaN, т.е. не определено, так как число на строку не делится (т.е. неявного преобразования к числу не произошло)*/

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);