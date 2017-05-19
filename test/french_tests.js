//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { French } from '../src/french';


describe('French', () => {
  describe('Indicatif Présent', () => {
    it('should conjugate "être", "avoir", "aller" and verbs ending in "-er" correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('aimer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '3', gender: 'unknown'});
      expect(conjugatedWord).to.equal('aime');

      conjugatedWord = fr.conjugate('avoir', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '3', gender: 'unknown'});
      expect(conjugatedWord).to.equal('a');

      conjugatedWord = fr.conjugate('aller', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '2', gender: 'female'});
      expect(conjugatedWord).to.equal('vas');

      conjugatedWord = fr.conjugate('manger', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('mangeons');

      conjugatedWord = fr.conjugate('placer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('plaçons');

      conjugatedWord = fr.conjugate('peser', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '3', gender: 'male'});
      expect(conjugatedWord).to.equal('pèsent');

      conjugatedWord = fr.conjugate('peser', {mood: 'Indicatif', tense: 'Présent', formal: true, singular: false, person: '2', gender: 'male'});
      expect(conjugatedWord).to.equal('pesez');

      conjugatedWord = fr.conjugate('céder', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('cède');

      conjugatedWord = fr.conjugate('céder', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('cédons');

      conjugatedWord = fr.conjugate('rejeter', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('rejette');

      conjugatedWord = fr.conjugate('rejeter', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('rejetons');

      conjugatedWord = fr.conjugate('modeler', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modèle');

      conjugatedWord = fr.conjugate('modeler', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('modelons');

      conjugatedWord = fr.conjugate('niveler', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('nivelle / nivèle');

      conjugatedWord = fr.conjugate('niveler', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('nivelons');

      conjugatedWord = fr.conjugate('assiéger', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('assiège');

      conjugatedWord = fr.conjugate('assiéger', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('assiégeons');

      conjugatedWord = fr.conjugate('payer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('paie / paye');

      conjugatedWord = fr.conjugate('payer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('payons');

      conjugatedWord = fr.conjugate('broyer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('broie');

      conjugatedWord = fr.conjugate('broyer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('broyons');

      conjugatedWord = fr.conjugate('sevrer', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('sèvre');
    });

    it('should conjugate regular verbs ending in "-ir" correctly', () => {
      let conjugatedWord;
      const fr = new French();

      conjugatedWord = fr.conjugate('finir', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('finissons');

      conjugatedWord = fr.conjugate('haïr', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('hais');

      conjugatedWord = fr.conjugate('agir', {mood: 'Indicatif', tense: 'Présent', formal: false, singular: true, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('agis');
    });
  });

  describe('Infinitif Présent', () => {
    it('should conjugate the Infinitif Présent correctly', () => {
      let conjugatedWord;
      const fr = new French();
      conjugatedWord = fr.conjugate('broyer', {mood: 'Infinitif', tense: 'Présent', formal: false, singular: false, person: '1', gender: 'male'});
      expect(conjugatedWord).to.equal('broyer');
    });
  });

  describe('setInfo', () => {
    it('should return the info adapted for the conjugator', () => {
      const fr = new French();
      let infos = fr.setInfo({Tense: {Infinitif: 'Présent'}, Formal: 'True', Singular: 'False', Subject: 'Vous', Gender: 'Male'});
      console.log(infos);
      expect(infos).to.deep.equal({mood: 'Infinitif',tense: 'Présent', formal: true, singular: false, person: '2', gender: 'male'});
    });
  });
});
