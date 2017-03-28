class Korean {

  conjugate (word, info) {
    // Format for rulesObject: { tense: 'present', formal: 'true/false', wordType: 'adjective/verb'}
    // TODO: test if word is verb, return to avoid switch
   switch (info.tense) {
     case 'present':
       return this.doPresent(word);
       break;
      // case 'past':
      //   return this.doPast(word);
     default:
     return 'Could not find any rules for conjugation';
   }
 }

 doPresent(word) {
    let wordLength = word.length;
    let conjugate = '';
    // if the ending is 'ha' then convert to 'hey'
    if (word[wordLength - 2] === '하') {
        conjugate = word.slice(0, wordLength - 2);
        return conjugate.concat('해');
    } else {
      /** breakdown the word to find out the 2nd to last character's letter **/
      let brokeWord = breakdown(word[wordLength - 2]);
      let brokeLength = brokeWord.length;
      let syllableEnd = brokeWord[brokeLength - 1];
      let stemWord = word.slice(0, wordLength - 2);
      if(syllableEnd === 0) {
          // if last letter is ㅏ leave alone
          return word.slice(0, wordLength - 1);;
      } else if(syllableEnd === 8) {
        // replace with: ㅘ (9)
          // concat back to word
          let newSyllable = brokeWord.slice(0, brokeLength - 1);
          newSyllable.push(9);
          newSyllable = reverseBreakdown(newSyllable);
          return stemWord + newSyllable;
      } else if(syllableEnd === 18) {
      // vowel ㅡ replace with ㅓ (4)
        let newSyllable = brokeWord.slice(0, brokeLength - 1);
            newSyllable.push(4);
            newSyllable = reverseBreakdown(newSyllable);
          if(wordLength <= 2) {
            return newSyllable;
          } else {
            return stemWord + newSyllable;
          }
     } 
     else if (syllableEnd === 13) {
      // 13 (ㅜ) convert to 14 (ㅝ)
      let newSyllable = brokeWord.slice(0, brokeLength - 1);
            newSyllable.push(14);
            newSyllable = reverseBreakdown(newSyllable);
          if(wordLength <= 2) {
            return newSyllable;
          } else {
            return stemWord + newSyllable;
          }
     }
     else if(syllableEnd === 20) {
      // vowel ㅣ replace with ㅕ(6)
          let newSyllable = brokeWord.slice(0, brokeLength - 1);
          newSyllable.push(6)
          newSyllable = reverseBreakdown(newSyllable);
          if(wordLength <= 2) {
            return newSyllable;
          } else {
            return stemWord + newSyllable;
          }
      } else {
          // if consonant
          // need to find consonant
          conjugate = word.slice(0, wordLength - 1);
          return conjugate.concat('어');
      }
    } // end of first else
  } // end of presentWord function

  doPast(word) {
    let presentWord = doPresent(word);
    // stuff for past tense
  }
} // end for class


/** the conjugate returns a conjugate verb, but it should be checked for tense, past tense will take present tense verb and then add something to the the verb, and then add an additional letter after **/

/** Additional Functions **/

function breakdown(input){
    const hex = '\\u' + (input.charCodeAt(0) + 0x10000).toString(16).slice(1);
    const numHex = hex.substring(2);
    let total = parseInt(numHex, 16);

    let letterArray = [];
    total = total - 44032;
    let initialValue = Math.floor(total / 588);
    letterArray.push(initialValue);
    total = total - (588 * initialValue);
    let medialValue = Math.floor(total / 28);
    letterArray.push(medialValue);
    let finalValue = total - (28 * medialValue);
    if (finalValue > 0) {
        letterArray.push(finalValue);
    }
    return letterArray;
}

function reverseBreakdown(input) {
    let initialValue = input[0] * 588;
    let medialValue = input[1] * 28;
    let finalValue = input[3] ? input[3] : 0;
    let total = initialValue + medialValue + finalValue + 44032;
    let finalWord = String.fromCharCode(total);
    return finalWord;
}


export { Korean };