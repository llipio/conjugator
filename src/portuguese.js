
class PresenteIndicativo {
  conjugate (word, info) {
    let ending = [];
    switch (word.slice(-2)) {
      case 'ar':
        if (info.singular) ending = ['o', 'as', 'a'];
        else ending = ['amos', 'ais', 'am'];
        break;
      case 'er':
        if (info.singular) ending = ['o', 'es', 'e'];
        else ending = ['emos', 'eis', 'em'];
        break;
      case 'ir':
        if (info.singular) ending = ['o', 'es', 'e'];
        else ending = ['imos', 'is', 'em'];
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

export { Portuguese };
