
//Left breakdown function in here so that the conjugate() function is easier to test.
const breakdown = (input) => {
   const hex = '\\u'+(input.charCodeAt(0)+0x10000).toString(16).slice(1);
   const numHex = hex.substring(2);
   total = parseInt(numHex, 16);

   let letterArray = [];
   total = total - 44032;
   let initialValue = Math.floor(total/588);
   letterArray.push(initialValue);
   total = total - (588*initialValue);
   let medialValue = Math.floor(total/28);
   letterArray.push(medialValue);
   let finalValue = total - (28*medialValue);
   if (finalValue > 0) {
     letterArray.push(finalValue);
   }
   return letterArray;
 }

const reverseBreakdown = (input) => {
  let initialValue = input[0]*588;
  let medialValue = input[1]*28;
  let finalValue = input[3] ? input[3] : 0;
  let total = initialValue + medialValue + finalValue + 44032;
  let finalWord = String.fromCharCode(total);
  console.log(finalWord);

}


//Left console.logs in here so that testing the conjugation is easy. Return conjugate and remove console.logs when testing is complete.
function conjugate(word){

let wordLength = word.length;
let conjugate = '';

if (word[wordLength-2] === '하'){
  conjugate = word.slice(0, wordLength-2);
  conjugate = conjugate.concat('해');
  console.log('shoked', conjugate);
  return;
}

let brokeWord = breakdown(word[wordLength-2]);
let brokeLength = brokeWord.length;

if(brokeWord[brokeLength-1] === 0){
  conjugate = word.slice(0, wordLength-1);
  console.log('broke', conjugate);
  return;
}

if(brokeWord[brokeLength-1] === 8){
  conjugate = word.slice(0, wordLength-1);
  conjugate = conjugate.concat('아');
console.log('yoked', conjugate);
return;
}

conjugate = word.slice(0, wordLength-1);
conjugate = conjugate.concat('어');
console.log('smoked', conjugate);
return;
}

//conjugate('주어다');
reverseBreakdown([0, 8]);
