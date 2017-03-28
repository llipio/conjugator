//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Korean } from './Korean';
import { Llip } from './conjugator';

describe('Llip', () => {
  describe('conjugator', () => {
    it('should return Korean Conjugator when language is Korean', () => {
      const conjugator = new Llip.createConjugator('korean');
      expect(conjugator).to.be.an.instanceof(Korean);;
    });
  });
});
