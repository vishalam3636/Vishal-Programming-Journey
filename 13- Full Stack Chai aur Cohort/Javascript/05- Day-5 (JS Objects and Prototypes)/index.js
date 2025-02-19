const obj1 = {
  fname: "Vishal",
  lname: "Chauhan",
  getFullname: function () {
    if (!this.lname) return `${this.fname} ${this.lname}`;
    return this.fname;
  },
};

const obj2 = {
  fname: "Sukanya",
  lname: "Chauhan",
  getFullname: function () {
    if (!this.lname) return `${this.fname} ${this.lname}`;
    return this.fname;
  },
};

console.log(obj1.getFullname());
