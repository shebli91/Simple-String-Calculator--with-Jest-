class StringCalculator {
  add(numbers) {
    if (!numbers || numbers.trim() === "") {
      return 0;
    }

    const numberArray = numbers.split(",");
    if (numberArray.length > 2) {
      throw new Error("The method only supports up to 2 numbers.");
    }

    let sum = 0;

    for (const number of numberArray) {
      if (isNaN(number)) {
        throw new Error("Input contains invalid number.");
      }
      sum += parseInt(number);
    }
    return sum;
  }
}

module.exports = StringCalculator;
