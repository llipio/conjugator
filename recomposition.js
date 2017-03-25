// reference: http://www.programminginkorean.com/programming/hangul-in-unicode/composing-syllables-in-unicode/
// input: array of 2 or 3 numbers representing modern jamo (components) that make up a hangul syllable
// output: unicode number representing a hangul character

const recomposition = (arr) => {
  let UnicodeTotal = (arr[0] * 588) + (arr[1] * 28) + 44032;
  if(arr.length === 3) {
    UnicodeTotal += arr[2];
  }
  return UnicodeTotal;
}
