function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

// prepareChai("Masala Chai");
// prepareChai("Ginger Chai");

/**
 * Problem Statement:
 * ek online store mein , agar customer ka total bill amount 1000 se jyada hai, toh 10% dicount milta hai, nahi to full amount pay krna padta hai.
 */

function calculateTotal(amount) {
  amount = Number(amount);
  if (isNaN(amount)) {
    console.log("Invalid amount !!!");
  } else if (amount > 1000) {
    let discount = (10 / 100) * amount;
    console.log(1000 - discount);
  } else {
    console.log(amount);
  }
}

// calculateTotal("1001abcd");
// calculateTotal(1001);
// calculateTotal(1000);

/**
 * Ek traffic light msystem mein , agar light "red" hai to, "Stop" print karo.
 * Agar "yellow" hai to "Slow Down" Print karo
 * Agar "green" hai to "Go print karo"
 */

function trafficLight(color) {
  switch (color) {
    case "red":
      return "Stop";
    //   break;
    case "yellow":
      return "slow down";
    //   break;
    case "green":
      return "Go";
    //   break;
    default:
      return "Invalid light";
  }
}

// console.log(signal("red"));
// console.log(signal("yellow"));
// console.log(signal("green"));

//==============================================//
//==========  Check Truthy/Falsy ===============//
//==============================================//
function checkTruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

// checkTruthyValue(0);
// checkTruthyValue("");
// checkTruthyValue(null);
// checkTruthyValue(undefined);
// checkTruthyValue(false);
// checkTruthyValue(true);
// checkTruthyValue("Vishal");
// checkTruthyValue(1);
// checkTruthyValue([]);
// checkTruthyValue({});

//================================================//
//=============== LOGIN FUNCTIONALITY ============//
//================================================//
function login(username, password, loginIp) {
  if (username === "ADMIN" && (password === "1234" || loginIp === "127")) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Credentials");
  }
}

login("ADMIN", "1234", "127");
login("ADMIN", "124", "127");
login("ADMIN", "124", "127");
login("ADM", "124", "127");
