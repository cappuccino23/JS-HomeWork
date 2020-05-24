/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, 
можете использовать метод forEach https://mzl.la/1AOMMWX : */


 
const products = [             
    {                 
        id: 3,                 
        price: 200,             
    },             
    {                 
        id: 4,                 
        price: 900,             
    },             
    {                 
        id: 1,                 
        price: 1000,             
    },         
]; 

// через метод forEach
function iterate(item) {
    console.log(item.price - (item.price * 0.15));
  }

products.forEach(iterate);

// второй способ через for
for (let n = 0; n <= products.length - 1; n++){
    console.log(products[n].price - (products[n].price * 0.15));
}
