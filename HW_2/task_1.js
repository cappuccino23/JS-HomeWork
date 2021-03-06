let a = 1, b = 1, c, d;

c = ++a; //ответ - 2, так как префиксный ++ увеличивает значение, т.е. 1+1 = 2

d = b++; //Ответ - 1, постфиксная возвращает старое значение до увеличения.

c = 2 + ++a; 
alert(c); // 5 Так как 2 + 3, так как в переменной а записано 2, т.е.  2 + (2 + 1)

d = 2 + b++; 
alert(d); // 4 так как в переменной b записана 1, т.е. d = 2 + 2

alert(a); //3  при последнем вызове переменной а, в нее было записано число 3
alert(b); //3  при последнем вызове переменной b, в нее было записано число 2 и добавлена 1, т.е. стало 3