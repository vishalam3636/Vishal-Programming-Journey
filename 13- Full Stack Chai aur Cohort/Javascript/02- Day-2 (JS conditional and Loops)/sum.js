let myArray = [1, 2, 3, 4, 5];

function sumFac(numbers) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
  }

  return sum;
}

let result = sumFac(myArray);
console.log(result);

let anotherResult = sumFac([3, 3, 2, 4, 5]);
console.log(`My result is ${result}`);
