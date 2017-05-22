const presentTenseConjugationMap = {
  ar: {
    yo: 'o',
    tú: 'as',
    'él/ella/Ud.': 'a',
    'nosotros/nosotras': 'amos',
    'vosotros/vosotras': 'áis',
    'ellos/ellas/Uds.': 'an'
  },
  er: {
    yo: 'o',
    tú: 'es',
    'él/ella/Ud.': 'e',
    'nosotros/nosotras': 'emos',
    'vosotros/vosotras': 'éis',
    'ellos/ellas/Uds.': 'en'
  },
  ir: {
    yo: 'o',
    tú: 'es',
    'él/ella/Ud.': 'e',
    'nosotros/nosotras': 'imos',
    'vosotros/vosotras': 'ís',
    'ellos/ellas/Uds.': 'en'
  }
};

const futureTenseConjugationMap = {
  yo: 'é',
  tú: 'ás',
  'él/ella/Ud.': 'á',
  'nosotros/nosotras': 'emos',
  'vosotros/vosotras': 'éis',
  'ellos/ellas/Uds.': 'án'
};

const pastTenseConjugationMap = {
  ar: {
    yo: 'é',
    tú: 'aste',
    'él/ella/Ud.': 'ó',
    'nosotros/nosotras': 'amos',
    'vosotros/vosotras': 'asteis',
    'ellos/ellas/Uds.': 'aron'
  },
  er: {
    yo: 'í',
    tú: 'iste',
    'él/ella/Ud.': 'ió',
    'nosotros/nosotras': 'imos',
    'vosotros/vosotras': 'isteis',
    'ellos/ellas/Uds.': 'ieron'
  },
  ir: {
    yo: 'í',
    tú: 'iste',
    'él/ella/Ud.': 'ió',
    'nosotros/nosotras': 'imos',
    'vosotros/vosotras': 'isteis',
    'ellos/ellas/Uds.': 'ieron'
  }
};
const allInfo = {
  tense: ['present', 'future', 'past'],
  pronoun: ['yo', 'tú', 'él/ella/Ud.', 'nosotros/nosotras', 'vosotros/vosotras', 'ellos/ellas/Uds.']
};

class Spanish {
  conjugate (word, info) {
    const ending = word.slice(word.length - 2, word.length);
    const stem = word.slice(0, -2);
    const ERROR_MESSAGE = {
      FOR_TENSE: 'Please select a valid tense: present, future, past.',
      FOR_ENDING: 'Please enter a word with valid ending: ar, er, ir.'
    };

    if (ending === 'ar' || ending === 'er' || ending === 'ir') {
      switch (info.tense) {
        case 'present':
          return stem.concat(presentTenseConjugationMap[ending][info.pronoun]);
        case 'future':
          return word.concat(futureTenseConjugationMap[info.pronoun]);
        case 'past':
          return stem.concat(pastTenseConjugationMap[ending][info.pronoun]);
        default:
          return ERROR_MESSAGE.FOR_TENSE;
      }
    } else {
      return ERROR_MESSAGE.FOR_ENDING;
    }
  }

  getInfoList () {
    return allInfo;
  }
}

export { Spanish };
