import { Korean } from './korean';
import { Hindi } from './hindi';
import { French } from './french';
import { Spanish } from './spanish';
import { Vietnamese } from './vietnamese';

const Conjugator = {
  create: (lang) => {
    switch (lang.toLowerCase()) {
      case 'korean':
        return new Korean();
      case 'hindi':
        return new Hindi();
      case 'french':
        return new French();
      case 'spanish':
        return new Spanish();
      case 'vietnamese':
        return new Vietnamese();
      default:
        break;
    }
  },
  getLanguageList: () => ['Korean', 'Hindi', 'French', 'Vietnamese']
};

export default Conjugator;
module.exports = Conjugator;
