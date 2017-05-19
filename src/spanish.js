class Spanish {
  conjugate (word, info) {
    const ending = word.slice(word.length - 2, word.length);

    if (ending === 'ar' || ending === 'er' || ending === 'ir') {
      switch (info.tense) {
        case 'present':
          return this.presentTenseConjugator(word, ending, info);
        case 'future':
          return 'future';
        case 'past':
          return 'past';
        default:
          return word;
      }
    } else {
      return word;
    }
  }
  presentTenseConjugator (word, ending, info) {
    if (ending === 'ar') {
      switch (info.noun) {
        case 'yo':
          return `${word.slice(0, -2)}o`;
        case 'tú':
          return `${word.slice(0, -2)}as`;
        case 'ud.':
        case 'él':
        case 'ella':
          return `${word.slice(0, -2)}a`;
        case 'nosotros':
        case 'nosotras':
          return `${word.slice(0, -2)}amos`;
        case 'vosotros':
        case 'vosotras':
          return `${word.slice(0, -2)}áis`;
        case 'uds':
        case 'ellos':
        case 'ellas':
          return `${word.slice(0, -2)}an`;
        default:
          return word;
      }
    } else if (ending === 'er') {
      switch (info.noun) {
        case 'yo':
          return `${word.slice(0, -2)}o`;
        case 'tú':
          return `${word.slice(0, -2)}es`;
        case 'ud.':
        case 'él':
        case 'ella':
          return `${word.slice(0, -2)}e`;
        case 'nosotros':
        case 'nosotras':
          return `${word.slice(0, -2)}emos`;
        case 'vosotros':
        case 'vosotras':
          return `${word.slice(0, -2)}éis`;
        case 'uds':
        case 'ellos':
        case 'ellas':
          return `${word.slice(0, -2)}en`;
        default:
          return word;
      }
    } else {
      switch (info.noun) {
        case 'yo':
          return `${word.slice(0, -2)}o`;
        case 'tú':
          return `${word.slice(0, -2)}es`;
        case 'ud.':
        case 'él':
        case 'ella':
          return `${word.slice(0, -2)}e`;
        case 'nosotros':
        case 'nosotras':
          return `${word.slice(0, -2)}imos`;
        case 'vosotros':
        case 'vosotras':
          return `${word.slice(0, -2)}ís`;
        case 'uds':
        case 'ellos':
        case 'ellas':
          return `${word.slice(0, -2)}en`;
        default:
          return word;
      }
    }
  }
  }
export { Spanish };
