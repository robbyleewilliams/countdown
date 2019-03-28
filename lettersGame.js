class lettersGame {
  MAX_LTRS = 9;
  MAX_UNQ = 5;
  autoFill = null;
  letterSet = null;
  countStart = null;
  consCount = null;
  vowsCount = null;

  letters = {
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
  
  chooseLetter(classification) {
      var selectedLetters = letters[classification];
      return selectedLetters[
          Math.floor(Math.random() * selectedLetters.length)
      ];
  }


  startGame() {
      countStart = false;
      letterSet = new Array();
      consCount = 0;
      vowsCount = 0;
      autoFill = false;
      console.log("Please choose a consonant or a vowel");
  }

  chooseConsonant() {
      var letterSetSize = this.letterSet.push(chooseLetter("consonants"));
      consCount++;
      if(letterSetSize === MAX_LTRS) {
          countStart = true;
          tempPrintLetterSet();
          console.log("countStart");
      } else {
          if(autoFill === false && consCount === MAX_UNQ) {
              console.log("You have selected the maximum number of consonants; Filling in the rest for you");
              fillLetters(letterSetSize,"v");
          } else {
              tempPrintLetterSet();
          }
      }
  }

  chooseVowel() {
      var letterSetSize = letterSet.push(chooseLetter("vowels"));
      vowsCount++;
      if(letterSetSize === MAX_LTRS) {
          countStart = true;
          tempPrintLetterSet();
          console.log("countStart");
      } else {
          if(autoFill === false && vowsCount === MAX_UNQ) {
              console.log("You have selected the maximum number of vowels; Filling in the rest for you");
              fillLetters(letterSetSize,"c");
          } else {
              tempPrintLetterSet();
          }
      }
  }
  
  fillLetters(count,classification) {
      autoFill = true;
      for(var i=count; i<MAX_LTRS; i++) {
          switch(classification) {
              case "c":
                  chooseConsonant();
              // case "v"
              default:
                  chooseVowel();
          }
      }
  }
  tempPrintLetterSet() {
      var letterStr = "";
      for(var i=0; i<letterSet.length; i++) {
          letterStr += letterSet[i] + "|";
      }
      console.log(letterStr);
  }
}