class Vietnamese {
  conjugate(word, info) {
    // format for info:
    // { tense: 'past/present/future/present progressive/past progressive/future progressive'}
    word = word.trim().toLowerCase();

    switch (info.tense.toLowerCase()) {
      case 'present':
        return word;
      case 'past':
        return `đã ${word} / ${word} rồi`;
      case 'future':
        return `sẽ ${word}`;
      case 'present progressive':
        return `đang ${word}`;
      case 'past progressive':
        return `đã đang ${word}`;
      case 'future progressive':
        return `đang sẽ ${word}`
      default:
      return `Could not find any rules for ${info.tense}`;
    }
  }
}

export { Vietnamese };
