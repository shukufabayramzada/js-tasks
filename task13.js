let amount = +prompt("Enter the amount of money that you want to get, please:");
let hundredNotes = 0;
let fiftyNotes = 0;
let twentyNotes = 0;
let tenNotes = 0;
let fiveNotes = 0;
let oneNotes = 0;
function getBanknotes() {
  if (amount >= 100) {
    hundredNotes = Math.floor(amount / 100);
    amount -= hundredNotes * 100;
  }
  if (amount >= 50) {
    fiftyNotes = Math.floor(amount / 50);
    amount -= fiftyNotes * 50;
  }
  if (amount >= 20) {
    twentyNotes = Math.floor(amount / 20);
    amount -= twentyNotes * 20;
  }
  if (amount >= 10) {
    tenNotes = Math.floor(amount / 10);
    amount -= tenNotes * 10;
  }
  if (amount >= 5) {
    fiveNotes = Math.floor(amount / 5);
    amount -= fiveNotes * 5;
  }
  if (amount >= 1) {
    oneNotes = amount / 1;
  }

  let result = "";
  if (hundredNotes > 0) {
    result += `100 AZN: ${hundredNotes}, `;
  }
  if (fiftyNotes > 0) {
    result += `50 AZN: ${fiftyNotes}, `;
  }
  if (twentyNotes > 0) {
    result += `20 AZN: ${twentyNotes}, `;
  }
  if (tenNotes > 0) {
    result += `10 AZN: ${tenNotes}, `;
  }
  if (fiveNotes > 0) {
    result += `5 AZN: ${fiveNotes}, `;
  }
  if (oneNotes > 0) {
    result += `1 AZN: ${oneNotes}, `;
  }
  return result;
}
console.log(getBanknotes());
