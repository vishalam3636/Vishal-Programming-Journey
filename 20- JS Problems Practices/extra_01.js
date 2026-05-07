// Extra question: sepetrate each char with ",", but the last char should not have comma
let str = "abcdefgh";

function commaSeperated(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i !== str.length - 1) {
      result += ",";
    }
  }

  console.log(result);
}

commaSeperated(str);
