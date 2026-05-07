// Promises area used to handle Async operation in JS
// Before async and after async
/*
const cart = ["shoes", "pants", "Kurta"];

createorder(cart); // create order and give orderId
proceedTopayment(orderId);
*/
// Both are asynchronous and they are dependent on each other
// handlong this kind of situation using callback
// now its the responsibility of createOrder api (some other API) to call the proceedToPaynment function
// but now the issue is Inversion of control, what if it may never called? we cant trust it.
// Its not reliable
/*
createorder(cart, function () {
  proceedTopayment(orderId);
});
*/
// how we can handle this kind of situation using promises
/*
const promise = createOrder(cart);
*/
// this createOrder returns a promise, promise is nothing but an empty object with data value in it, and this data value will hold what this createOrder api has returned
// {data: undefined}
// as soon as it is executes, it returns some data.
// after few time, it will create an order and fill the details at some later point of time
// {data: orderDetails}
// once we have the orderDetails what will do next?
// Now we'll attach a callback function to this promise object
// promise.then(function(orderId){
//    proceedTopayment(orderId);
// })

// now the function which we have attached to the  promise object will be automatically called
// this is how we write code in world of promise
// it may seem complicated as compare to callback...but its alot better than the callback
// how???
// earlier we passed this function as callback and blindly trusting that at some later point of time it will be get called. But now we are attaching a callback function to a promise object.
//  Theres a difference between passing a function and attaching a function ⭐
// Now what good is once we have the returned data from the first api, then we are automatically the srcomd api, so its use who are handling the api call now, not blind someone else to call it at later point of tim, which may or maynot called.
// Promises gives us this trust
// We have control of our programme with us

// Real example
const GITHUB_API = "https://api.github.com/users/vishalam3636";
const user = fetch(GITHUB_API);
// user is the promise object, fetch returns us a promise object
console.log(user); // Promise {<pending>}
// this is promise object-
/*
 * Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response
 */

// states of promise- state of a promise and the result of the promjse
// result: the data which is returned by the fetch, this will store inside the promise result
// state: state of the promise, "Pending" or "fulfilled"
// Now what if we have some callback attached to this peromise object
/**
user.then(function (res) {
  console.log(res);
});

Response {type: 'cors', url: 'https://api.github.com/users/vishalam3636',
body: (...),
bodyUsed: false,
headers: Headers {},
ok: true,
redirected: false,
status: 200,
statusText: "",
type: "cors",
url: "https://api.github.com/users/vishalam3636",
[[Prototype]]: Response
}
 */

user
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });

/**
 * Response data: {login: 'vishalam3636', id: 106670723, node_id: 'U_kgDOBluqgw', avatar_url: 'https://avatars.githubusercontent.com/u/106670723?v=4', gravatar_id: '', …}
 */

// Three states of promise: pending, fullfilled and rejected
// Promise objects are immutable, that is one cant do user.something something to change data

/*
 Interview Questions:
What is a promise?
=> A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.

What are the states of a promise?
=> A promise can be in one of three states: pending, fulfilled, or rejected. Pending means the promise is still in progress, fulfilled means the operation completed successfully, and rejected means the operation failed.
*/
/**
Advantages of Promises:
1. Improved Readability: Promises provide a cleaner and more readable syntax compared to callbacks, especially when dealing with multiple asynchronous operations. They help avoid callback hell and make the code easier to understand.
2. Better Error Handling: Promises provide a more structured way to handle errors compared to callbacks. Errors can be caught and handled in a centralized manner using the `.catch()` method.
3. Chaining: Promises allow for easy chaining of asynchronous operations, making the code more readable and maintainable.
*/

// H.W
/*
what is a promise?
why do we need promises?
what are the states of a promise?
*/

/**
 * Promise is an object which represents eventual completion of an Asynchronous operation
 * We need it to make asynchronous operations, callbacks can also be used, but there are drawbacks of using callbacks, - Callback hell and inversion of control
 */
