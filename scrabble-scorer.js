// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   //initialWord = input.question("Let's play some scrabble! Enter a word: ");
   newword=input.question("Let's play some scrabble! Enter a word:");
};

let simpleScore = function(word) {
  word = word.toUpperCase();
  let score = 0;

	for (let i = 0; i < word.length; i++) {
      score++;
      }
  console.log(`Each Letter is 1 Point\nPoints for ${word}: ${score}`);
	return score;
} 

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let vowelScore = 0;
  let vowels = ["A", "E", "I", "O", "U"]

  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        //vowelScore = vowelScore + 3;
        vowelScore += 3;
      } else {
        //vowelScore = vowelScore + 1;
        vowelScore++;
      }
    }
  console.log(`Vowels are 3 pts, consonants are 1 pt.\nPoints for ${word}: ${vowelScore}`);
  
  return vowelScore;
}

let scrabbleScore = function(word){
word = word.toLowerCase();
let points = 0;

for (i = 0; i < word.length; i++) {
    let letter = word[i];
    points += newPointStructure[letter];
  }

return points;
};

const scoringAlgorithms =
 [
  ({name: 'Simple Score',
 description: 'Each letter is worth 1 point',
 scoringFunction: simpleScore
  }),
  ({name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
  }),
  ({name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
  })
  ];

function scorerPrompt(word) {
  
  scoreType = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
      if (scoreType == 0) 
      {
      console.log("Algorithm Name: ", scoringAlgorithms[0].name);
      console.log("scoringFunction: ", scoringAlgorithms[0].scoringFunction(newword));
    } 
    else if (scoreType == 1)
     {
      console.log("Algorithm Name: ", scoringAlgorithms[1].name);
      console.log("scoringFunction: ", scoringAlgorithms[1].scoringFunction(newword));
    } 
    else if (scoreType == 2) 
    {
      console.log("Algorithm Name: ", scoringAlgorithms[2].name);
      console.log("scoringFunction: ",scoringAlgorithms[2].scoringFunction(newword));
    } 

  return scoreType;
};

/*function transform(oldPointStructure) {
  const newPoints = {}
  
  for (const [letterValue, number] of Object.entries(oldPointStructure)) {
    for (const letter of number) {
      newPoints[letter.toLowerCase()] = Number(letterValue);
    }
  }

  return newPoints;
};*/
function transform(obj) {
  let newPointStructureObj = {};
  for (item in obj) {
    for (let i = 0; i < obj[item].length; i++) {
      newPointStructureObj[obj[item][i].toLowerCase()] = Number(item);
    }
  }
  return newPointStructureObj;
};


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};