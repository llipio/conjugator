class French {
  /*
      word: verb in infinitif form -> can be divided in a stem and an ending
        TODO: pronominal verbs: 'se' + infinitif
        TODO: passive form: 'être' + past participle
      info: {
        tense: 'present'/'past'/'future'/'simple past'/..., (!!!tenses different from english tenses)
        person (subject): '1'/'2'/'3',
          '1': Je, nous (I, we),
          '2': tu, vous (you),
          '3': he, she, they, it, undefined ('on', people, infinitif verb, object, 'ça', 'cela', ...)
        singular: 'true/false',
          if undefined subject: 'on' (english: we as a whole, it), people, infinitif verb, qui, tout, rien, object -> is considered singular -> true
          ! 'on' can also be used instead of 'nous' (but this use is to be avoided) -> is considered plural -> false
          true -> singular -> 's'
          false -> plural -> 'p'
        formal: 'true/false',
          'vous' can be used to adress a singular person in a formal way -> if the subject is 's2' and formal, it is conjugated as 'p2', but the past participle stays singular
        gender: 'female/male/unknown',
          undefined subject: ils (english: they), nous (english: we) , vous (you, adressing a group of persons), the people -> is conjugated as male, when we don't know who 'they', 'nous', 'vous' represent (male or female)
          unknown: only for 'on' with the meaning 'it'
          ! 'on' and objects 'can' also have a gender !
      }
  */
  conjugate (word, info) {
   switch (info.tense) {
     case 'present':
       return this.doPresent(word, info);
       break;
     default:
       return 'Could not find any rules for conjugation';
   }
  }

  findSubject (info) {
    // returns the subject for conjugation: 's1'/'s2'/'s3'/'p1'/'p2'/'p3'
    if (info.singular === true) {
      if (info.person === '2' && info.formal === true){
        //if the subject ('you') is meant as formal and singular, it is conjugated as plural, but the past participle stays singular
        return 'p2';
      }
      return 's' + info.person;
    } else {
      if (info.person === '3' && info.gender === 'unknown'){
        //if the subject is plural and undefined ('on'), is is conjugated as singular, but the past participle stays plural
        return 's3';
      }
      return 'p' + info.person;
    }
  }

  findWordGroup (word) {
    // returns group1/group2/group3 depending on ending of the infinif form of the verb
    // group1: all verbs ending in -er except the verb 'aller'
    // group2: all verbs ending in -ir except the irregular verbs ending in -ir
    // group3: irregular verbs ending in -ir, -re, -oir, TODO define subgroups
    let stem = word.slice(0, -2);
    let ending = word.slice(-2);
    if (ending === 'er') {
      return ['group1', stem];
    } else if ((ending === 'ir' || ending === 'ïr') && stem.slice(-1) !== 'o') {
      if (/tenir$/.test(word) || /venir$/.test(word)) {
        return ['group3', stem];
      } else if (/quérir$/.test(word)) {
        return ['group3', stem];
      }
      //TODO finish defining group3 and group2
    }
  }

  combineToConjugate (group, stem, ending) {
    // the last letter of the stem and the first letter of the tense ending affect each other in some specific cases
    // in some cases there are several stem solutions
    // those cases apply to all tenses
    let combinations = [];
    if (group === 'group1') {
      // rules for group1: verbs ending in -er
      if (ending.charAt(0) === 'a' || ending.charAt(0) === 'o') {
        // cases of tense endings: 'a' or 'o'
        if (stem.charAt(stem.length - 1) === 'c') {
          // verbs ending in -cer
          return [stem.slice(0, -1) + 'ç' + ending];
        } else if (stem.charAt(stem.length - 1) === 'g') {
          // verbs ending in -ger
          return [stem + 'e' + ending];
        }
      }
      if (ending.charAt(0) === 'e' && ending.charAt(1) !== 'z') {
        // cases of tense endings: '-e', '-es', '-ent' and '-er(.)'
        const globalPattern = /e[cmnprsvlt]/;
        if (globalPattern.test(stem.slice(-2)) || stem.slice(-3) === 'evr') {
          // verbs ending in -e(.)er and (.) can only be either 'c', 'm', 'n', 'p', 'r', 's', 'v', 'vr', 'l', 't'
          if (stem.slice(-2) === 'el' || stem.slice(-2) === 'et') {
            // verbs ending in -eler or -eter
            // special cases of -el and -et that always become -èl and -èt
            const elExceptions = ['cel', 'décel', 'recel', 'cisel', 'démantel', 'écartel', 'encastel', 'gel', 'dégel', 'congel', 'surgel', 'décongel', 'martel', 'model', 'pel', 'remodel'];
            const etExceptions = ['achet', 'rachet', 'béguet', 'corset', 'crochet', 'filet', 'furet', 'halet'];
            // special cases of -el and -et that always become -ell and -ett
            const patternCase1 = /jet$/;
            const patternCase2 = /appel$/;
            const case3 = 'interpel';

            if(elExceptions.indexOf(stem) !== -1 || etExceptions.indexOf(stem) !== -1) {
              return [stem.slice(0, -2) + 'è' + stem.slice(-1) + ending];
            } else if (patternCase1.test(stem) || patternCase2.test(stem) || stem === case3) {
              return [stem + stem.slice(-1) + ending];
            } else {
              //all other cases can have two solutions: (-èl and -èt) or (-ell and -ett)
              combinations[0] = stem + stem.slice(-1) + ending;
              combinations[1] = stem.slice(0, -2) + 'è' + stem.slice(-1) + ending;
              return combinations;
            }
          } else if (stem.slice(-3) === 'evr') {
            // verbs ending in -evrer
            return [stem.slice(0, -3) + 'èvr' + ending];
          } else {
            // verbs ending in -e(.)er where (.) is either 'c', 'm', 'n', 'p', 'r', 's', 'v'
            return [stem.slice(0, -2) + 'è' + stem.slice(-1) + ending];
          }
        }

        if (/[aou]y/.test(stem.slice(-2))) {
          //verbs ending in -ayer, -oyer or -uyer
          if (/envoy/.test(stem) && ending.charAt(1) === 'r') {
            // exceptions: verbs with '-envoy-' in the stem, like envoyer, renvoyer,...
            return [stem.slice(0, -2) + 'er' + ending.slice(2)];
          } else {
            combinations[0] = stem.slice(0,-1) + 'i' + ending;
            if (stem.charAt(stem.length - 2) === 'a') {
              combinations[1] = stem + ending;
            }
            return combinations;
          }
        }

        if (ending.charAt(1) !== 'r') {
          // cases of endings: '-e', '-es' and '-ent'
          // verbs ending in -é(.)er
          if (stem.substr(-2, 1) === 'é') {
            return [stem.slice(0, -2) + 'è' + stem.slice(-1) + ending];
          } else if (stem.substr(-3, 1) === 'é'){
            return [stem.slice(0, -3) + 'è' + stem.slice(-2) + ending];
          }
        }
      }
      return [stem + ending];
      //end group1
    }
    //TODO define the rules for group2 and group3
  }

  doPresent (word, info) {
    const tenseEnding = {
      group1: {
        s1: 'e',
        s2: 'es',
        s3: 'e',
        p1: 'ons',
        p2: 'ez',
        p3: 'ent'
      },
      group2: {
        s1: 's',
        s2: 's',
        s3: 't',
        p1: 'ons',
        p2: 'ez',
        p3: 'ent'
      }
    };
    const specialVerbs = {
      être: {
        s1: 'suis',
        s2: 'es',
        s3: 'est',
        p1: 'sommes',
        p2: 'êtes',
        p3: 'sont'
      },
      avoir: {
        s1: 'ai',
        s2: 'as',
        s3: 'a',
        p1: 'avons',
        p2: 'avez',
        p3: 'ont'
      },
      aller: {
        s1: 'vais',
        s2: 'vas',
        s3: 'va',
        p1: 'allons',
        p2: 'allez',
        p3: 'vont'
      }
    };

    const subject = this.findSubject (info);

    if (word === 'être' || word === 'avoir' || word === 'aller') {
      return specialVerbs[word][subject];
    }

    const verbProperties = this.findWordGroup (word);
    const group = verbProperties[0];
    const stem = verbProperties[1];

    if (group === 'group1') {
      //temperory test until other groups implemented
      const solutions = this.combineToConjugate(group, stem, tenseEnding[group][subject]);
      if (solutions.length > 1) {
        return solutions[0] + ' / ' + solutions[1];
      } else {
        return solutions[0];
      }
    } else {
      return 'not yet implemented'
    }
  }
}
export { French };
