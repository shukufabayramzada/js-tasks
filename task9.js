const number = +prompt("Enter the number which is divisor");
function divisible() {
  for (let i = 1; i <= 1000; i++) {
    if (i % number == 0) {
      console.log(i);
    }
  }
}
divisible();
