const numberOfOrders = +prompt("Enter the number of your orders:");
let firstPoint = 1;
let secondPoint = 1;
let currentPoint = 0;
function coffeeShop() {
  if (numberOfOrders === 1 || numberOfOrders === 2) {
    return 1;
  } else {
    for (let index = 3; index <= numberOfOrders; index++) {
      currentPoint = firstPoint + secondPoint;
      secondPoint = firstPoint;
      firstPoint = currentPoint;
    }
    return currentPoint;
  }
}
console.log(coffeeShop());
