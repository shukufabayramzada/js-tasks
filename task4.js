let numberOfGuests = +prompt("Enter the number of your guests, please:");
function restaurantSeats(numberOfGuests) {
  if (numberOfGuests > 8) {
    return "No way, we can not be place your guests";
  }
  if (4 < numberOfGuests <= 8) {
    return "You need large table";
  }
  if (2 < numberOfGuests <= 4) {
    return "You need medium table";
  }
  if (0 < numberOfGuests <= 2) {
    return "You need small table";
  }

  //   let largeTable = 0;
  //   let mediumTable = 0;
  //   let smallTable = 0;

  // if (numberOfGuests >= 8) {
  //     remainder = numberOfGuests % 8
  //     largeTable = (numberOfGuests - remainder) / 8
  //     numberOfGuests -= largeTable * 8;
  // }
  // if (numberOfGuests >= 4) {
  //     remainder = numberOfGuests % 4
  //     mediumTable = (numberOfGuests - remainder) / 4
  //     numberOfGuests -= mediumTable * 4;
  // }

  // if (numberOfGuests >= 2) {
  //     remainder = numberOfGuests % 2
  //     smallTable = (numberOfGuests - remainder) / 2
  //     numberOfGuests -= smallTable * 2;

  // }
  // if(numberOfGuests >= 1) {
  //     smallTable += 1;
  // }

  // let result = "";
  // if (largeTable > 0) {
  //     result += `Large Table: ${largeTable}, `;
  // }
  // if (mediumTable > 0) {
  //     result += `Medium Table: ${mediumTable}, `;
  // }
  // if (smallTable > 0) {
  //     result += `Small Table: ${smallTable}`;
  // }
  // return result;
}
console.log(restaurantSeats(numberOfGuests));
