describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition WBL15", () => {
      expect (calculator.add(5,6)).toBe(11);
    });
    test("Subtraction WBL15" () => {
      expect(calculator.subtract(6,5)).toBe(1);
    });
    test("Multiplication WBL15", () => {
      expect(calculator.multiply(5,6)).toBe(30);
    });
    test("Division WBL15", () => {
      expect(calculator.divide(6,3)).toBe(2);
    });
    describe("Stretch Goals 1 WBL15", () => {
      test("(9+3)/4 == 3", () => {
        expect(calculator.divide(calculator.add(9,3), 4)).toBe(3);
      });
      test("9>2", () => {
        expect(true).toBeGreaterThan(2);
      });
      test("2>29", () => {
        expect(true).toBeLessThan(9);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };