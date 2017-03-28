//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Hindi } from '../src/hindi';

describe('Hindi', () => {
  describe('Present Tense', () => {
    it('should conjugate hindi present tense', () => {
      const ic = new Hindi();
      const presentWord = ic.conjugate('nachna', {tense: 'present'});
      expect(presentWord).to.equal('nachta hoon');
    });
  });
});


