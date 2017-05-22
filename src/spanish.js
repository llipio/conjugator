const allInfo = {
  tense: ['Present', 'Past', 'Future'],
  gender: ['female', 'male'],
  formality: ['casual', 'formal'],
  subject: ['yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes']
};

class Spanish {
  getAllInfo () {
    return allInfo;
  }

  conjugate (word, info) {
    const NOUN_ERROR = 'Please input yo, tû, Ud., él, or ella for the noun';

    switch (info.subject) {
      case 'yo':
        return `${word.slice(0, -2)}o`;
      default:
        throw new Error(NOUN_ERROR);
    }
  }
}

export { Spanish };
