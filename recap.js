//1. unsig let and const
const hubby = 'Sayed';
// hubby = 'saiyadul';
// console.log(hubby)
let phone = 'iPhone 15';
phone = 'infinix';
// console.log(phone);

//2. arrow function
const num = (num1, num2) => num1 + num2;
const value = num(5, 6);
// console.log(value)

//3 tamplate string
const name = 'Saiyadul Amin Akhand';
const qualification = 'Bsc in CSE, MBA(HRM)';
const document = `My name is ${name}. I have completed my graduation and post graduation which is ${qualification}`;
// console.log(document)

// 4. Spread operation
const number = [55, 46, 10, 85, 9, 60, 32, 52, 45, 700, 100];
const max = Math.max(...number);
const min = Math.min(...number);
console.log(max)
console.log(min);

//5. more arrow function
const num1 = (x, y) => {
    const add = x + y;
    const num2 = x - y;
    const sum = add * num2;
    return sum;
}
const input = num1(10, 5);
console.log(input)
