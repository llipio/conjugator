const allInfo = {
  Tense: ['Present', 'Past', 'Future'],
  Gender: ['Female', 'Male'],
  Formal: ['True', 'False'],
  Subject: ['Yo', 'Tú', 'Él', 'Ella', 'Usted', 'Nosotros', 'Nosotras', 'Vosotros', 'Vosotras', 'Ellos', 'Ellas', 'Ustedes' ]
};

class Spanish {
  getInfoList () {
    return Object.keys(allInfo);
  }

  getInfoOptions (option) {
    return allInfo[option];
  }

  setInfo (infoSite) {
    const info = {
      tense: 'present',
      gender: 'male',
      formal: false,
      noun: 'yo'
    };

    info.tense = infoSite.Tense.toLowerCase();
    if (infoSite.Gender === 'Female') {
      info.gender = 'female';
    }
    if (infoSite.Formal === 'True') {
      info.formal = true;
    }
    info.noun = infoSite.Subject.toLowerCase();
    return info;
  }

  conjugate (word, info) {
    const NOUN_ERROR = 'Please input yo, tû, Ud., él, or ella for the noun';

    switch (info.noun) {
      case 'yo':
        return `${word.slice(0, -2)}o`;
      default:
        throw new Error(NOUN_ERROR);
    }
  }
}

export { Spanish };
