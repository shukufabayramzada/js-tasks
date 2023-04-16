function codeDigitsCalculator() {
    let number = +prompt('Enter your own code please')
    let sum = 0;
    while (number > 0) {
        remainder = number % 10
        sum += remainder;
        number = (number - remainder) / 10;
    }
    return sum;
}
console.log(codeDigitsCalculator())