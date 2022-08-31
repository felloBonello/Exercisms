//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor = null, sum }) {
  const maxC = Math.floor(sum / 2) - 1;
  let results = [];
  maxFactor = maxFactor ?? maxC;

  for (let b = maxFactor; minFactor <= b; b--) {
    for (let a = minFactor + 1; a < b; a++) {
      const c = Math.sqrt(a * a + b * b);

      if (a < b < c && a + b + c === sum && minFactor <= c && c <= maxFactor) {
        results.push(new Triplet(a, b, c));
      }
    }
  }

  return results;
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
