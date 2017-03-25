function verbConjugator(str) {
  if (str.charAt(str.length - 2) === "하") {
    console.log(str.substring(0, str.length - 2) +  "해");
}
}


verbConjugator("사랑하다");
