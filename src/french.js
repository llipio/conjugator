const allInfo = {
  tense: ['indicatif présent', 'infinitif présent'],
  /* TODO: 'Indicatif Passé Composé', 'Indicatif Imparfait',
    'Indicatif Plus-que-parfait', 'Indicatif Passé Simple',
    'Indicatif Passé Antérieur', 'Indicatif Futur Simple',
    'Indicatif Futur Antérieur', 'Subjonctif Présent', 'Subjonctif Passé',
    'Subjonctif Imparfait', 'Subjonctif Plus-que-parfait', 'Impératif Présent',
    'Impératif Passé', 'Conditionnel Présent', 'Conditionnel Passé 1',
    'Conditionnel Passé 2', 'Infinitif Passé',
    'Participe Présent', 'Participe Passé'*/
  gender: ['female', 'male', 'unknown'],
  subject: ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'on'],
  singular: ['true', 'false']
};

class French {
  /*
      word: verb in infinitif form -> can be divided in a stem and an ending
        TODO: pronominal verbs: 'se' + infinitif
        TODO: passive form: 'être' + past participle
      info: {
        mood: 'Indicatif'/'Subjonctif'/'Impératif'/'Conditionnel'/'Infinitif'
              /'Participe'
        tense: 'present'/'past'/'future'/'simple past'/...,
              (!!!tenses different from english tenses)
        person (subject): '1'/'2'/'3',
          '1': Je, nous (I, we),
          '2': tu, vous (you),
          '3': he, she, they, it, undefined
              ('on', people, infinitif verb, object, 'ça', 'cela', ...)
        singular: boolean,
          if undefined subject: 'on' (english: we as a whole, it), people,
          infinitif verb, qui, tout, rien, object -> is considered singular
           -> true
          !'on' can also be used instead of 'nous' (but is avoided)
           -> is considered plural -> false
          true -> singular -> 's'
          false -> plural -> 'p'
        formal: boolean,
          'vous' can be used to adress a singular person in a formal way
          -> if the subject is 's2' (singular 2nd person) and formal,
             it is conjugated as 'p2'(plural 2nd person),
             but the past participle stays singular
        gender: 'female/male/unknown',
          undefined subject: ils (english: they), nous (english: we) ,
          vous (you, adressing a group of persons), the people
          -> is conjugated as male, when we don't know who 'they', 'nous',
             'vous' represent (male or female)
          unknown: only for 'on' with the meaning 'it'
          ! 'on' and objects 'can' also have a gender !
      }
  */
  getAllInfo () {
    return allInfo;
  }

  setInfo (inputInfo) {
    const info = { formal: false };

    const tenseAndMood = /(\S+) (.+)/.exec(inputInfo.tense);
    info.mood = tenseAndMood[1];
    info.tense = tenseAndMood[2];

    if (/^e/.test(inputInfo.subject)) {
      info.gender = 'female';
    } else if (/^i/.test(inputInfo.subject)) {
      info.gender = 'male';
    } else {
      info.gender = inputInfo.gender;
    }

    if (/s$/.test(inputInfo.subject)) {
      info.singular = false;
    } else {
      info.singular = true;
    }
    if (inputInfo.subject === 'vous' || inputInfo.subject === 'on') {
      info.singular = (inputInfo.singular === 'true');
      if (inputInfo.subject === 'vous' && info.singular === true) {
        info.formal = true;
      }
    }

    if (inputInfo.subject === 'je' || inputInfo.subject === 'nous') {
      info.person = '1';
    } else if (inputInfo.subject === 'tu' || inputInfo.subject === 'vous') {
      info.person = '2';
    } else {
      info.person = '3';
    }

    return info;
  }

