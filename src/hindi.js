const allInfo = {
  tense: ['present', 'past', 'future'],
  gender: ['female', 'male'],
};

class Hindi {
  getAllInfo () {
    return allInfo;
  }

  conjugate (word, info) {
    // Format for info:
    // {tense: 'past/present/future', gender: 'male/female'}
    word = word.trim().toLowerCase();

    switch (info.tense.toLowerCase()) {
      case 'present':
        if (info.gender && info.gender.toLowerCase() === 'male') {
          return word.replace(/na$/, 'ta hun');
        }
        return word.replace(/na$/, 'ti hun');
      case 'past':
        if (info.gender && info.gender.toLowerCase() === 'male') {
          return word.replace(/na$/, 'ta tha');
        }
        return word.replace(/na$/, 'ti thi');
      case 'future':
        if (info.gender && info.gender.toLowerCase() === 'male') {
          return word.replace(/na$/, 'nga');
        }
        return word.replace(/na$/, 'ungi');
      default:
        return `Could not find any rules for ${info.tense}`;
    }
  }
}

export { Hindi };
