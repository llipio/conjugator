//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { French } from '../src/french';


describe('French', () => {
  describe('Indicatif Présent', () => {
    it('should conjugate "être", "avoir", "aller" and verbs ending in "-er" correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('aimer', {tense: 'Indicatif Présent', subject: 'on', singular: true, gender: 'unknown'});
      expect(conjugatedWord).to.equal('aime');

      conjugatedWord = fr.conjugate('avoir', {tense: 'Indicatif Présent', subject: 'on', singular: false, gender: 'unknown'});
      expect(conjugatedWord).to.equal('a');

      conjugatedWord = fr.conjugate('aller', {tense: 'Indicatif Présent', subject: 'tu', singular: true, gender: 'female'});
      expect(conjugatedWord).to.equal('vas');

      conjugatedWord = fr.conjugate('manger', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('mangeons');

      conjugatedWord = fr.conjugate('placer', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('plaçons');

      conjugatedWord = fr.conjugate('peser', {tense: 'Indicatif Présent', subject: 'ils', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('pèsent');

      conjugatedWord = fr.conjugate('peser', {tense: 'Indicatif Présent', subject: 'vous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('pesez');

      conjugatedWord = fr.conjugate('céder', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('cède');

      conjugatedWord = fr.conjugate('céder', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('cédons');

      conjugatedWord = fr.conjugate('rejeter', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('rejette');

      conjugatedWord = fr.conjugate('rejeter', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('rejetons');

      conjugatedWord = fr.conjugate('modeler', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('modèle');

      conjugatedWord = fr.conjugate('modeler', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('modelons');

      conjugatedWord = fr.conjugate('niveler', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('nivelle / nivèle');

      conjugatedWord = fr.conjugate('niveler', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('nivelons');

      conjugatedWord = fr.conjugate('assiéger', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('assiège');

      conjugatedWord = fr.conjugate('assiéger', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('assiégeons');

      conjugatedWord = fr.conjugate('payer', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('paie / paye');

      conjugatedWord = fr.conjugate('payer', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('payons');

      conjugatedWord = fr.conjugate('broyer', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('broie');

      conjugatedWord = fr.conjugate('broyer', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('broyons');

      conjugatedWord = fr.conjugate('sevrer', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('sèvre');
    });

    it('should conjugate regular verbs ending in "-ir" correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('finir', {tense: 'Indicatif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('finissons');

      conjugatedWord = fr.conjugate('haïr', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('hais');

      conjugatedWord = fr.conjugate('agir', {tense: 'Indicatif Présent', subject: 'je', singular: true, gender: 'male'});
      expect(conjugatedWord).to.equal('agis');
    });
  });

  describe('Infinitif Présent', () => {
    it('should conjugate the Infinitif Présent correctly', () => {
      let conjugatedWord;
      const fr = new French();
      conjugatedWord = fr.conjugate('broyer', {tense: 'Infinitif Présent', subject: 'nous', singular: false, gender: 'male'});
      expect(conjugatedWord).to.equal('broyer');
    });
  });

  describe('setInfo', () => {
    it('should return the info adapted for the conjugator', () => {
      const fr = new French();
      let infos = fr.setInfo({tense: 'Infinitif Présent', singular: false, subject: 'vous', gender: 'male'});
      expect(infos).to.deep.equal({mood: 'Infinitif', tense: 'Présent', formal: false, singular: false, person: '2', gender: 'male'});
    });
  });
});
