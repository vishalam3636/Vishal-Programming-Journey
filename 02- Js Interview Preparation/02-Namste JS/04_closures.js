function x() {
  var a = 7;
  var b = 10;
  var c = 20;
  function y() {
    console.log(a);
    // console.log("VIshal");
  }
  return y;
}

let z = x();
z();
