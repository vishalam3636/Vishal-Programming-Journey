//===========================================================================//
//================================== ARRAY ==================================//
//===========================================================================//

let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

//===== extracting first value of array =====//
// console.log(chaiTypes[0]);

//======== length of array ===========//
// console.log(`Total chai types: ${chaiTypes.length}`);

//=========== adding a chai to the last of array ========//
chaiTypes.push("Herbal tea"); // adds a new value to the last of the array
// console.log(chaiTypes); // ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea", "Herbal tea"];

//============ removing chai from last of the array =========//
// console.log(chaiTypes.pop()); // removes value from last of array, returns the popped value

//============== index (location) of chai in array ==========//
let index = chaiTypes.indexOf("Green Tea"); // if no value is found, it returns -1
// console.log(index); // 2

//============ remove a chai from in between the array =========//
if (index !== -1) {
  chaiTypes.splice(index, 1);
}
// console.log(chaiTypes); // removes one value from index

//========== loop over array ==========//
chaiTypes.forEach((chai, index) => {
  //   console.log(`${index + 1}. ${chai}`);
});

//========= jodna do array ko =========//
let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);
// console.log(allChaiTypes);

let newChaiTypes = [...allChaiTypes, ...moreChaiTypes];
// console.log(newChaiTypes);

//===========================================================================//
//================================== OBJECT =================================//
//===========================================================================//
let chaiRecepie = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

//====== extracting values from object ======//
// console.log(chaiRecepie.name);
// console.log(chaiRecepie.ingredients.spices); // using dot opetator
// console.log(chaiRecepie["ingredients"]["spices"]); // using square brackets
// console.log(chaiRecepie["ingredients"]["spices"][1]);

//============= update a key of the object =========//
let updatedChaiRecepie = {
  ...chaiRecepie,
  instruction: "Boil water, add tea leaves, milk, sugar, spices with some love",
};
// console.log(updatedChaiRecepie);

//========== Destructuring Object and Array =========//
let { name, ingredients } = chaiRecepie;
let [firstChai, secondChai] = chaiTypes;

// console.log(name, ingredients);
// console.log(firstChai, secondChai);
