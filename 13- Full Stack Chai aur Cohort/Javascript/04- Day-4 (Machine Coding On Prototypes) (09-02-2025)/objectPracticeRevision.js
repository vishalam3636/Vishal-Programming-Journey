// Problem: Create an Object representing a type of tea with properties for name, type, and caffeine content
const teas = {
  name: "Lemon Tea",
  type: "Green tea",
  caffine: "low",
};

// Problem: Access and print the name and type properties of the tea object
const teaName = teas.name;
const teaType = teas["type"];
console.log(teaName, teaType);

// Problem: Add a new property origin to the tea object
teas.origin = "Assam";
console.log(teas);

// Problem: Change the caffeine level of the tea object to "Medium"
teas["caffine"] = "Medium";
console.log(teas);

// Problem: Remove the type property from the tea object
delete teas.type;
console.log(teas);

// Problem: Check if the tea object has the property origin
console.log("origin" in teas);

// Problem: Use a for...in loop to print all propeties of the tea object
for (let elem in teas) {
  console.log(teas[elem]);
}

// Problem: Create a nested object representing different types of teas and their properties.
const myTeas = {
  greenTea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Tea",
  },
};

// Problem: Create a copy of the tea object
const teaCopy = JSON.stringify(teas);
const parseTeaCopy = JSON.parse(teaCopy);
console.log(parseTeaCopy);

parseTeaCopy.origin = "Meghalaya";
console.log(teas);
console.log(parseTeaCopy);

// Problem: Add a custom method describe to the tea object that returns a description string.
teas.describe = function () {
  console.log(
    `${this.name}  is originated in ${this.origin} and caffine level is ${this.caffine}`
  );
};
teas.describe();

// Problem: Merge two objects representing different teas into one
let tea1 = {
  name: "Black tea",
  type: "Hot",
};

let tea2 = {
  name: "Lemon Tea",
};

const combinedTeas = Object.assign({}, tea1, tea2);
console.log(combinedTeas, ">>>>combinedTeas");

const combinedTeas2 = { ...tea1, ...tea2 };
console.log(combinedTeas2, ">>combinedTeas2");
