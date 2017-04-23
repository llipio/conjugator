class Hindi {

  conjugate (word, info) {
    // Format for info:
    // { tense: 'past/present/future', gender: 'm/f', formal: true/false, wordType: 'adjective/verb' }

    word = word.trim().toLowerCase();
    const tense = (info.tense || '').trim().toLowerCase();
    const gender = (info.gender || '').trim().toLowerCase();

    const TENSE_ERROR = `You entered a tense that we don't know about: "${tense}". The tenses that we support are "past", "present", and "future".`;
    const GENDER_ERROR = `You entered a gender that we don't know about: "${gender}". The genders that we support are "m" and "f".`;

    switch (tense) {
      case 'present':
        switch (gender) {
          case 'm':
            return word.replace(/na$/, 'ta hun');
          case 'f':
            return word.replace(/na$/, 'ti hun');
          default:
            throw new Error(GENDER_ERROR);
        }
      case 'past':
        switch (gender) {
          case 'm':
            return word.replace(/na$/, 'ta tha');
          case 'f':
            return word.replace(/na$/, 'ti thi');
          default:
            throw new Error(GENDER_ERROR);
        }
      case 'future':
        switch (gender) {
          case 'm':
            return word.replace(/na$/, 'nga');
          case 'f':
            return word.replace(/na$/, 'ungi');
          default:
            throw new Error(GENDER_ERROR);
        }
      default:
        throw new Error(TENSE_ERROR);
    }
  }
}

export default { Hindi };
