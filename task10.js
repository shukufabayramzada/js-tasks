function bankDeposit() { 
 
    const initialAmount = +prompt('Enter the initial amount') 
    const durationYear = +prompt('Enter the duration years') 
    const percentForYear = +prompt('Enter the % per year') 
    let amount =0 
     
    for (let i = 0; i <= durationYear; i++) { 
      amount = initialAmount*((1+(percentForYear/100))**i); 
    
    } return `${amount}`
}   
 
console.log(bankDeposit())


  