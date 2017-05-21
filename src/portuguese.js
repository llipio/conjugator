
class PresenteIndicativo {
  conjugate (word, info) {
    let ending = [];
    switch (word.slice(-2)) {
      case 'ar':
        ending = info.singular ? ['o', 'as', 'a'] : ending = ['amos', 'ais', 'am'];
        break;
      case 'er':
        ending = info.singular ? ['o', 'es', 'e'] : ['emos', 'eis', 'em'];
        break;
      case 'ir':
        ending = info.singular ? ['o', 'es', 'e'] : ending = ['imos', 'is', 'em'];
        break;
      default:
        break;
    }
    return word.slice(0, -2) + ending[parseInt(info.person, 10) - 1];
  }
}

class Indicativo {
  conjugate (word, info) {
    switch (info.tense.toLowerCase()) {
      case 'presente':
        return new PresenteIndicativo().conjugate(word, info);
      default:
        return 'unkown';
    }
  }
}
class Portuguese {
  conjugate (word, info) {
    switch (info.mood.toLowerCase()) {
      case 'indicativo':
        return new Indicativo().conjugate(word, info);
      default:
        return 'unkown';
    }
  }
}

export default Portuguese;
