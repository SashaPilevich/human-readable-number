let libraryOfNumbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};
let libraryOfNumbersTwo = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};


module.exports = function toReadable(number) {
    let numberInString = String(number);
    let finishResult = "";

    if (numberInString.length <= 2 && number <= 19) {
        for (let key in libraryOfNumbers) {
            if (Number(key) === number) {
            return    finishResult = libraryOfNumbers[key];
            }
        }
    } else if (
        numberInString.length === 2 &&
        number >= 20 &&
        numberInString[1] === "0"
    ) {
        for (let key in libraryOfNumbersTwo) {
            if (Number(key) === number) {
           return      finishResult = libraryOfNumbersTwo[key];
                
            }
        }
    } else if (
        numberInString.length === 2 &&
        number >= 20 &&
        numberInString[1] !== "0"
    ) {
      let combine = ''
      let result = ''
        for (let key in libraryOfNumbersTwo) {
            if (key[0] === numberInString[0]) {
                result = libraryOfNumbersTwo[key];
            }
        }
        for(let key in libraryOfNumbers){
          if (key === numberInString[1]) {
                combine = result + ' ' + libraryOfNumbers[key];
                return finishResult = combine
            }
        }
    } 
    else if(numberInString.length === 3 && numberInString[1] === '0' && numberInString[2] === '0'){
      let result = ''
      for(let key in libraryOfNumbers){
          if (key === numberInString[0]) {
                result = libraryOfNumbers[key] + " " + 'hundred'
                return finishResult = result
            }
        }
    }
    else if(numberInString.length === 3 && numberInString[1] === '0' && numberInString[2] != '0'){
      let combine = ''
      let result = ''
      
      for(let key in libraryOfNumbers){
          if (key === numberInString[0]) {
                result = libraryOfNumbers[key] + " " + 'hundred'
                
            }
        }
        
        for(let key in libraryOfNumbers){
          if (key === numberInString[2]) {
                combine = result + " " +  libraryOfNumbers[key];
                return finishResult = combine
            }
        }
    }
    else if(numberInString.length === 3 && (Number(numberInString.slice(1)) >= 10 && Number(numberInString.slice(1)) < 20 )){
      let combine = ''
      let result = ''
      for(let key in libraryOfNumbers){
          if (key === numberInString[0]) {
                result = libraryOfNumbers[key] + " " + 'hundred'
                
            }
        }
        
        for(let key in libraryOfNumbers){

          if (key === numberInString.slice(1)) {
                combine = result + " " + libraryOfNumbers[key];
                return finishResult = combine
            }
        }
    }
    else if(numberInString.length === 3 && (numberInString[1]!== "0") && numberInString[2] === '0'){
      let combine = ''
      let result = ''
      
      for(let key in libraryOfNumbers){
          if (key === numberInString[0]) {
                result = libraryOfNumbers[key] + " " + 'hundred'
                
            }
        }
        
        for(let key in libraryOfNumbersTwo){

          if (key === numberInString.slice(1)) {
                combine = result + " " + libraryOfNumbersTwo[key];
                return finishResult = combine
            }
        }
    }
    else if(numberInString.length === 3 && (Number(numberInString.slice(1)) >= 20) && Number(numberInString[2]) > 0){
      let combine = ''
      let result = ''
      let preresult = ''
      for(let key in libraryOfNumbers){
          if (key === numberInString[0]) {
                result = libraryOfNumbers[key] + " " + 'hundred'
                
            }
        }
        
        for(let key in libraryOfNumbersTwo){

          if (key[0] === numberInString[1]) {
                combine = result + " " + libraryOfNumbersTwo[key];
                
            }
        }
        for(let key in libraryOfNumbers){
          if (key === numberInString[2]) {
                preresult = combine + " " + libraryOfNumbers[key]
                return finishResult = preresult
            }
        }
    }
        return finishResult
  }
