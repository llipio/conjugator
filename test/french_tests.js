//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { French } from '../src/french';


describe('French', () => {
  describe('Present Tense', () => {
    it('should conjugate être present tense correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('avoir', {tense: 'present', formal: false, singular: false, person: '3', gender: 'unknown'});
      expect(conjugatedWord).to.equal('a');

      conjugatedWord = fr.conjugate('aller', {tense: 'present', formal: false, singular: true, person: '2', gender: 'female'});
      expect(conjugatedWord).to.equal('vas');

      conjugatedWord = fr.conjugate('manger', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('mangeons');

      conjugatedWord = fr.conjugate('placer', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('plaçons');

      conjugatedWord = fr.conjugate('peser', {tense: 'present', formal: false, singular: false, person: '3', gender: 'male'});
      expect(conjugatedWord).to.equal('pèsent');

      conjugatedWord = fr.conjugate('peser', {tense: 'present', formal: true, singular: false, person: '2', gender: 'male'});
      expect(conjugatedWord).to.equal('pesez');

      conjugatedWord = fr.conjugate('céder', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('cède');

      conjugatedWord = fr.conjugate('céder', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('cédons');

      conjugatedWord = fr.conjugate('jeter', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('jette');

      conjugatedWord = fr.conjugate('jeter', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('jetons');

      conjugatedWord = fr.conjugate('modeler', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modèle');

      conjugatedWord = fr.conjugate('modeler', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modelons');

      conjugatedWord = fr.conjugate('niveler', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('nivèle / nivelle');

      conjugatedWord = fr.conjugate('niveler', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('nivelons');

      conjugatedWord = fr.conjugate('assiéger', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('assiège');

      conjugatedWord = fr.conjugate('assiéger', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('assiégeons');

      conjugatedWord = fr.conjugate('payer', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('paie / paye');

      conjugatedWord = fr.conjugate('payer', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('payons');

      conjugatedWord = fr.conjugate('broyer', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('paie');

      conjugatedWord = fr.conjugate('broyer', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('broyons');

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
