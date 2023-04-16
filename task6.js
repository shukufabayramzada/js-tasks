function discount() {
    name = prompt('Enter the name:')
    age = prompt('Enter the age:')
    numberOfOrders = prompt('Enter the number of orders:')

    let amountOfOrders = []

    for (let i = 1; i <= numberOfOrders; i++) {
        amountOfOrders[i] = Number(prompt(`Enter the amount of your orders: ${i}:`));
    }

    let count = 0
    for (let index = 0; index < amountOfOrders.length; index++) {
        if (amountOfOrders[index] >= 100)
            count++
    }
    
    if (age > 60 || (count >= 4)) {
        return `You have a discount`
    } else {
        return `You have no discount`
    }
}
console.log(discount())




