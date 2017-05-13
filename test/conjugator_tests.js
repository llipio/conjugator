//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Conjugator } from '../src/conjugator';
import { Korean } from '../src/korean';
import { Hindi } from '../src/hindi';
import { French } from '../src/french';
import { Portugues } from '../src/portuguese';

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
});
