//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.alergyList = [];
    this.findHighest(score);
  }

  findHighest(score){
    if(score === 0) return

    let highest = 1;
    while(highest * 2 <= score){
      highest = highest === 1 ? 2 : highest * 2;
    }
    this.appendToList(highest);

    this.findHighest(score - highest);
  }

  appendToList(key){
    switch(key){
      case 1: this.alergyList.push("eggs");
        break;
      case 2: this.alergyList.push("peanuts")
        break;
      case 4: this.alergyList.push("shellfish")
        break;
      case 8: this.alergyList.push("strawberries")
        break;
      case 16: this.alergyList.push("tomatoes")
        break;
      case 32: this.alergyList.push("chocolate")
        break;
      case 64: this.alergyList.push("pollen")
        break;
      case 128: this.alergyList.push("cats")
        break;
    }
  }

  list() {
    return this.alergyList.reverse();
  }

  allergicTo(subject) {
    return this.alergyList.includes(subject);
  }
}
