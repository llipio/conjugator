//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Korean } from '../src/korean';

describe('Korean', () => {
  describe('Present Tense', () => {
    it('should conjugate 하다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'present'});
      expect(presentWord).to.equal('해');
      
      presentWord = kc.conjugate('좋아하다', {tense: 'present'});
      expect(presentWord).to.equal('좋아해');
      
      presentWord = kc.conjugate('필요하다', {tense: 'present'});
      expect(presentWord).to.equal('필요해');
      
      presentWord = kc.conjugate('약속하다', {tense: 'present'});
      expect(presentWord).to.equal('약속해');
      
      presentWord = kc.conjugate('걱정하다', {tense: 'present'});
      expect(presentWord).to.equal('걱정해');
      
      presentWord = kc.conjugate('그만하다', {tense: 'present'});
      expect(presentWord).to.equal('그만해');
    });
    it('should conjugate 오다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('오다', {tense: 'present'});
      expect(presentWord).to.equal('와');

      presentWord = kc.conjugate('들어오다', {tense: 'present'});
      expect(presentWord).to.equal('들어와');

      presentWord = kc.conjugate('보다', {tense: 'present'});
      expect(presentWord).to.equal('봐');

      presentWord = kc.conjugate('쏘다', {tense: 'present'});
      expect(presentWord).to.equal('쏴');

      presentWord = kc.conjugate('해보다', {tense: 'present'});
      expect(presentWord).to.equal('해봐');
    });
    it('should conjugate 우다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('우다', {tense: 'present'});
      expect(presentWord).to.equal('워');

      presentWord = kc.conjugate('춤추다', {tense: 'present'});
      expect(presentWord).to.equal('춤춰');

      presentWord = kc.conjugate('도와주다', {tense: 'present'});
      expect(presentWord).to.equal('도와줘');

      presentWord = kc.conjugate('외우다', {tense: 'present'});
      expect(presentWord).to.equal('외워');

      presentWord = kc.conjugate('싸우다', {tense: 'present'});
      expect(presentWord).to.equal('싸워');

      presentWord = kc.conjugate('바꾸다', {tense: 'present'});
      expect(presentWord).to.equal('바꿔');
    });
    it('should conjugate special words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('부르다', {tense: 'present'});
      expect(presentWord).to.equal('불러');
    });
    it('should conjugate 으다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('으다', {tense: 'present'});
      expect(presentWord).to.equal('어');

      presentWord = kc.conjugate('쓰다', {tense: 'present'});
      expect(presentWord).to.equal('써');
  });
    it('should conjugate 이다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('이다', {tense: 'present'});
      expect(presentWord).to.equal('여');

      presentWord = kc.conjugate('우기다', {tense: 'present'});
      expect(presentWord).to.equal('우겨');

      presentWord = kc.conjugate('지다', {tense: 'present'});
      expect(presentWord).to.equal('져');
   });
 });
});
