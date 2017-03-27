// reference: http://www.programminginkorean.com/programming/hangul-in-unicode/composing-syllables-in-unicode/
// input: hangul character
// output: returns an array of components that make up the given hangul
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

