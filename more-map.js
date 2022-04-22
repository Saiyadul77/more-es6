const products = ['samsung', 'infinix', 'hawai', 'oppo']
const pLengths = products.map(x => x.length);
// console.log(pLengths);
const product = products.forEach(x => x.length); //never return
// console.log(product);

const item = [
    { name: 'samsung', price: '20000', color: 'white' },
    { name: 'walton', price: '15000', color: 'black' },
    { name: 'infinix', price: '21500', color: 'tomato' },
    { name: 'oppo', price: '10000', color: 'red' },
    { name: 'hawai', price: '12000', color: 'gray' }
]
const result = item.map(x => x.name);
// item.map(x => console.log(item))
// console.log(result);
item.map(items => console.log(items))// items must be same