  conjugate (word, inputInfo) {
    const info = this.setInfo(inputInfo);
    switch (info.mood.toLowerCase()) {
      case 'indicatif':
        switch (info.tense.toLowerCase()) {
          case 'présent':
            return this.doIndicatifPresent(word, info);
          case 'passé composé':
          case 'imparfait':
          case 'plus-que-parfait':
          case 'passé simple':
          case 'passé antérieur':
          case 'futur simple':
          case 'futur antérieur':
            return 'not implemented yet';
          default:
            return 'Indicatif Tense not found';
        }
      case 'infinitif':
        switch (info.tense.toLowerCase()) {
          case 'présent':
            return word;
          case 'passé':
            return 'not implemented yet';
          default:
            return 'Infinitif Tense not found';
        }
      case 'participe':
        switch (info.tense.toLowerCase()) {
          case 'présent':
          case 'passé':
            return 'not implemented yet';
          default:
            return 'Participe Tense not found';
        }
      case 'subjonctif':
        switch (info.tense.toLowerCase()) {
          case 'présent':
          case 'passé':
          case 'imparfait':
          case 'plus-que-parfait':
            return 'not implemented yet';
          default:
            return 'Subjonctif Tense not found';
        }
      case 'impératif':
        switch (info.tense.toLowerCase()) {
          case 'présent':
          case 'passé':
            return 'not implemented yet';
          default:
            return 'Impératif Tense not found';
        }
      case 'conditionnel':
        switch (info.tense.toLowerCase()) {
          case 'présent':
          case 'passé 1':
          case 'passé 2':
            return 'not implemented yet';
          default:
            return 'Conditionnel Tense not found';
        }
      default:
        return 'Mood not found';
    }
  }

  getSubject (info) {
    // returns the subject for conjugation: 's1'/'s2'/'s3'/'p1'/'p2'/'p3'
    if (info.singular) {
      if (info.person === '2' && info.formal === true) {
        /* if the subject ('you') is meant as formal and singular,
        it is conjugated as plural, but the past participle stays singular */
        return 'p2';
      }
      return `s${info.person}`;
    }
    if (info.person === '3' && info.gender === 'unknown') {
      /* if the subject is plural and undefined ('on'),
       is is conjugated as singular, but the past participle stays plural */
      return 's3';
    }
    return `p${info.person}`;
  }

