 import { Korean } from './korean';
 import { Hindi } from './hindi';
 import { French } from './french';

const Conjugator = {
  create: (lang) => {
    switch (lang.toLowerCase()) {
      case 'korean':
        return new Korean();
        break;
      case 'hindi':
        return new Hindi();
        break;
      case 'french':
        return new French();
        break;
      default:
        //return new Korean();
    }
  }
};

export { Conjugator };
