class Hindi {

  conjugate (word, info) {
    // Format for rulesObject: { tense: 'present', formal: 'true/false', wordType: 'adjective/verb'}
   switch (info.tense) {
     case 'present':
       return ''; // Return conjugated word in the present tense
       break;
     default:
     return 'Could not find any rules for conjugation';
   }
 }
}

export { Hindi };

