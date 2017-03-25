llip = {
  // Returns a cojugator object
   createConjugator: (lang) => { 
     switch (lang) {
       case 'korean':
         return new KoreanConjugator();
         break;
       default:
         return new KoreanConjugator();
     }
   },
}

class KoreanConjugator {
  conjugate ('word', rulesObject) => {  // Example format for rulesObject: { tense: 'present', formal: 'true/false', wordType: 'adjective/verb'}
   //conjugation logic
  },
}
