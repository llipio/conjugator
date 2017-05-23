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
        if (info.gender === 'male') {
          return word.replace(/na$/, 'ta hun');
        }
        return word.replace(/na$/, 'ti hun');
      case 'Past':
        if (info.gender === 'male') {
          return word.replace(/na$/, 'ta tha');
        }
        return word.replace(/na$/, 'ti thi');
      case 'Future':
        if (info.gender === 'male') {
          return word.replace(/na$/, 'nga');
        }
        return word.replace(/na$/, 'ungi');
      default:
        return 'tense not implemented yet';
    }
  }
}

export { Hindi };
