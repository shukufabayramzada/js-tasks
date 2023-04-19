const road = prompt("Enter the distance");
  let cost = 5 + 0.25 * road;
function delivery(road,cost) {
  return `For ${road}km is ${cost} AZN `;
}

console.log(delivery(road,cost));