  getWordGroup (word) {
    /* returns group1/group2/group3 depending on ending of the infinif form
      of the verb
      group1: all verbs ending in -er except the verb 'aller'
      group2: all verbs ending in -ir except the irregular verbs ending in -ir
      group3: irregular verbs ending in -ir, -re, -oir*/
    const ending = word.slice(-2);
    let stem = word.slice(0, -2);

    if (ending === 'er') {
      return ['group1', stem];
    } else if ((ending === 'ir' || ending === 'ïr') && stem.slice(-1) !== 'o') {
      // all groups of irregular verbs ending in -ir
      if (/[tv]enir$/.test(word)) {
        return ['group3-1', stem];
      } else if (/quérir$/.test(word)) {
        return ['group3-2', stem];
      } else if (/(?:[ms]|rep)entir$/.test(word) || /(?:so|pa)rtir$/.test(word)) {
        return ['group3-3', stem];
      } else if (/vêtir$/.test(word)) {
        return ['group3-4', stem];
      } else if (/ouvrir$/.test(word) || /(?:o|sou)ffrir$/.test(word)) {
        return ['group3-5', stem];
      } else if (/cueillir$/.test(word)) {
        return ['group3-6', stem];
      } else if (/(?:s|f)aillir$/.test(word)) {
        return ['group3-7', stem];
      } else if (/bouillir$/.test(word)) {
        return ['group3-8', stem];
      } else if (/dormir$/.test(word)) {
        return ['group3-9', stem];
      } else if (/courir$/.test(word)) {
        return ['group3-10', stem];
      } else if (/mourir$/.test(word)) {
        return ['group3-11', stem];
      } else if (/(?:s|dess|ress)ervir$/.test(word)) {
        return ['group3-12', stem];
      } else if (/fuir$/.test(word)) {
        return ['group3-13', stem];
      } else if (word === 'ouïr') {
        return ['group3-14', stem];
      } else if (word === 'gésir') {
        return ['group3-15', stem];
      }
      stem += ending.charAt(0);
      return ['group2', stem];
    } else if (ending === 'ir' && stem.slice(-1) === 'o') {
      if (/cevoir$/.test(word)) {
        return ['group3-16', stem];
      } else if (/pourvoir$/.test(word)) {
        return ['group3-17', stem];
      } else if (/savoir$/.test(word)) {
        return ['group3-18', stem];
      } else if (/devoir$/.test(word)) {
        return ['group3-19', stem];
      } else if (/pouvoir$/.test(word)) {
        return ['group3-20', stem];
      } else if (/mouvoir$/.test(word)) {
        return ['group3-21', stem];
      } else if (/pleuvoir$/.test(word)) {
        return ['group3-22', stem];
      } else if (/voir$/.test(word)) {
        return ['group3-23', stem];
      } else if (/falloir$/.test(word)) {
        return ['group3-24', stem];
      } else if (/valoir$/.test(word)) {
        return ['group3-25', stem];
      } else if (/vouloir$/.test(word)) {
        return ['group3-26', stem];
      } else if (word === 'seoir') {
        return ['group3-27', stem];
      } else if (/asseoir$/.test(word)) {
        return ['group3-28', stem];
      } else if (/messeoir$/.test(word)) {
        return ['group3-29', stem];
      } else if (/surseoir$/.test(word)) {
        return ['group3-30', stem];
      } else if (/choir$/.test(word)) {
        return ['group3-31', stem];
      }
    } else if (ending === 're') {
      if (/[nr][dc]re$/.test(word)) {
        if (/prendre$/.test(word)) {
          return ['group3-32', stem];
        } else if (/eindre$/.test(word)) {
          return ['group3-33', stem];
        } else if (/oindre$/.test(word)) {
          return ['group3-34', stem];
        } else if (/aindre$/.test(word)) {
          return ['group3-35', stem];
        } else if (/aincre$/.test(word)) {
          return ['group3-36', stem];
        } else if (/dre$/.test(word)) {
          return ['group3-37', stem];
        }
      } else if (/battre$/.test(word)) {
        return ['group3-38', stem];
      } else if (/mettre$/.test(word)) {
        return ['group3-39', stem];
      } else if (/(?:t|b)raire$/.test(word)) {
        return ['group3-40', stem];
      } else if (/faire$/.test(word)) {
        return ['group3-41', stem];
      } else if (/(?:pl|t)aire$/.test(word)) {
        return ['group3-42', stem];
      } else if (/aître$/.test(word)) {
        return ['group3-43', stem];
      } else if (/oître$/.test(word)) {
        return ['group3-44', stem];
      } else if (/croire$/.test(word)) {
        return ['group3-45', stem];
      } else if (/boire$/.test(word)) {
        return ['group3-46', stem];
      } else if (/clore$/.test(word)) {
        return ['group3-47', stem];
      } else if (/clure$/.test(word)) {
        return ['group3-48', stem];
      } else if (/soudre$/.test(word)) {
        return ['group3-49', stem];
      } else if (/coudre$/.test(word)) {
        return ['group3-50', stem];
      } else if (/moudre$/.test(word)) {
        return ['group3-51', stem];
      } else if (/suivre$/.test(word)) {
        return ['group3-52', stem];
      } else if (/vivre$/.test(word)) {
        return ['group3-53', stem];
      } else if (/lire$/.test(word)) {
        return ['group3-54', stem];
      } else if (/dire$/.test(word)) {
        return ['group3-55', stem];
      } else if (/crire$/.test(word)) {
        return ['group3-56', stem];
      } else if (/rire$/.test(word)) {
        return ['group3-57', stem];
      } else if (/(?:suf|con)fire$/.test(word) || /circoncire$/.test(word) || /frire$/.test(word)) {
        return ['group3-58', stem];
      } else if (/uire$/.test(word)) {
        return ['group3-59', stem];
      }
    }
  }

