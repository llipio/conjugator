class Spanish {
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
