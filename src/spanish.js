class Spanish {
  conjugate(word,info){

    let ending = word.slice(word.length-2,word.length);
    const NOUN_ERROR = 'Please input yo, tû, Ud., él, or ella for the noun';

    switch (info.noun){
      case 'yo':
        return word.slice(0,-2) + 'o'
      default:
        throw new Error(NOUN_ERROR);
    }
  }
}

export { Spanish };
