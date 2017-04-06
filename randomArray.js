const _ = require("underscore")

function mixedArray1 (arr) {
  const newArr = _.shuffle(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newArr[i]){
      newArr.splice(i, 1);
      const randomIndex = Math.floor(Math.random() * newArr.length);
      const randomElement = newArr[randomIndex];
      newArr.splice(randomIndex, 1, arr[i]);
      newArr.splice(i, 0, randomElement);
    }
  }
  return newArr;
}

console.log(mixedArray1([4,8,5,7,9,0]));
