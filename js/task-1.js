/**
 * Represents a customer with account details and methods for managing their account.
 *
 * @property {string} username - The username of the customer.
 * @property {number} balance - The current balance in the customer's account.
 * @property {number} discount - The discount rate applicable to the customer.
 * @property {Array<string>} orders - A list of orders made by the customer.
 * @method getBalance - Retrieves the current balance of the customer's account.
 * @method getDiscount - Retrieves the current discount rate of the customer.
 * @method setDiscount - Updates the customer's discount rate.
 * @method getOrders - Retrieves the list of orders made by the customer.
 * @method addOrder - Adds a new order for the customer and updates the account balance considering the discount.
 */
const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
        return this.balance;
    },
    getDiscount() {
        return this.discount;
    },
    setDiscount(value) {
        this.discount = value;
    },
    getOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    }
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]