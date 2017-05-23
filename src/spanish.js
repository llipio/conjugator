const regularVerbConjugation = {
  present: {
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
  },
  future: {
    ar: {
      yo: 'é',
      tú: 'ás',
      'él/ella/Ud.': 'á',
      'nosotros/nosotras': 'emos',
      'vosotros/vosotras': 'éis',
      'ellos/ellas/Uds.': 'án'
    },
    er: {
      yo: 'é',
      tú: 'ás',
      'él/ella/Ud.': 'á',
      'nosotros/nosotras': 'emos',
      'vosotros/vosotras': 'éis',
      'ellos/ellas/Uds.': 'án'
    },
    ir: {
      yo: 'é',
      tú: 'ás',
      'él/ella/Ud.': 'á',
      'nosotros/nosotras': 'emos',
      'vosotros/vosotras': 'éis',
      'ellos/ellas/Uds.': 'án'
    }
  },
  past: {
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
  }
};

const allInfo = {
  tense: ['present', 'future', 'past'],
  pronoun: ['yo', 'tú', 'él/ella/Ud.', 'nosotros/nosotras', 'vosotros/vosotras', 'ellos/ellas/Uds.']
};

class Spanish {
  conjugate (word, info) {
    const ending = word.slice(-2);
    const stem = word.slice(0, -2);
    const ERROR_MESSAGE = 'Unable to conjugate';

    if (ending === 'ar' || ending === 'er' || ending === 'ir') {
      return stem.concat(regularVerbConjugation[ending][info.pronoun]);
    }
    return ERROR_MESSAGE;
  }

  getInfoList () {
    return allInfo;
  }
}

export { Spanish };
