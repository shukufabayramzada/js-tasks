const name = prompt("Enter the name:");
const age = prompt("Enter the age:");
const numberOfOrders = prompt("Enter the number of orders:");
let amountOfOrders = [];
let count = 0;

function discount(name, age, numberOfOrders, amountOfOrders) {
  for (let i = 1; i <= numberOfOrders; i++) {
    amountOfOrders[i] = Number(
      prompt(`Enter the amount of your orders: ${i}:`)
    );
  }
  for (let index = 0; index < amountOfOrders.length; index++) {
    if (amountOfOrders[index] >= 100) count++;
  }

  if (age > 60 || count >= 4) {
    return `You have a discount`;
  } else {
    return `You have no discount`;
  }
}
console.log(discount(name, age, numberOfOrders, amountOfOrders));
