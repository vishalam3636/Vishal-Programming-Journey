Object.prototype.chai = function () {
  console.log("Hellooo !!! Chaaaaiii !!");
};

const tea = {
  name: "Icea tea lemon",
  type: "Cool",
};
tea.chai();

const myteas = ["Orange tea", "Lemon tea"];
myteas.chai();

//////////////////////////////////////////////////////////////////////////////
// Extra Fun (my work, making itw work just for Object and not for array)
//////////////////////////////////////////////////////////////////////////////
Object.prototype.vishalFunFunc = function () {
  if (Array.isArray(this)) {
    throw new Error("VishalFunFunc is not available for arrays !!");
  }
  console.log("Funnnn with jsss.... custom function for Object !!");
};

const teaGuru = {
  name: "Hitesh CVhaudhary",
  profession: "Software enginerr and A Great Teacher !!",
};
teaGuru.vishalFunFunc(); // WORKS

let bestInstructors = ["Abhishek Ravindran", "Hitesh Sir"];
bestInstructors.vishalFunFunc(); // Throws Error
