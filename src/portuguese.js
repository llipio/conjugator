
class Portuguese {

  conjugate(word, info) {
    switch(info.mood.toLowerCase()) {
      case 'indicativo': 
        return new Indicativo().conjugate(word, info);
      default:
        return 'unkown';
    }
  }

};

class Indicativo {
  conjugate(word, info) {
    switch(info.tense.toLowerCase()) {
      case 'presente': 
        return new PresenteIndicativo().conjugate(word, info);
      default:
        return 'unkown';
    }
  }
}

class PresenteIndicativo {
  conjugate(word, info) {
    var ending = ['amos', 'ais', 'am'];
    if(info.singular) {
      ending = ['o', 'as', 'a'];
    } 
    return word.slice(0, -2) + ending[parseInt(info.person, 10)-1];
  }
}

export {Portuguese};