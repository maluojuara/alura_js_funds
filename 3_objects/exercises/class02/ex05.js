// 05. Create an object called "bankAccount" with the following properties:

// holder: a string representing the account holder.
// balance: a number representing the account balance.
// deposit: a function that accepts a value as a parameter and adds that value to the account balance. Use "this" to access the balance property.
// withdraw: a function that accepts a value as a parameter and subtracts that value from the account balance. Use "this" to access the balance property. Make sure to check if there is enough balance before making the withdrawal.

const bankAccount = {
    holder: 'Maria',
    balance: 452.50,
    deposit: function (value) {this.balance += value},
    withdraw: function (value) {
        value < this.balance ? (this.balance -= value) : console.log("Not enough money to do the operation");
    }
}

// Create an object called "client" that represents a customer with a bank account. The object should have the following properties:

// name: a string representing the customer's name.
// account: a reference to the bank account associated with this customer (object created earlier).

// Create a function called "showBalance" that accepts the "client" object as a parameter and prints to the console the client's name and the balance of their account using "this" to access the object's properties.

const client = {
    name: 'Maria',
    account: bankAccount,
}

function showBalance(client) {
    console.log(`The balance of ${client.name}'s account is ${client.account.balance}`);
}

showBalance(client);

// Perform deposit and withdrawal operations on the customer's bank account using the functions of the "bankAccount" object, and then call the function to display the updated information in the console.

client.account.deposit(500);
showBalance(client);

client.account.withdraw(100);
showBalance(client);

client.account.withdraw(7800);
showBalance(client);
