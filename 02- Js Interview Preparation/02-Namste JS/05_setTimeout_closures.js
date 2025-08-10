function x() {
  //   var i = 1;
  //   setTimeout(function () {
  //     console.log(i);
  //   }, 3000);

  //   for (let i = 1; i <= 5; i++) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 1000);
  //   }

  for (var i = 1; i <= 5; i++) {
    function printTime(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }

    printTime(i);
  }
}

x();
