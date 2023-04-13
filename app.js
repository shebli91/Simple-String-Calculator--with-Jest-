class StringCalculator {
  add(numbers) {
    if (!numbers || numbers.trim() === "") {
      return 0;
    }

    const numberArray = numbers.split(",");
    // if (numberArray.length > 2) {
    //   throw new Error("The method only supports up to 2 numbers.");
    // }

    let sum = 0;
    let negativeNumbers = [];

    for (const number of numberArray) {
      if (isNaN(number)) {
        throw new Error("Input contains invalid number.");
      }
      const addedNumber = parseInt(number);
      if (addedNumber < 0) {
        negativeNumbers.push(addedNumber);
      }
      sum += addedNumber;
    }

    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return sum;
  }
}

module.exports = StringCalculator;
