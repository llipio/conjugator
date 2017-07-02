/** the conjugate returns a conjugate verb, but it should be checked for tense, past tense will take present tense verb and then add something to the the verb, and then add an additional letter after **/

/** Additional Functions **/
// reference: http://www.programminginkorean.com/programming/hangul-in-unicode/composing-syllables-in-unicode/
// input: hangul character
// output: returns an array of components that make up the given hangul
// ex: breakdown('린') outputs [5,20,4]
const breakdown = (input) => {
  let total = parseInt(input.charCodeAt(0).toString(16), 16);

  const letterArray = [];
  total -= 44032;
  const initialValue = Math.floor(total / 588);
  letterArray.push(initialValue);
  total -= (588 * initialValue);
  const medialValue = Math.floor(total / 28);
  letterArray.push(medialValue);
  const finalValue = total - (28 * medialValue);
  if (finalValue > 0) {
    letterArray.push(finalValue);
  }
  return letterArray;
};

// input: array of 2 or 3 numbers representing modern jamo (components) that make up a hangul syllable
// output: a hangul character
const combineSymbols = (input) => {
  let unicodeTotal = (input[0] * 588) + (input[1] * 28) + 44032;
  if (input.length === 3) {
    unicodeTotal += input[2];
  }
  return String.fromCharCode(unicodeTotal);
};

const allInfo = {
  tense: ['present', 'past', 'future', 'present continuous', 'prepared', 'truncated', 'conditional'],
  formality: ['formal', 'casual'],
};

class Korean {
  getAllInfo () {
    return allInfo;
  }

  conjugate (word, info) {
  // Format for rulesObject: { tense: 'Present', formality: 'Casual/Formal'}
  // TODO: test if word is verb, return to avoid switch
    let result = '';
    switch (info.tense.toLowerCase()) {
      case 'present':
        result = this.doPresent(word);
        break;
      case 'past':
        result = this.doPast(word);
        break;
      case 'future':
        result = this.doFuture(word);
        break;
      case 'present continuous':
        return this.doPresentContinuous(word);
      case 'prepared': {
        const futureConjugation = this.doFuture(word);
        // simply drop the ' 거야' at the end of future conjugation
        return futureConjugation.substring(0, futureConjugation.length - 3);
      }
      case 'truncated':
        return word.substring(0, word.length - 1);
      case 'conditional':
        return this.doConditional(word);
      default:
        return `Could not find any rules for ${info.tense}`;
    }

    if (info.formality && info.formality.toLowerCase() === 'formal') {
      return `${result}요`;
    }
    return result;
  }

