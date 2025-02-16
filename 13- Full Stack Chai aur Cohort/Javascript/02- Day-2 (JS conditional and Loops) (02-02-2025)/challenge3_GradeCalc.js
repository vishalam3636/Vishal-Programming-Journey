/**
 * Prepare a function that will help your class teacher to decide grades for parent teacher meeting
 
  A - >= 90
  B - >= 80
  C - >= 70
  D - >= 60
  F - Fail
*/

let score = 59;

function calculateGrade(grade) {
  if (grade >= 90) {
    return "A grade";
  } else if (grade >= 80) {
    return "B grade";
  } else if (grade >= 70) {
    return "C grade";
  } else if (grade >= 60) {
    return "D grade";
  } else {
    return "F grade Failed !!!";
  }
}

console.log(calculateGrade(90));
