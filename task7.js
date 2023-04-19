const width = +prompt("Enter the width of object:");
const height = +prompt("Enter the height of object:");
const length = +prompt("Enter the length of object:");
const weight = +prompt("Enter the weight of object:");
const distance = +prompt("Enter the distance of delivery");
let sum = width + height + length;

function shipService(width, height, length, weight, distance) {
  if (
    sum <= 150 &&
    width <= 100 &&
    height <= 100 &&
    length <= 100 &&
    weight <= 10 &&
    distance > 3 &&
    distance < 10
  ) {
    return `The shipping service accepts this order `;
  } else {
    return `The shipping service does not accept this order `;
  }
}
console.log(shipService(width, height, length, weight, distance));
