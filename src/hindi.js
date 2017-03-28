class Hindi {

  conjugate (word, info) {
    // Format for info: { tense: 'present/past', formal: true/false, wordType: 'adjective/verb' }
    word = word.trim();
    switch (info.tense) {
      case 'present':
        return word.replace(/na$/, 'ta hoon');
      default:
        return 'Could not find any rules for conjugation';
    }
  }
}

export { Hindi };

