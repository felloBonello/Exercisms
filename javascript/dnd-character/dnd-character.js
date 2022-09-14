//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {

  if(score < 3){
    throw new Error('Ability scores must be at least 3');
  }
  if(score  > 18){
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor(score / 2) - 5;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export class Character {


  static rollAbility() {
    return getRndInteger(3, 18);
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
}
