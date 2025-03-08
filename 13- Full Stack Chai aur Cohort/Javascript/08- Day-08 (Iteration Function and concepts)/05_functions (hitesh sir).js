function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Vishal");
greet("Swaha");

let globalVar = "I am global !!";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockedScopeVar = "I am blocked-scope";
  console.log("Blocked scope !!");
}

modifyGlobal();
// console.log(globalVar);

/////////////////////////////////////////////////
// IIFE
let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

/////////////////////////////////////////////////////
let person1 = {
  name: "vishal",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

person1.greet();

let person2 = {
  name: "Shiv",
};

person1.greet.call(person2);
person1.greet.apply(person2);
let greetPerson2 = person1.greet.bind(person2);
greetPerson2();
