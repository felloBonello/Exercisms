//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.target = new EventTarget();
    this.setValue(value);
  }

  setValue(value) {
    this.value = value;
    this.target.dispatchEvent(new Event('updateEvent'));
  }
}

export class ComputeCell {

  constructor(inputCells, fn) {
    this.fn = fn;
    this.target = new EventTarget();
    this.inputCells = inputCells;
    this.inputCells.forEach((cell) =>
      cell.target.addEventListener('updateEvent', (event) => {
        this.updateValue();
      })
    )
    this.updateValue();
  }

  updateValue(){
    const oldValue = this.value;
    this.value = this.fn(this.inputCells);
    if(oldValue !== this.value){
      this.target.dispatchEvent(new Event('updateEvent'));
    }
  }

  addCallback(cb) {
    cb.addComputeCell(this);
  }

  removeCallback(cb) {
    cb.removeComputeCell(this);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.computeCells = [];
    this.updateValues()
  }

  updateValues = () => {
    this.values = this.computeCells.map((item) => this.fn(item));
  }

  addComputeCell(cc) {
    cc.target.addEventListener('updateEvent', this.updateValues)
    this.computeCells.push(cc);
  }

  removeComputeCell(cc) {
    cc.target.removeEventListener('updateEvent', this.updateValues)
    const i = this.computeCells.indexOf(cc)
    this.computeCells.splice(i, 1);
  }
}
