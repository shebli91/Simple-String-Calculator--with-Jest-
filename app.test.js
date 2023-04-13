const StringCalculator = require("./app");

describe("StringCalculator", () => {
  const stringCalculator = new StringCalculator();

  test("should return 0 for an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number string", () => {
    expect(stringCalculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers for a two number string separated by comma", () => {
    expect(stringCalculator.add("1,2")).toBe(3);
  });

  // test("should throw an error for more than two numbers in the input string", () => {
  //   expect(() => {
  //     stringCalculator.add("1,2,3");
  //   }).toThrow("The method only supports up to 2 numbers.");
  // });

  test("should throw an error for more than two numbers in the input string", () => {
    expect(() => {
      stringCalculator.add("f,2");
    }).toThrow("Input contains invalid number.");
  });

  test("should handle an unknown amount of numbers", () => {
    expect(stringCalculator.add("1,2,3,4,5")).toBe(15);
  });
});
