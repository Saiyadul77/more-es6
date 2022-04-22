const fish = { id: 50, name: 'king hilsha', price: 9000, phone: '01911870358', address: 'silver' }

// const phone = fish.phone;
// const { phone, price, id, address } = fish;
// console.log(phone, price);
// console.log(phone);
// console.log(phone, id);
// console.log(phone);
// console.log(phone, address);
// console.log(phone);

const company = {
    post: {
        rank: 'manager', salary: 100000, name: 'Sayed', dapartment: {
            production: 's&s'
        }
    }
}
const { salary, name } = company.post
console.log(salary, name);