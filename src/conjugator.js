 import { Korean } from './korean';
 import { Hindi } from './hindi';

const Conjugator = {
  create: (lang) => {
    switch (lang.toLowerCase()) {
      case 'korean':
        return new Korean();
        break;
      case 'hindi':
        return new Hindi();
        break;
      default:
        //return new Korean();
    }
  }
};

export { Conjugator };
