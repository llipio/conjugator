//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import Conjugator from '../src/conjugator';
import { Korean } from '../src/korean';
import { Hindi } from '../src/hindi';
import { French } from '../src/french';
import { Vietnamese } from '../src/vietnamese';

describe('Conjugator', () => {
  it('should return Korean conjugator when language is Korean', () => {
    const kc = Conjugator.create('korean');
    expect(kc).to.be.an.instanceof(Korean);
  });
  it('should return Hindi conjugator when language is hindi', () => {
    const ic = Conjugator.create('hindi');
    expect(ic).to.be.an.instanceof(Hindi);
  });
  it('should ignore case when creating object', () => {
    const ic = Conjugator.create('Hindi');
    expect(ic).to.be.an.instanceof(Hindi);
    const ic2 = Conjugator.create('HiNdi');
    expect(ic2).to.be.an.instanceof(Hindi);
  });
  it('should return French conjugator when language is french', () => {
    const fr = Conjugator.create('french');
    expect(fr).to.be.an.instanceof(French);
  });
  it('should return Vietnamese conjugator when language is Vietnamese', () => {
    const vn = Conjugator.create('vietnamese');
    expect(vn).to.be.an.instanceOf(Vietnamese);
  });
  it('should return the language list', () => {
    const list = Conjugator.getLanguageList();
    expect(list).to.deep.equal(['Korean', 'Hindi', 'French', 'Vietnamese']);
  });
  it('should return the info list for a language', () => {
    const kc = Conjugator.create('korean');
    const list = kc.getAllInfo('korean');
    expect(list).to.deep.equal({
      tense: ['present', 'past', 'future', 'present continuous', 'prepared'],
      formality: ['formal', 'casual'],
    });
  });
  it('should conjugate whether tense input is capitalized or all lowercase', () => {
    const kc = Conjugator.create('korean');
    let presentWord = kc.conjugate('하다', {tense: 'Present'});
    expect(presentWord).to.equal('해');

    presentWord = kc.conjugate('하다', {tense: 'present'});
    expect(presentWord).to.equal('해');
  });
});
