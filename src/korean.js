class Korean {

  conjugate (word, info) {
    // Format for rulesObject: { tense: 'present', formal: 'true/false', wordType: 'adjective/verb'}
   switch (info.tense) {
     case 'present':
       return this.doPresent(word);
       break;
     default:
     return 'Could not find any rules for conjugation';
   }
 }

 doPresent(word) {
   if(word[0] === '하') {
     return '해'
   }
   return word;
 }
}

export { Korean };
