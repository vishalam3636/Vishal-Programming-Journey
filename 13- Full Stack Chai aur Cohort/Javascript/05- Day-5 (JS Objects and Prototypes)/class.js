class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

const person1 = new Person("Vishal", "Chauhan");
const person2 = new Person("Sukanya", "Chauhan");

class Car {
  constructor(name, color) {
    this.carname = name;
    this.carcolor = color;
  }
}
const car1 = new Car("Honda city", "Red");
console.log(car1, ">>>car1");
