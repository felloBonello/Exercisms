//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.setValue(value);
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.fn = fn;
    this.inputCells = inputCells;
    this.cachedValue = this.value;
  }

  get value() {
    return this.fn(this.inputCells);
  }

  addCallback(cb) {
    cb.computeCells.push(this);
  }

  removeCallback(cb) {
    throw new Error("Remove this statement and implement this function");
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.computeCells = [];
  }

  get values() {
    this.computeCells.forEach((item) => {
      this.value =
        this.fn(item) !== item.cachedValue ? this.fn(item) : item.cachedValue;
    });
    return this.computeCells.map((item) => item.value);
  }
}
