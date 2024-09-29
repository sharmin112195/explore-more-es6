const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// using map()
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p => p.price);
// console.log(prices);

// using forEach
products.forEach(p => console.log(p.id));
// const product = products.forEach(p => p.id); 
// console.log(product); (not define)

// using filter

const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

// using find
const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// using reduce
const total = products.reduce((p, c) => p + c.price, 0 );
console.log(total);


