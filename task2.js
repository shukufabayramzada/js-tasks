function delivery() {
   const road = prompt('Enter the distance')
   for (let index = 5; index >=5; index++) {
      let cost= index+ (0.25*road)
      return `For ${road}km is ${cost} AZN `
   }
}
console.log(delivery())
