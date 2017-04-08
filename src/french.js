class French {

  conjugate (word, info) {
    // Format for info: {tense: 'present', formal: 'true/false', gender: 'female/male/undefined', singular: 'true/false/undefined', person: '1'/'2'/'3'}
    //TODO define 3 verb group types

   switch (info.tense) {
     case 'present':
       return this.doPresent(word, info);
       break;
     default:
       return 'Could not find any rules for conjugation';
   }
  }

  defineVerbType (word) {
    const group3 = ['avoir', 'être'];

    if (group3.indexOf(word) > -1 || word.slice(-2) === 're') {
      if (word === 'être') {
        return 'être';
      } else if (word === 'avoir') {
        return 'avoir';
      } else {
        //TODO
      }
    } else if (word.slice(-2) === 'er') {
      //TODO
    } else if (word.slice(-2) === 'ir') {
      //TODO
    }
  }

  doPresent (word, info) {
    const verbType = this.defineVerbType(word);
    switch (verbType) {
      case 'être':
        switch (info.person) {
          case '1':
            if (info.singular === true) {
              return 'suis';
            } else {
              return 'sommes';
            }
            break;
          case '2':
            if (info.singular === true && info.formal === false) {
              return 'es';
            } else {
              return 'êtes';
            }
            break;
          case '3':
            if (info.singular === true || info.singular === 'undefined') {
              return 'est';
            } else {
              return 'sont';
            }
            break;
          }
          break;
        default:
          return 'Verb not in our database';
    }
  }
}

export { French };
