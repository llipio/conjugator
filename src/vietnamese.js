class Vietnamese {
  conjugate (word, info) {
    // format for info:
    // { tense: 'past/present/future/present continuous/past continuous/future continuous'}
    word = word.trim().toLowerCase();

    switch (info.tense.toLowerCase()) {
      case 'present':
        return word;
      case 'past':
        return `đã ${word} / ${word} rồi`;
      case 'future':
        return `sẽ ${word}`;
      case 'present continuous':
        return `đang ${word}`;
      case 'past continuous':
        return `đã đang ${word}`;
      case 'future continuous':
        return `đang sẽ ${word}`;
      default:
        return `Could not find any rules for ${info.tense}`;
    }
  }
}

export { Vietnamese };
