function receipt() {
    const name = prompt('Enter the name of product:')
    const unitPrice = +prompt('Enter the unit price')
    const quantity = +prompt('Enter the quantity of products')
    const participate = prompt('Is product in the promotion (Yes/No)')

    let currentPrice = 0
    if (quantity >= 5) {
        currentPrice = quantity * unitPrice * 0.9

        if (participate === "yes" || participate === "Yes") {
            currentPrice = quantity * unitPrice * 0.9 * 0.85
        }


    } else {
        currentPrice = quantity * unitPrice

        if (participate === "yes" || participate === "Yes") {
            currentPrice = quantity * unitPrice * 0.85
        }

    }
    return `The price  is ${currentPrice}`
}
console.log(receipt());




