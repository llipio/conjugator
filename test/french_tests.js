//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { French } from '../src/french';


describe('French', () => {
  describe('Present Tense', () => {
    it('should conjugate être present tense correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: true, person: '1'});
      expect(conjugatedWord).to.equal('suis');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: true, person: '2'});
      expect(conjugatedWord).to.equal('es');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: 'undefined', person: '3'});
      expect(conjugatedWord).to.equal('est');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: true, person: '3' });
      expect(conjugatedWord).to.equal('est');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: false, person: '1' });
      expect(conjugatedWord).to.equal('sommes');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: false, person: '2' });
      expect(conjugatedWord).to.equal('êtes');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: true, singular: true, person: '2' });
      expect(conjugatedWord).to.equal('êtes');

      conjugatedWord = fr.conjugate('être', {tense: 'present', formal: false, singular: false, person: '3' });
      expect(conjugatedWord).to.equal('sont');
    });

    it('should tell verb not in our database yet', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('avoir', {tense: 'present', formal: false, singular: true, person: '1'});
      expect(conjugatedWord).to.equal('Verb not in our database');

      conjugatedWord = fr.conjugate('danser', {tense: 'present', formal: false, singular: true, person: '1'});
      expect(conjugatedWord).to.equal('Verb not in our database');
    });
  });
});
