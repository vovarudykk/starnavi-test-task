class Sum {
  constructor(initValue = 42) {
    this.sum = initValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum = new Sum();
sum.add(8).add(2).add(10);
