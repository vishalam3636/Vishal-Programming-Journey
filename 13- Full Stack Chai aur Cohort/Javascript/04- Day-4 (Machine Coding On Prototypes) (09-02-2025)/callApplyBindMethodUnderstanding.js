////////////////////////////////////////////////////////////////
////////////// PLAY WITH CALL, APPLY and BIND //////////////////
////////////////////////////////////////////////////////////////

/**
 * Call , apply and bind method are available in Object.prototype and is for Functions and not applicable on "", [] or {}
 */

/**
 * 📔📔 Call Method 📔📔
 *            👉🏼 call method kehta hai ki kisi bhi object pe agr koi function chlana hai to us function ko call method ke saath chala kar object pass kr denge. Jisse "this" will start refereing to that object.
 *            👉🏼 Ye tab kaam aata hai when we have multiple objects and har objects ka same structure hai and we have a common function jo hume har object pe chlana hai.
 *            👉🏼 We can also use call method on any function which is inside any object
 */

let objCall1 = {
  name: "Vishal",
  age: 29,
  city: "Pune",
  state: "Maharashtra",
};

let objCall2 = {
  name: "Ganesh Ji",
  age: 0,
  city: "Kailash",
  state: "Uttrakhand",
  stateDetail() {
    return `${this.name} is from ${this.state} State. `;
  },
};

function userDetailString() {
  return `${this.name} is ${this.age} years old and is from ${this.city} city`;
}

// call method if functiion is alg se bana hua
let detailCallStr1 = userDetailString.call(objCall1);
// console.log(detailCallStr1);
let detailCallStr2 = userDetailString.call(objCall2);
// console.log(detailCallStr2);

// call method if function is inside an object and we want to use that function on some other object
let stateDetStr1 = objCall2.stateDetail();
// console.log(stateDetStr1);
let stateDetStr2 = objCall2.stateDetail.call(objCall1);
// console.log(stateDetStr2);

// Passing arguments in call method
let objArgCall1 = {
  name: "Bhole Nath",
};

let objArgCall2 = {
  name: "Shri Krishna",
};

function userDetailArg(city, state) {
  return `${this.name} is from ${city} city which is in ${state} .`;
}

let userArgDetailStr1 = userDetailArg.call(
  objArgCall1,
  "Kailash",
  "Uttrakhand"
);
// console.log(userArgDetailStr1);
let userArgDetailStr2 = userDetailArg.call(
  objArgCall2,
  "Gokul",
  "Uttar Pradesh"
);
// console.log(userArgDetailStr2);

/**
 * 📔📔 Apply Method 📔📔
 *              👉🏼 Apply Method is same as Call, but the only difference is in how the arguments are accepted.
 *              👉🏼 In Apply method Arguments are accepted in an array.
 */

let objApply1 = {
  name: "Krishna",
  favDish: "Maakhan",
};

let objApply2 = {
  name: "Shri Ganesh",
  favDish: "Modak",
};

function dishDetail() {
  return `${this.name} fav dish is ${this.favDish}.`;
}

// apply method without args (is same as Call method)
let dishDetailApplyStr1 = dishDetail.apply(objApply1);
// console.log(dishDetailApplyStr1);
let dishDetailApplyStr2 = dishDetail.apply(objApply2);
// console.log(dishDetailApplyStr2);

// apply method with args (in apply method args are taken in an array)
let objApplyArg1 = {
  name: "Krishna",
};

let objApplyArg2 = {
  name: "Shri Ganesh",
};

function userDetailApplyArg(...args) {
  const [dish, city] = args;
  return `${this.name} fav dish is ${dish} and belongs to ${city}.`;
}

let userDetailArgApplyStr1 = userDetailApplyArg.apply(objApplyArg1, [
  "Maakhan",
  "Gokul",
]);
// console.log(userDetailArgApplyStr1);
let userDetailArgApplyStr2 = userDetailApplyArg.apply(objApplyArg2, [
  "Modak",
  "Kailash",
]);
// console.log(userDetailArgApplyStr2);

/**
 * 📔📔 Bind Method 📔📔
 *              👉🏼 Bind method is different compared to Call and Apply which are almost similar
 *              👉🏼 Bind method returns a function which when gets called the final result.
 *              👉🏼 So, we need to call the function to get the final result.
 */

let objBind1 = {
  name: "Bholenath",
  chant: "Mahamrityunjay Mantra",
};

let objBind2 = {
  name: "Shri Ganesh",
  chant: "Vakratunda Ganesha Mantra",
};

function chantDetail() {
  return `${this.name} chant is ${this.chant}`;
}

let chantDetailStr1 = chantDetail.bind(objBind1);
chantDetailStr1FuncCalled = chantDetailStr1();
// console.log(chantDetailStr1FuncCalled);

let chantDetailStr2 = chantDetail.bind(objBind2);
chantDetailStr2FuncCalled = chantDetailStr2();
// console.log(chantDetailStr2FuncCalled);

// with arguments
let objBindArg1 = {
  name: "Bholenath",
};

let objBindArg2 = {
  name: "Shri Ganesh",
};

function chantDetailArg(...arg) {
  const [chant, city] = arg;
  return `${this.name} chant is ${chant} and is from ${city}`;
}

let chantDetailStrArg1 = chantDetailArg.bind(
  objBind1,
  "Mahamrityunjay Mantra",
  "Kailash"
);
let chantDetailStr1BindFuncCalled = chantDetailStrArg1();
console.log(chantDetailStr1BindFuncCalled);

let chantDetailStrArg2 = chantDetailArg.bind(
  objBind2,
  "Vakratunda ganesha mantra",
  "Kailash"
);
let chantDetailStr2BindFuncCalled = chantDetailStrArg2();
console.log(chantDetailStr2BindFuncCalled);
