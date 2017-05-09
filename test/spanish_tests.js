// Chai is an assertion library for testing
// Reference: http://www.http://chaijs.com/

const expect = require('chai').expect;
import { Spanish } from '../src/spanish';

describe('Spanish', () => {
  describe('Present Tense', () => {
    it('should conjugate "hablar" to "hablo" for "yo"', () => {
      let conjugatedWord;
      const spanish = new Spanish();

      conjugatedWord = spanish.conjugate('hablar', {noun: 'yo'});
      expect(conjugatedWord).to.equal('hablo');
      
    });
  });
});
