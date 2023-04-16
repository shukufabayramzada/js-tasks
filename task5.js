function descendingOrder() {
  const tempFirst = +prompt('Enter the first temperature')
  const tempSecond = +prompt('Enter the second temperature')
  const tempThird = +prompt('Enter the third temperature')

  if (tempThird > tempSecond) {

    if (tempSecond > tempFirst) {

      console.log(`${tempThird}, ${tempSecond}, ${tempFirst}`)
    } else {
      if (tempThird > tempFirst) {
        console.log(`${tempThird}, ${tempFirst}, ${tempSecond}`)
      } else {
        console.log(`${tempFirst}, ${tempThird}, ${tempSecond}`)
      }
    }
  } else {
    if (tempThird > tempFirst) {
      console.log(`${tempSecond}, ${tempThird},${tempFirst}`)

    } else {
      if (tempFirst > tempSecond) {
        console.log(`${tempFirst},${tempSecond}, ${tempThird}`)
      }else{
        console.log (`${tempSecond},${tempFirst}, ${tempThird}`)
      }

    }
  }

}
descendingOrder()