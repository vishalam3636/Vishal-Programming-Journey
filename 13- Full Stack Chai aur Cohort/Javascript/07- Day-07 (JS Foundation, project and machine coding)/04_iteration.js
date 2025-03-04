let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphone", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((total, curr) => {
  total = total + curr.price;
  return total;
}, 0);

// console.log(totalSales);

/////////////////////////////////////////////
let inventory = [
  { name: "widget A", stock: 30 },
  { name: "widget B", stock: 120 },
  { name: "widget C", stock: 45 },
  { name: "widget D", stock: 70 },
];

// items < 50 is low stock
let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

////////////////////////////////////////////////
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];

// find most active user
let mostActiveUser = userActivity.reduce((maxUser, user) => {
  return maxUser.activityCount > user.activityCount ? maxUser : user;
});
console.log(mostActiveUser);
