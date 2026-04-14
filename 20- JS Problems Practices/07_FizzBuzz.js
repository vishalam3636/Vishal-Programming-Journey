function fizzBuzzSol(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzzSol(20);

// Sol-2:
function fizzBuzzSol(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    result.push(output || i);
  }

  return result;
}

console.log(fizzBuzzSol(20));
