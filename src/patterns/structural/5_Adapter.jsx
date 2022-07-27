class Calculator {
  operations(a, b, op) {
    switch (op) {
      case "add":
        return a + b;
      case "sub":
        return a - b;
      default:
        return NaN;
    }
  }
}

class CalculatorV2 {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
}

class CalculatorAdapter {
  constructor() {
    this.calculator = new CalculatorV2();
  }

  operations(a, b, op) {
    switch (op) {
      case "add":
        return this.calculator.add(a, b);
      case "sub":
        return this.calculator.sub(a, b);
      default:
        return NaN;
    }
  }
}

const calc = new Calculator();
console.log(calc.operations(2, 3, "add"));

const newCalc = new CalculatorV2();
console.log(newCalc.add(2, 3));

const adapterCalc = new CalculatorAdapter();
console.log(adapterCalc.operations(2, 3, "add"));
