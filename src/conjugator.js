import { Korean } from './korean';
import { Hindi } from './hindi';
import { French } from './french';

const Conjugator = {
  create: (lang) => {
    switch (lang.toLowerCase()) {
      case 'korean':
        return new Korean();
      case 'hindi':
        return new Hindi();
      case 'french':
        return new French();
      default:
        break;
    }
  }
};

export { Conjugator };
