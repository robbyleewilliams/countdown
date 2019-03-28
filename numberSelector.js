const NMBRS_SETS = {
    "large" : [25,50,75,100],
    "small" : [1,2,3,4,5,6,7,8,9,10]
};

let MAX_NMBRS = 6;
let UNQ_NMBRS = 4;
let LRG = "large";
let SML = "small";
let autofill = null;
let numberSet = null;
let numbersStart = null;
let largeCount = null;
let smallCount = null;

let startNumbersGame = function() {
    numbersStart = false;
    numberSet = new Array();
    largeCount = 0;
    smallCount = 0;
    autoFill = false;
    console.log("Please choose a consonant or a vowel");
}

let getRandomNumber = function(classification) {
    var selectedNumbers = NMBRS_SETS[classification];
    return numberSet.push(selectedNumbers[
      Math.floor(Math.random() * selectedNumbers.length)
    ]);
  }

  let selectNumber = function(classification) {
    switch (classification) {
      case LRG :
      case SML :
        getRandomNumber(classification);
        if(autoFill !== true) {
          checkNumberCount(classification);
        }
        break;
      default:
        console.log(`Bad classification providied: ${classification}`);
    }
  };

let checkNumberCount = function(classification) {
  if(numberSet.length === MAX_NMBRS) {
    countStart = true;
    printNumberSet();
    console.log("countStart");
  } else {
    switch(classification) {
      case LRG :
        largeCount++;
        break;
      case SML :
        smallCount++;
        break;
      default :
        console.log("HOW DO YOU KEEP GETTING HERE?");
    }
    if(largeCount === UNQ_NMBRS || smallCount === UNQ_NMBRS) {
      autoFillNumbers(classification);
    }
  }
};
  
let autoFillNumbers = function(classification) {
  autoFill = true;
  for(var i=MAX_NMBRS-UNQ_NMBRS; i<MAX_NMBRS; i++) {
    switch(classification) {
      case LRG :
        selectNumber(SML);
        break;
      case SML :
        selectNumber(LRG);
        break;
      default:
        console.log("I'm not even going to ask...")
    }
  }
  countStart = true;
  printNumberSet();
  console.log("countStart");
}
  
let printNumberSet = function() {
  var numberStr = "";
  for(var i=0; i<numberSet.length; i++) {
    numberStr += numberSet[i] + "|";
  }
  console.log(numberStr);
}