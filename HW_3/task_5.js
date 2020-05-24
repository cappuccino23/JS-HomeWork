/*Перед вами находится массив с продуктами в интернет-магазине. 
Вам нужно: 
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT 
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ, 
как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 

products[n].photos.length > 0
        
        */
 
const products = [     
    {         
        id: 3,         
        price: 127,         
        photos: [             
            "1.jpg",             
            "2.jpg",         
        ]     
    },    
    {         
        id: 5,         
        price: 499,         
        photos: []     
    },     
    {         
        id: 10,         
        price: 26,         
        photos: [             
            "3.jpg"         
        ]     
    },     
    {        
        id: 8,         
        price: 78, 
    }, 
];

// метод filter

let products2 = products.filter(item => "photos" in item && item.photos.length > 0);
console.log(products2);

//метод for

for (let n = 0; n <= products.length; n++) {
    
    if (products.find(item => item.photos !== -1))

        if (products[n].photos !=0)
            console.log(products[n]);

    else
        continue;
}

// сортируем массив обьектов с методом sort 
products.sort(function(a,b) {
     return a.price - b.price;
 });
 console.log(products);
