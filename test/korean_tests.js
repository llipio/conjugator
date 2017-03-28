//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Korean } from '../src/korean';

describe('Korean', () => {
  describe('Present Tense', () => {
    it('should conjugate 하다 words correctly', () => {
      const kc = new Korean();
      const presentWord = kc.conjugate('하다', {tense: 'present'});
      expect(presentWord).to.equal('해');
    });
    it('should conjugate 오다 words correctly', () => {
      const kc = new Korean();
      const presentWord = kc.conjugate('오다', {tense: 'present'});
      expect(presentWord).to.equal('와');
    });
  });
});

