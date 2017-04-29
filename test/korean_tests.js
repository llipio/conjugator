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
    it('should conjugate ㅏ다,ㅐ다,ㅓ다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('자다', {tense: 'present'});
      expect(presentWord).to.equal('자');

      presentWord = kc.conjugate('내다', {tense: 'present'});
      expect(presentWord).to.equal('내');

      presentWord = kc.conjugate('서다', {tense: 'present'});
      expect(presentWord).to.equal('서');
    });
    it('should conjugate ㅗ르 and ㅜ르 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('모르다', {tense: 'present'});
      expect(presentWord).to.equal('몰라');

      presentWord = kc.conjugate('부르다', {tense: 'present'});
      expect(presentWord).to.equal('불러');

      presentWord = kc.conjugate('서두르다', {tense: 'present'});
      expect(presentWord).to.equal('서둘러');
    });
    it('should conjugate ㅗㄹ, ㅏㄹ, ㅜㄹ, and ㅓㄹ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('놀다', {tense: 'present'});
      expect(presentWord).to.equal('놀아');

      presentWord = kc.conjugate('날아', {tense: 'present'});
      expect(presentWord).to.equal('날아');

      presentWord = kc.conjugate('울다', {tense: 'present'});
      expect(presentWord).to.equal('울어');

      presentWord = kc.conjugate('걸다', {tense: 'present'});
      expect(presentWord).to.equal('걸어');
    });
    // irregular issue #47
/*    it('should conjugate ㅏㄷ,ㄴㅈ,ㅅ/ㅗㄷ,ㄴㅈ,ㅅ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('앉다', {tense: 'present'});
      expect(presentWord).to.equal('앉아');

      presentWord = kc.conjugate('닫다', {tense: 'present'});
      expect(presentWord).to.equal('닫아');

      presentWord = kc.conjugate('솟다', {tense: 'present'});
      presentWord = kc.conjugate('솟아', {tense: 'present'});
    });*/
    // irregular issue #48
/*    it('should conjugate ㅓㄷ/ㅡㄷ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('걷다', {tense: 'present'});
      expect(presentWord).to.equal('걸어');

      presentWord = kc.conjugate('듣다', {tense: 'present'});
      expect(presentWord).to.equal('들어');
    });*/
   });
  describe('Future Tense', () => {
    it('should conjugate verbs with stem ending with a vowel correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('하다', {tense: 'future'});
      expect(futureWord).to.equal('할 거야');

      futureWord = kc.conjugate('오다', {tense: 'future'});
      expect(futureWord).to.equal('올 거야');
    });
    it('should conjugate verbs with stem ending with a ㄹ consonant correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('놀다', {tense: 'future'});
      expect(futureWord).to.equal('놀 거야');

      futureWord = kc.conjugate('날다', {tense: 'future'});
      expect(futureWord).to.equal('날 거야');

      futureWord = kc.conjugate('울다', {tense: 'future'});
      expect(futureWord).to.equal('울 거야');
    });
    it('should conjugate verbs with stem ending with other consonants correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('있다', {tense: 'future'});
      expect(futureWord).to.equal('있을 거야');

      futureWord = kc.conjugate('먹다', {tense: 'future'});
      expect(futureWord).to.equal('먹을 거야');
    });
  });
  describe('Present Continuous Tense', () => {
    it('should conjugate verbs correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('하고있어');

      presentWord = kc.conjugate('오다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('오고있어');

      presentWord = kc.conjugate('먹다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('먹고있어');

      presentWord = kc.conjugate('좋아하다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('좋아하고있어');
    });
  });
  describe('Past Tense', () => {
    it('should conjugate verbs with stem ending with a vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('하다', {tense: 'past'});
      expect(pastWord).to.equal('했어');
      pastWord = kc.conjugate('오다', {tense: 'past'});
      expect(pastWord).to.equal('왔어');
      pastWord = kc.conjugate('놀다', {tense: 'past'});
      expect(pastWord).to.equal('놀았어');
      pastWord = kc.conjugate('날다', {tense: 'past'});
      expect(pastWord).to.equal('날았어');
      pastWord = kc.conjugate('울다', {tense: 'past'});
      expect(pastWord).to.equal('울었어');
      pastWord = kc.conjugate('있다', {tense: 'past'});
      expect(pastWord).to.equal('있었어');
      pastWord = kc.conjugate('먹다', {tense: 'past'});
      expect(pastWord).to.equal('먹었어');
      pastWord = kc.conjugate('부르다', {tense: 'past'});
      expect(pastWord).to.equal('불렀어');
    });
  });
});
