let numberOfGuest = 4;

let pizzaSize;

// small- <= 2
// medium- <=5
// large- >5

if (numberOfGuest <= 2) {
  pizzaSize = "Small";
} else if (numberOfGuest <= 5) {
  pizzaSize = "Medium";
} else {
  pizzaSize = "Large";
}

console.log(pizzaSize);
