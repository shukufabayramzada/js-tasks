function register() {
    const name = prompt('Enter the name')
    const surname = prompt('Enter the surname')
    const email = prompt('Enter the email')
    
    return `*${email}*-*${name}* *${surname}*`
}

console.log(register());



