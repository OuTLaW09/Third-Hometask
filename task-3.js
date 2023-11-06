function calculateamount() {
    let name = prompt("Enter product name");
    let prize = prompt("Enter product prize");
    let quantitiy = prompt("Enter product quantity");
    let promotion = prompt("Enter Participating in Promotion (Yes or No)");
    let overAllAmount;
    if (quantitiy >= 5) {
      overAllAmount = prize * quantitiy - (prize * quantitiy * 10) / 100;
    } else if (promotion === "yes") {
      overAllAmount = prize * quantitiy - (prize * quantitiy * 15) / 100;
    } else if (quantitiy >= 5 && promotion === "yes") {
      overAllAmount = prize * quantitiy - (prize * quantitiy * 25) / 100;
    } else {
      overAllAmount = prize * quantitiy;
    }
    return `amount of receipt: ${overAllAmount}`;
  }
  console.log(calculateamount());