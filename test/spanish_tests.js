/* global describe, it */

import { Spanish } from '../src/spanish';

const expect = require('chai').expect;

describe('Spanish', () => {
  let conjugatedWord;
  const spanish = new Spanish();

  describe('Present Tense', () => {
    it('should conjugate present tense correctly', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'present', pronoun: 'yo' });
      expect(conjugatedWord).to.equal('hablo');
    });
  });

  describe('Future Tense', () => {
    it('should conjugate future tense', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'future', pronoun: 'él/ella/Ud.' });
      expect(conjugatedWord).to.equal('hablará');
    });
  });

  describe('Past Tense', () => {
    it('should conjugate past tense', () => {
      conjugatedWord = spanish.conjugate('vivir', { tense: 'past', pronoun: 'nosotros/nosotras' });
      expect(conjugatedWord).to.equal('vivimos');
    });
  });
});
