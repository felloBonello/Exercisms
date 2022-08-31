//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  const maxC = Math.floor(sum / 2) - 1;
  let results = [];
  //a**2 + b**2 = 9 + 16 = 25 = c**2.
  // loop
  for (let a = 1; a < maxC; a++) {
    for (let b = 2; b < maxC; b++) {
      let c = Math.sqrt(a * a + b * b);
      if (a < b < c && a + b + c === sum) {
        results = [new Triplet(a, b, c)];
      }
    }
  }
  return results;
  // for (let c = 1; c < maxC; c++) {
  //   for (let b = 1; b < c; b++) {
  //     for (let a = 1; a < b; a++) {
  //       if (a + b + c == sum) {
  //         return [new Triplet(a, b, c)];
  //       }
  //     }
  //   }
  // }
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
