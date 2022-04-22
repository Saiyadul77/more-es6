const number = [12, 7, 8, 20, 35, 60, 42, 10];
const biggestNumber = number.filter(numbers => numbers > 20);
// console.log(biggestNumber);
const smallestNumber = number.filter(numbers => numbers < 20);
// console.log(smallestNumber);

const item = [
    { name: 'samsung', price: '20000', color: 'white' },
    { name: 'walton', price: '15000', color: 'black' },
    { name: 'infinix', price: '21500', color: 'tomato' },
    { name: 'oppo', price: '10000', color: 'red' },
    { name: 'hawai', price: '12000', color: 'black' }
]
const items = item.filter(product => product.name == 'samsung');
// console.log(items)
const productColor = item.filter(product => product.price > 15000);
// console.log(productColor);
const phoneColor = item.filter(product => product.color == 'black');
// console.log(phoneColor);
const productColors = item.find(product => product.color == 'black');
console.log(productColors);