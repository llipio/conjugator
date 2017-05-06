const _ = require("underscore")

function mixedArray1 (arr) {
  const newArr = _.shuffle(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newArr[i]){
      const randomBag = newArr.slice(0,i).concat(newArr.slice(i+1));
      const randomIndex = Math.floor(Math.random() * randomBag.length);
      const randomElement = randomBag[randomIndex];
      newArr[i] = randomElement;
      if (randomIndex >= i) {
        newArr[randomIndex + 1] = arr [i];
      } else {
        newArr[randomIndex] = arr [i];
      }
    }
  }
  return newArr;
}

console.log(mixedArray1([4,8,5,7,9,0]));
