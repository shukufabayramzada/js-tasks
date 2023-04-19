const initialAmount = +prompt("Enter the initial amount");
const durationYear = +prompt("Enter the duration years");
const percentForYear = +prompt("Enter the % per year");
let amount = 0;
function bankDeposit(initialAmount,durationYear,percentForYear) {
  for (let i = 0; i <= durationYear; i++) {
    amount = initialAmount * (1 + percentForYear / 100) ** i;
  }
  return `${amount}`;
}
console.log(bankDeposit(initialAmount,durationYear,percentForYear));
