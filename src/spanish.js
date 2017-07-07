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
    all: {
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
  verb: {
    tense: ['present', 'future', 'past'],
    subject: ['yo', 'tú', 'él/ella/Ud.', 'nosotros/nosotras', 'vosotros/vosotras', 'ellos/ellas/Uds.']
  }
};

class Spanish {
  getAllInfo () {
    return allInfo;
  }

  conjugate (word, info) {
    let ending = word.slice(-2);
    let stem = word.slice(0, -2);
    const CONJUGATION_ERROR = 'Unable to conjugate verb';

    if (ending === 'ar' || ending === 'er' || ending === 'ir') {
      if (info.tense.toLowerCase() === 'future') {
        stem = word;
        ending = 'all';
      }
      return stem.concat(regularVerbConjugation[info.tense][ending][info.subject]);
    }
    return CONJUGATION_ERROR;
  }
  getInfoList () {
    return allInfo;
  }
}
export { Spanish };