  doPresent (word) {
    const wordLength = word.length;
    let conjugate = '';
    // if the ending is 'ha' then convert to 'hae'
    if (word[wordLength - 2] === '하') {
      conjugate = word.slice(0, wordLength - 2);
      return conjugate.concat('해');
    } else if (word[wordLength - 2] === '르') {
      const sliced = word.slice(0, wordLength - 2);
      let stem = [];
      // when the stem word is longer than one letter
      if (sliced.length > 1) {
        conjugate = sliced.slice(0, sliced.length - 1);
        stem = breakdown(sliced.charAt(sliced.length - 1));
      } else {
        stem = breakdown(word.slice(0, wordLength - 2));
      }
      stem.push(8); // ㄹ
      const newSyllable = `${conjugate}${combineSymbols(stem)}`;
      switch (stem[stem.length - 2]) {
        case 0:
        case 8:
          // ㅏ and ㅗ are followed by 라
          return newSyllable.concat('라');
        default:
          // other vowels are followed by 러
          return newSyllable.concat('러');
      }
    } else if (word[wordLength - 2] === '있') {
      return `${word.slice(0, wordLength - 1)}어`;
    } else {
      /** breakdown the word to find out the 2nd to last character's letter **/
      const brokeWord = breakdown(word[wordLength - 2]);
      const brokeLength = brokeWord.length;
      const syllableEnd = brokeWord[brokeLength - 1];
      const stemWord = word.slice(0, wordLength - 2);
      let newSyllable = brokeWord.slice(0, brokeLength - 1);

      switch (syllableEnd) {
        case 0:
        case 4:
          // if last letter is ㅏ leave alone
          return word.slice(0, wordLength - 1);
        case 1:
        case 8:
        case 5:
        case 9:
          if (syllableEnd === 1 && brokeWord.length < 3) {
            // if last letter is simply ㅏ leave alone
            return word.slice(0, wordLength - 1);
          } else if (brokeWord.length > 2) {
            // ㅗㄹ, ㅏㄹ, ㅜㄹ, ㅓㄹ, ㅗㄱ, ㅏㄱ, ㅜㄱ, ㅓㄱ
            switch (brokeWord[brokeLength - 2]) {
              case 0:
              case 8:
                // if the medial jamo is ㅏ or ㅗ
                return `${word.slice(0, wordLength - 1)}아`;
              case 4:
              case 13:
                // if the medial jamo is ㅓ or ㅜ
                return `${word.slice(0, wordLength - 1)}어`;
              default:
                break;
            }
          } else {
            // replace with: ㅘ (9)
            // concat back to word
            newSyllable.push(9);
            newSyllable = combineSymbols(newSyllable);
            return stemWord + newSyllable;
          }
          break;
        case 7:
          switch (brokeWord[brokeLength - 2]) {
            case 0:
            case 8:
              // if the medial jamo is ㅏ or ㅗ
              return `${word.slice(0, wordLength - 1)}아`;
            case 4:
            case 18:
              // if the medial jamo is ㅓ or ㅡ, replace with: ㄹ (8)
              newSyllable.push(8);
              newSyllable = combineSymbols(newSyllable);
              return `${stemWord + newSyllable}어`;
            case 13:
              // if the medial jamo is ㅓ or ㅜ
              return `${word.slice(0, wordLength - 1)}어`;
            default:
              break;
          }
          break;
        case 18:
          // vowel ㅡ replace with ㅓ (4)
          newSyllable.push(4);
          newSyllable = combineSymbols(newSyllable);
          if (wordLength <= 2) {
            return newSyllable;
          }
          return stemWord + newSyllable;
        case 13:
          // 13 (ㅜ) convert to 14 (ㅝ)
          newSyllable.push(14);
          newSyllable = combineSymbols(newSyllable);
          if (wordLength <= 2) {
            return newSyllable;
          }
          return stemWord + newSyllable;
        case 20:
          // vowel ㅣ replace with ㅕ(6)
          newSyllable.push(6);
          newSyllable = combineSymbols(newSyllable);
          if (wordLength <= 2) {
            return newSyllable;
          }
          return stemWord + newSyllable;
        default:
          // if consonant
          conjugate = word.slice(0, wordLength - 1);
          return conjugate.concat('어');
      }
    } // end of first else
  } // end of presentWord function

  doPresentContinuous (word) {
    return `${word.substring(0, word.length - 1)}고있어`;
  }

  doPast (word) {
    const presentTense = this.doPresent(word);
    let origin = '';
    let brokenWord = '';
    if (presentTense.length > 1) {
      origin = presentTense.slice(0, presentTense.length - 1);
      brokenWord = breakdown(presentTense.charAt(presentTense.length - 1));
    } else {
      brokenWord = breakdown(presentTense);
    }
    brokenWord.push(20);
    return `${origin}${combineSymbols(brokenWord)}어`;
  }

  doFuture (word) {
    const preStem = word.slice(0, -2);
    const stem = breakdown(word[word.length - 2]);
    if (stem.length < 3) { // does not have bottom consonant
      stem.push(8); // push ㄹ as bottom consonant
      return `${preStem}${combineSymbols(stem)} 거야`;
    }

    // check the bottom consonant
    switch (stem[stem.length - 1]) {
      case 17: // ㅂ
        if (stem[stem.length - 2] === 20) { // special case: if medial jamo is 'ㅣ'
          return `${preStem}${combineSymbols(stem)}을 거야`;
        }
        stem.pop();
        return `${preStem}${combineSymbols(stem)}울 거야`;
      case 8: // ㄹ
        return `${preStem}${combineSymbols(stem)} 거야`;
      case 7: // ㄷ
        stem[stem.length - 1] = 8;
        return `${preStem}${combineSymbols(stem)}을 거야`;
      default:
        return `${preStem}${combineSymbols(stem)}을 거야`;
    }
  }

  doConditional (word) {
    const stem = breakdown(word[word.length - 2]);
    const stemLen = stem.length;
    const truncatedWord = word.substring(0, word.length - 1);
    if (stemLen < 3) { // does not have bottom consonant
      return truncatedWord;
    }

    // irregular case:
    if (stem[stemLen - 1] === 7 && // if bottom consonant is ㄷ
      (stem[stemLen - 2] === 4 || stem[stemLen - 2] === 18)) { // if vowel is ㅓ or ㅡ
      stem[stemLen - 1] = 8; // replace it with ㄹ
    }
    return `${combineSymbols(stem)}으`;
  }
} // end for class

export { Korean };