  combineToConjugate (group, stem, ending) {
    /* the last letter of the stem and the first letter of the tense ending
      affect each other in some specific cases
      in some cases there are several stem solutions
      those cases apply to all tenses*/
    const combinations = [];
    if (group === 'group1') {
      // rules for group1: verbs ending in -er
      if (ending.charAt(0) === 'a' || ending.charAt(0) === 'o') {
        // cases of tense endings: 'a' or 'o'
        if (stem.charAt(stem.length - 1) === 'c') {
          // verbs ending in -cer
          return [`${stem.slice(0, -1)}ç${ending}`];
        } else if (stem.charAt(stem.length - 1) === 'g') {
          // verbs ending in -ger
          return [`${stem}e${ending}`];
        }
      }
      if (ending.charAt(0) === 'e' && ending.charAt(1) !== 'z') {
        // cases of tense endings: '-e', '-es', '-ent' and '-er(.)'
        const globalPattern = /e[cmnprsvlt]/;
        if (globalPattern.test(stem.slice(-2)) || stem.slice(-3) === 'evr') {
          /* verbs ending in -e(.)er and (.) can only be either
          'c', 'm', 'n', 'p', 'r', 's', 'v', 'vr', 'l', 't'*/
          if (stem.slice(-2) === 'el' || stem.slice(-2) === 'et') {
            // verbs ending in -eler or -eter
            // special cases of -el and -et that always become -èl and -èt
            const elExceptions = ['cel', 'décel', 'recel', 'cisel', 'démantel',
              'écartel', 'encastel', 'gel', 'dégel',
              'congel', 'surgel', 'décongel', 'martel',
              'model', 'pel', 'remodel'];
            const etExceptions = ['achet', 'rachet', 'béguet', 'corset',
              'crochet', 'filet', 'furet', 'halet'];
            // special cases of -el and -et that always become -ell and -ett
            const patternCase1 = /jet$/;
            const patternCase2 = /appel$/;
            const case3 = 'interpel';

            if (elExceptions.indexOf(stem) !== -1 || etExceptions.indexOf(stem) !== -1) {
              return [`${stem.slice(0, -2)}è${stem.slice(-1) + ending}`];
            } else if (patternCase1.test(stem) || patternCase2.test(stem) || stem === case3) {
              return [`${stem + stem.slice(-1) + ending}`];
              // return [stem + stem.slice(-1) + ending];
            }
            /* all other cases can have two solutions:
             (-èl and -èt) or (-ell and -ett) */
            combinations[0] = `${stem + stem.slice(-1) + ending}`;
            combinations[1] = `${stem.slice(0, -2)}è${stem.slice(-1) + ending}`;
            return combinations;
          } else if (stem.slice(-3) === 'evr') {
            // verbs ending in -evrer
            return [`${stem.slice(0, -3)}èvr${ending}`];
          }
          /* verbs ending in -e(.)er where (.) is either
             'c', 'm', 'n', 'p', 'r', 's', 'v'*/
          return [`${stem.slice(0, -2)}è${stem.slice(-1) + ending}`];
        }

        if (/[aou]y/.test(stem.slice(-2))) {
          // verbs ending in -ayer, -oyer or -uyer
          if (/envoy/.test(stem) && ending.charAt(1) === 'r') {
            /* exceptions: verbs with '-envoy-' in the stem,
              like envoyer, renvoyer,... */
            return [`${stem.slice(0, -2)}er${ending.slice(2)}`];
          }
          combinations[0] = `${stem.slice(0, -1)}i${ending}`;
          if (stem.charAt(stem.length - 2) === 'a') {
            combinations[1] = `${stem + ending}`;
          }
          return combinations;
        }

        if (ending.charAt(1) !== 'r') {
          // cases of endings: '-e', '-es' and '-ent'
          // verbs ending in -é(.)er
          if (stem.substr(-2, 1) === 'é') {
            return [`${stem.slice(0, -2)}è${stem.slice(-1) + ending}`];
          } else if (stem.substr(-3, 1) === 'é') {
            return [`${stem.slice(0, -3)}è${stem.slice(-2) + ending}`];
          }
        }
      }
      return [stem + ending];
      // end group1
    } else if (group === 'group2') {
      if (/^[aeio]/.test(ending) && ending.length > 1) {
        stem += 'ss';
      }
      return [stem + ending];
    } else if (/^group3/.test(group)) {
      // TODO define the rules for and group3
    }
  }

  doIndicatifPresent (word, info) {
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
    const tenseEnding = {
      ending1: {
        s1: 'e',
        s2: 'es',
        s3: 'e',
        p1: 'ons',
        p2: 'ez',
        p3: 'ent'
      },
      ending2: {
        s1: 's',
        s2: 's',
        s3: 't',
        p1: 'ons',
        p2: 'ez',
        p3: 'ent'
      }
    };

    const subject = this.getSubject(info);

    if (word === 'être' || word === 'avoir' || word === 'aller') {
      return specialVerbs[word][subject];
    }

    const verbProperties = this.getWordGroup(word);
    const group = verbProperties[0];
    let stem = verbProperties[1];

    if (group === 'group1') {
      const solutions = this.combineToConjugate(group, stem, tenseEnding.ending1[subject]);
      if (solutions.length > 1) {
        return `${solutions[0]} / ${solutions[1]}`;
      }
      return solutions[0];
    } else if (group === 'group2') {
      if (/ï$/.test(stem) && /^s/.test(subject)) {
        stem = `${stem.slice(0, -1)}i`;
      }
      const solutions = this.combineToConjugate(group, stem, tenseEnding.ending2[subject]);
      return solutions[0];
    }
    return 'not yet implemented';
  }
}
export { French };
