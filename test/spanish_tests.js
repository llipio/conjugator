/* global describe, it */

import spanish from '../lib/js/src/spanish';

const expect = require('chai').expect;

describe('Spanish', () => {
  let conjugatedWord;
  describe('Present Tense', () => {
    it('should conjugate present tense: hablar should be hablo for yo', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'present', subject: 'yo' });
      expect(conjugatedWord).to.equal('hablo');
    });
    it('should conjugate present tense: hablar should be habla for él/ella/Ud.', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'present', subject: 'él/ella/Ud.' });
      expect(conjugatedWord).to.equal('habla');
    });
    it('should conjugate present tense: hablar should be hablamos for nosotros/nosotras', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'present', subject: 'nosotros/nosotras' });
      expect(conjugatedWord).to.equal('hablamos');
    });
  });

  describe('Future Tense', () => {
    it('should conjugate future tense: hablar should be hablará for él/ella/Ud.', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'future', subject: 'él/ella/Ud.' });
      expect(conjugatedWord).to.equal('hablará');
    });
    it('should conjugate future tense: comer should be comerás for tú', () => {
      conjugatedWord = spanish.conjugate('comer', { tense: 'future', subject: 'tú'
      });
      expect(conjugatedWord).to.equal('comerás');
    });
    it('should conjugate future tense: comer should be comerán for ellos/ellas/Uds.', () => {
      conjugatedWord = spanish.conjugate('comer', { tense: 'future', subject: 'ellos/ellas/Uds.' });
      expect(conjugatedWord).to.equal('comerán');
    });
    it('should conjugate future tense: vivir should be vivirá for él/ella/Ud.', () => {
      conjugatedWord = spanish.conjugate('vivir', { tense: 'future', subject: 'él/ella/Ud.' });
      expect(conjugatedWord).to.equal('vivirá');
    });
  });

  describe('Past Tense', () => {
    it('should conjugate past tense: vivir should be vivimos for nosotros/nosotras', () => {
      conjugatedWord = spanish.conjugate('vivir', { tense: 'past', subject: 'nosotros/nosotras' });
      expect(conjugatedWord).to.equal('vivimos');
    });
    it('should conjugate past tense: comer should be comieron for ellos/ellas/Uds.', () => {
      conjugatedWord = spanish.conjugate('comer', { tense: 'past', subject: 'ellos/ellas/Uds.' });
      expect(conjugatedWord).to.equal('comieron');
    });
    it('should conjugate past tense: comer should be comiste for tú', () => {
      conjugatedWord = spanish.conjugate('comer', { tense: 'past', subject: 'tú' });
      expect(conjugatedWord).to.equal('comiste');
    });
    it('should conjugate past tense: comer should be comió', () => {
      conjugatedWord = spanish.conjugate('comer', { tense: 'past', subject: 'él/ella/Ud.' });
      expect(conjugatedWord).to.equal('comió');
    });
    it('should conjugate past tense: hablar should be hablamos for nosotros/nosotras', () => {
      conjugatedWord = spanish.conjugate('hablar', { tense: 'past', subject: 'nosotros/nosotras' });
      expect(conjugatedWord).to.equal('hablamos');
    });
  });
});
