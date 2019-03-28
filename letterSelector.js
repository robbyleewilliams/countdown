const LTRS_SETS = {
    "vowels" : [
        "A","E","I","O","U"
    ],
    "consonants" : [
        "B","C","D","F","G","H","J","K","L","M",
        "N","P","Q","R","S","T","V","W","X","Y","Z"
    ],
    "all" : [
        "A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ]
};

let MAX_LTRS = 9;
let UNQ_LTRS = 5;
let VOWS = "vowels";
let CONS = "consonants";
let autoFill = null;
let letterSet = null;
let countStart = null;
let consCount = null;
let vowsCount = null;

let startGame = function() {
    countStart = false;
    letterSet = new Array();
    consCount = 0;
    vowsCount = 0;
    autoFill = false;
    console.log("Please choose a consonant or a vowel");
}

/**
 * 
 * @param {string} classification Type of letters [vowels|consonants], passed in by calling function
 */
let getRandomLetter = function(classification) {
  var selectedLetters = LTRS_SETS[classification];
  return letterSet.push(selectedLetters[
    Math.floor(Math.random() * selectedLetters.length)
  ]);
}

let selectLetter = function(classification) {
  switch (classification) {
    case VOWS :
    case CONS :
      getRandomLetter(classification);
      printLetterSet();
      if(autoFill !== true) {
        checkLetterCount(classification);
      }
      break;
    default:
      console.log(`Bad classification providied: ${classification}`);
  }
};

let checkLetterCount = function(classification) {
  if(letterSet.length === MAX_LTRS) {
    countStart = true;
    printLetterSet();
    console.log("countStart");
  } else {
    switch(classification) {
      case VOWS :
        vowsCount++;
        break;
      case CONS :
        consCount++;
        break;
      default :
        console.log("HOW DO YOU KEEP GETTING HERE?");
    }
    if(vowsCount === UNQ_LTRS || consCount === UNQ_LTRS) {
      autoFillLetters(classification);
    }
  }
};

let autoFillLetters = function(classification) {
  autoFill = true;
  for(var i=MAX_LTRS-letterSet.length; i>0; i--) {
    switch(classification) {
      case CONS :
        selectLetter(VOWS);
        break;
      case VOWS :
        selectLetter(CONS);
        break;
      default:
        console.log("I'm not even going to ask...");
    }
  }
  countStart = true;
  printLetterSet();
  console.log("countStart");
}

let printLetterSet = function() {
  var letterStr = "";
  for(var i=0; i<letterSet.length; i++) {
    letterStr += letterSet[i] + "|";
  }
  console.log(letterStr);
}