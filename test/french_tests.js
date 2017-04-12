//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { French } from '../src/french';


describe('French', () => {
  describe('Present Tense', () => {
    it('should conjugate "être", "avoir", "aller" and verbs ending in "-er" correctly', () => {
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

      conjugatedWord = fr.conjugate('rejeter', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('rejette');

      conjugatedWord = fr.conjugate('rejeter', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('rejetons');

      conjugatedWord = fr.conjugate('modeler', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modèle');

      conjugatedWord = fr.conjugate('modeler', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modelons');

      conjugatedWord = fr.conjugate('niveler', {tense: 'present', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('nivelle / nivèle');

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
      expect(conjugatedWord).to.equal('broie');

      conjugatedWord = fr.conjugate('broyer', {tense: 'present', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('broyons');
    });
  });
});
