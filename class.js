class Support {
    name;
    address = 'bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const name = new Support('Saiyadul Amin Akhand', 'china');
name.startSession();
console.log(name);