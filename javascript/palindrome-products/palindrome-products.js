//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {

  static generate(range) {
    if (range.minFactor > range.maxFactor){
      throw new Error('min must be <= max');
    }

    this.smallest = {value: null, factors: []}
    this.largest = {value: null, factors: []}

    for(let x = range.minFactor; x <= range.maxFactor; x++){
      for(let y = x; y <= range.maxFactor; y++){
        const product = x * y;

        if(this.isPalindrome(product)){
          this.setSmallest(product, x, y);
          this.setLargest(product, x, y);
        }
      }
    }

    return this;
  }

  static setSmallest(product, x, y) {
    if (this.smallest.value === product) {
      this.smallest.factors.push([x, y])
    } else if (this.smallest.value === null || product < this.smallest.value) {
      this.smallest = {value: product, factors: [[x, y]]}
    }
  }

  static setLargest(product, x, y) {
    if (this.largest.value === product) {
      this.largest.factors.push([x, y])
    } else if (this.largest.value === null || product > this.largest.value) {
      this.largest = {value: product, factors: [[x, y]]}
    }
  }

  static isPalindrome(subject) {
    const subjectString = subject.toString();
    const subjectStringReverse = subjectString.split('').reverse().join('');
    return subjectString === subjectStringReverse;
  }
}
