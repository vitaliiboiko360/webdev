var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.announce = function () {
        return "Customer class with name=" + this.name;
    };
    return Customer;
}());
var firstCustomer = new Customer("Alice");
var secondCustomer = new Customer("Bob");
var newMessage = firstCustomer.announce();
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
