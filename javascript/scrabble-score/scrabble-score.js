//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const letterScore = (character) =>{
  switch(character.toUpperCase()){
    case 'A': 
    case 'T':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'L':
    case 'N':
    case 'R':
    case 'S':
      return 1;
    case 'D':
    case 'G':
      return 2;
    case 'B':
    case 'C':
    case 'M':
    case 'P':
      return 3;
    case 'F':
    case 'H':
    case 'V':
    case 'W':
    case 'Y':
      return 4;
    case 'K':
      return 5;
    case 'J':
    case 'X':
      return 8;
    case 'Q':
    case 'Z':
      return 10;
    default:
  }
}

export const score = (word) => {
  const charArray = word.split('');
  let score = 0;
  
  charArray.forEach((c) => {score += letterScore(c);});

  return score;
};
