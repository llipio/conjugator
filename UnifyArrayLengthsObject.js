const _ = require("underscore")

function unifyLengthArrays (obj) {
  let maxLength = 0;

  for (key in obj) {
    if (obj[key].length > maxLength) {
      maxLength = obj[key].length;
    }
  }

  for (key in obj) {
    if (obj[key].length < maxLength) {
      const timesSmaller = Math.ceil(maxLength / obj[key].length);
      let arrStr = obj[key].join() + ',';
      arrStr = arrStr.repeat(timesSmaller);
      arrStr = arrStr.slice(0, -1);
      const newArr = arrStr.split(',');
      obj[key] = newArr.slice(0, maxLength);
    }
  }
  return obj;
}

const obj = {
  a: ['a','n','k','hu'],
  b: ['rt','re'],
  c: ['f','lo','ok']
};
console.log(unifyLengthArrays (obj));
