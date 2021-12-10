"use strict";
class Customer {
    constructor(name) {
        this.name = name;
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
