import { Korean } from './korean';
import { Hindi } from './hindi';
import { French } from './french';
import Portuguese from './portuguese';

const Conjugator = {
  create: (lang) => {
    switch (lang.toLowerCase()) {
      case 'korean':
        return new Korean();
      case 'hindi':
        return new Hindi();
      case 'french':
        return new French();
      case 'portuguese':
        return new Portuguese();
      default:
        break;
    }
  },

  getLanguageList: () => ['Korean', 'Hindi', 'French']
};

export default Conjugator;
module.exports = Conjugator;
