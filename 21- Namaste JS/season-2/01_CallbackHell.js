// Here we'll learn Good part of callback and bad part of callback

/**
 * Bad Part: Call back hell and Inversion Of Control
 * 1. Callback Hell: It is a situation where we have multiple nested callbacks, making the code difficult to read and maintain.
 * 2. Inversion Of Control: It is a situation where we have to give control of our code to someone else. In case of callbacks, we have to give control of our code to the callback function, which can lead to unexpected behavior and bugs.
 */

// JS is synchronous
/*
console.log("Namaste");

console.log("JS");

console.log("Season-2");
*/

// We can make is Async using callback
/*
console.log("Namaste");

// we can take a piece of code and pass it in setTimout and execute later
setTimeout(() => {
  console.log("JS");
}, 5000);

console.log("Season-2");
*/

// Example of cart
const cart = ["shoes", "pants", "kurta"];

// api to create order and another api to proceed to payment,
// first we need to create an order and then only we can proceed to payment
// so dependecy hai

api.createOrder();
api.proceedToPayment();

// so we can do it by passing the proceeed to payment as a function side createOrder
// now its the responsibility of createOrder to first create the order and then call the callback function
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// now we have another API showOrderSummary, which will call after the payment is done
// so again we'll pass this function inside the proceedTopayment, and now its proceedTopayment responsibility to complete the payment and call the showOrderSummary
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});

// and now if we want to update the wallet, the wallet will be updated only after we show the orderSummary
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// now here the problem is... the callback hell...!!
// Its unreadable and unmaintainable
// Structure is know as pyramid of doom

// here comes the "Inversion of Control" concept, its another problem which occcurs when we are using callback
// api.proceedToPayment() is an important function and we dont have power to call it, whhat if this callback functrion gets never called, we are blindaly trusting it
api.createOrder(cart, function () {
  api.proceedToPayment();
});
