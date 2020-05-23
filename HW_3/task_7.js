/*Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5: 
x
xx 
xxx 
xxxx 
xxxxx */

function repeat(s, n){
    let mssv = [];
    while(mssv.length < n){
        mssv.push(s);
    }
    return mssv.join('');
}

let k = 25;
let s = 'x';

for (let n = 1; n <= k; n++)
    console.log(repeat(s, n))