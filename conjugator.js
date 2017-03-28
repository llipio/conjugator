import { Korean } from './Korean';

 class Llip {
  // Returns a conjugator object
  static createConjugator(lang) { 
     switch (lang) {
       case 'korean':
         return new Korean();
         break;
       default:
         return new Korean();
     }
   },
}

export { Llip };
