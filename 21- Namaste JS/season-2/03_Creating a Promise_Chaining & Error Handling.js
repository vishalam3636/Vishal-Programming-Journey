const cart = ["shoes", "pants", "kurta"];

/*
// Demo Flow

const promise = createOrder(cart);

promise.then(function () {
  proceedToPayment(orderId);
});
*/

// Now making the flow which we have made above
/*
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order logic
    // validate cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    } else {
      // logic for creating order
      const orderId = "12345";
      if (orderId) {
        setTimeout(() => {
          resolve(orderId);
        }, 5000);
      }
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

let promise = createOrder(cart);
promise
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err.message);
  });
*/

// Promise Chaining
/*
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order logic
    // validate cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    } else {
      // logic for creating order
      const orderId = "12345";
      if (orderId) {
        setTimeout(() => {
          resolve(orderId);
        }, 5000);
      }
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

let promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("payment Info");
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("No matter what happens, i will definetly be called");
  });
*/

// My Practice Promise Chaining
/**
    👉🏼 Flow (Each step depends on previous)
    👉🏼 createOrder(cart) → returns orderId
    👉🏼 proceedToPayment(orderId) → returns paymentInfo
    👉🏼 showOrderSummary(paymentInfo) → returns summary
    👉🏼 updateWallet(summary) → returns walletBalance
*/

/*
let cartItem = ["shoes", "shirt", "kurta"];

// Validations
function validateCart(cartItem) {
  return true;
}

function validatePayment(orderId) {
  return true;
}

// Promises

function createOrder(cartItem) {
  return new Promise((resolve, reject) => {
    // Logic to validate cart item
    if (!validateCart(cartItem)) {
      const err = new Error("Invalid cart item");
      reject(err);
    } else {
      resolve(12345);
    }
  });
}

function proceedToPayment(orderid) {
  // Payment logic
  return new Promise(function (resolve, reject) {
    if (!validatePayment(orderid)) {
      let err = new Error("Error making payment");
      reject(err);
    } else {
      resolve({
        success: true,
        transactionId: "6767676767",
        userName: "vishal",
        orderId: orderid,
        amount: 500,
      });
    }
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve({
      cartItem: cartItem,
      ...paymentInfo,
    });
  });
}

function updateWallet(summary) {
  return new Promise(function (resolve, reject) {
    resolve(300);
  });
}

createOrder(cartItem)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summary) {
    return updateWallet(summary);
  })
  .then(function (balance) {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });
*/

//=============== Retry Promise =====================//
/*
let cartItem = ["shoes", "shirt", "kurta"];

// Validations
function validateCart(cartItem) {
  return true;
}

function validatePayment(orderId) {
  return false;
}

function retryPromise(fn, retries) {
  return fn().catch((err) => {
    if (retries === 0) {
      throw err;
    }
    console.log(`Retrying... attempts left: ${retries}`);
    return retryPromise(fn, retries - 1);
  });
}

// Promises

function createOrder(cartItem) {
  return new Promise((resolve, reject) => {
    // Logic to validate cart item
    if (!validateCart(cartItem)) {
      const err = new Error("Invalid cart item");
      reject(err);
    } else {
      resolve(12345);
    }
  });
}

function proceedToPayment(orderid) {
  // Payment logic
  return new Promise(function (resolve, reject) {
    if (!validatePayment(orderid)) {
      let err = new Error("Error making payment");
      reject(err);
    } else {
      resolve({
        success: true,
        transactionId: "6767676767",
        userName: "vishal",
        orderId: orderid,
        amount: 500,
      });
    }
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve({
      cartItem: cartItem,
      ...paymentInfo,
    });
  });
}

function updateWallet(summary) {
  return new Promise(function (resolve, reject) {
    resolve(300);
  });
}

createOrder(cartItem)
  .then(function (orderId) {
    // return proceedToPayment(orderId);
    return retryPromise(() => proceedToPayment(orderId), 2);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summary) {
    return updateWallet(summary);
  })
  .then(function (balance) {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });
*/

//============ Simulation of promise using setTimeout and Retry Promise ======//

/**
    👉🏼 Flow (Each step depends on previous)
    👉🏼 createOrder(cart) → returns orderId
    👉🏼 proceedToPayment(orderId) → returns paymentInfo
    👉🏼 showOrderSummary(paymentInfo) → returns summary
    👉🏼 updateWallet(summary) → returns walletBalance
*/

let cartItem = ["shoes", "shirt", "kurta"];

// Validations

// Promises

// Promise Chaining
function createOrder(cart) {}

function proceedToPayment(orderId) {}

function showOrderSummary(paymentInfo) {}
