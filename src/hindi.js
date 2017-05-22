const allInfo = {
  tense: ['Present', 'Past', 'Future'],
  gender: ['female', 'male'],
};

class Hindi {
  getAllInfo () {
    return allInfo;
  }

  conjugate (word, info) {
    // Format for info:
    // {tense: 'Past/Present/Future', gender: 'male/female'}
    word = word.trim().toLowerCase();

    switch (info.tense) {
      case 'Present':
        switch (info.gender) {
          case 'male':
            return word.replace(/na$/, 'ta hun');
          case 'female':
            return word.replace(/na$/, 'ti hun');
          default:
            throw new Error(GENDER_ERROR);
        }
      case 'Past':
        switch (info.gender) {
          case 'male':
            return word.replace(/na$/, 'ta tha');
          case 'female':
            return word.replace(/na$/, 'ti thi');
          default:
            throw new Error(GENDER_ERROR);
        }
      case 'Future':
        switch (info.gender) {
          case 'male':
            return word.replace(/na$/, 'nga');
          case 'female':
            return word.replace(/na$/, 'ungi');
          default:
            throw new Error(GENDER_ERROR);
        }
      default:
        throw new Error(TENSE_ERROR);
    }
  }
}

export { Hindi };
