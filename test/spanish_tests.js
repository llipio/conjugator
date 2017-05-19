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

  describe('setInfo', () => {
    it('should return the info adapted for the conjugator', () => {
      const sp = new Spanish();
      let infos = sp.setInfo({Tense: 'Present', Formal: 'True', Subject: 'Usted', Gender: 'Male'});
      expect(infos).to.deep.equal({tense: 'present', formal: true, noun: 'usted', gender: 'male'});
    });
  });
});
