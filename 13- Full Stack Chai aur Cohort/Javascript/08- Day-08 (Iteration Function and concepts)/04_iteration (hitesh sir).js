///////////////////////////////////////////////////////////////////
// Task-1
///////////////////////////////////////////////////////////////////
let expenses = [
  { description: "Grocerines", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
  { description: "Train", amount: 500, category: "Travel" },
];

// Sol-1
let expenseReport = expenses.reduce((report, currExp) => {
  return {
    ...report,
    [`${currExp.category}`]: report[`${currExp.category}`]
      ? report[`${currExp.category}`] + currExp.amount
      : currExp.amount,
  };
}, {});
// console.log(expenseReport);

// Sol-2
let expenseReport2 = expenses.reduce((report, currExp) => {
  if (report[currExp.category]) {
    report[currExp.category] = report[currExp.category] + currExp.amount;
  } else {
    report[currExp.category] = currExp.amount;
  }

  return report;
}, {});
// console.log(expenseReport2);

///////////////////////////////////////////////////////////////////////
// Task-2 (return list of pending tasks sorted according to priority)
///////////////////////////////////////////////////////////////////////
let tasks = [
  { description: "Write Report", completed: false, priority: 2 },
  { description: "Send Email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTask = tasks
  .filter((obj) => {
    return !obj.completed;
  })
  .sort((a, b) => a.priority - b.priority);
console.log(pendingSortedTask);

// Movie Ratings
let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageMovieRatings = movieRatings.map((movieRates) => {
  let avgRate = (
    movieRates.ratings.reduce((acc, curr) => acc + curr) /
    movieRates.ratings.length
  ).toFixed(1);
  return { ...movieRates, averageRating: avgRate };
});
console.log(averageMovieRatings);
