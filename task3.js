const name = prompt("Enter the name of product:");
const unitPrice = +prompt("Enter the unit price");
const quantity = +prompt("Enter the quantity of products");
const participate = confirm("Is product in the promotion ? (Yes/No)");
let   currentPrice = 0;

function receipt(name, unitPrice, quantity, participate) {
  if (quantity >= 5 && participate === true) {
    currentPrice = quantity * unitPrice * 0.75;
  } else if (quantity >= 5) {
    currentPrice = quantity * unitPrice * 0.9;
  } else if (participate === true) {
    currentPrice = quantity * unitPrice * 0.85;
  } else {
    currentPrice = quantity * unitPrice;
  }
  return `The price is ${currentPrice}`;
}
console.log(receipt(name, unitPrice, quantity, participate));
