const road = prompt("Enter the distance");
function delivery() {
  let cost = 5 + 0.25 * road;
  return `For ${road}km is ${cost} AZN `;
}

console.log(delivery());
