import Calculator from "./calculator";

describe("Test adding", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  test("1 + 2 = 3", () => {
    const sum = calc.add(1, 2);

    expect(sum).toBe(3);
  });

  test("0.1 + 0.2 = 0.3", () => {
    const sum = calc.add(0.1, 0.2);

    expect(sum).toBeCloseTo(0.3, 15);
  });
});
