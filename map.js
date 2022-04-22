/* declare variable
const numbers = [10, 20, 25, 30, 35, 40];
const output = [];
for (const number of numbers) {
    const result = number * 2;
    output.push(result);
}
console.log(output); */

// using function
/* const numbers = [2, 4, 5, 6, 7, 8, 9, 10];
const output = [];
function doubleIt(number) {
    return number * 2;
}
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output); */

// using arrow function
/* const numbers = [3, 6, 9, 1, 4, 5, 8, 9];
const output = [];
const result = number => number * 2;

for (const number of numbers) {
    const value = result(number);
    output.push(value);
}
console.log(output) */

// using map (it is easy)

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleIt = number2 => number2 * 2;
const output1 = numbers.map(doubleIt)
console.log(output1); */

// without declaration only direct using map
/* const num = [5, 10, 15, 20, 25, 30, 35];
const output = num.map(number => number * 2);
console.log(output); */

// using direct map 
const num = [2, 4, 6, 8, 10];
const squares = num.map(x => x * x);
console.log(squares);