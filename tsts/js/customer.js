class Customer {
    constructor(name) {
        this.name = name;
        // this.isActive = true;
    }
    announce() {
        return "Customer class with name=" + this.name;
    }
}
let firstCustomer = new Customer("Alice");
let secondCustomer = new Customer("Bob");
let newMessage = firstCustomer.announce();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
class SpecialCustomer extends Customer {
    announce() {
        return "This is special VIP customer with name=" + this.name;
    }
}
export default Customer;
