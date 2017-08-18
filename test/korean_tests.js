//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Korean } from '../src/korean';

describe('Korean', () => {
  describe('Present Tense', () => {
    it('should conjugate 하다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('해');

      presentWord = kc.conjugate('좋아하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('좋아해');

      presentWord = kc.conjugate('필요하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('필요해');

      presentWord = kc.conjugate('약속하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('약속해');

      presentWord = kc.conjugate('걱정하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('걱정해');

      presentWord = kc.conjugate('그만하다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('그만해');
    });
    it('should conjugate 오다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('오다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('와');

      presentWord = kc.conjugate('들어오다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('들어와');

      presentWord = kc.conjugate('보다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('봐');

      presentWord = kc.conjugate('쏘다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('쏴');

      presentWord = kc.conjugate('해보다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('해봐');
    });
    it('should conjugate 우다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('우다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('워');

      presentWord = kc.conjugate('춤추다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('춤춰');

      presentWord = kc.conjugate('도와주다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('도와줘');

      presentWord = kc.conjugate('외우다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('외워');

      presentWord = kc.conjugate('싸우다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('싸워');

      presentWord = kc.conjugate('바꾸다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('바꿔');
    });
    it('should conjugate 으다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('으다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('어');

      presentWord = kc.conjugate('쓰다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('써');
    });
    it('should conjugate 이다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('이다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('여');

      presentWord = kc.conjugate('우기다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('우겨');

      presentWord = kc.conjugate('지다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('져');
    });
    it('should conjugate ㅏ다,ㅐ다,ㅓ다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('자다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('자');

      presentWord = kc.conjugate('내다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('내');

      presentWord = kc.conjugate('서다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('서');
    });
    it('should conjugate ㅗ르 and ㅜ르 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('모르다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('몰라');

      presentWord = kc.conjugate('부르다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('불러');

      presentWord = kc.conjugate('서두르다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('서둘러');
    });
    it('should conjugate ㅗㄹ, ㅏㄹ, ㅜㄹ, and ㅓㄹ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('놀다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('놀아');

      presentWord = kc.conjugate('날아', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('날아');

      presentWord = kc.conjugate('울다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('울어');

      presentWord = kc.conjugate('걸다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('걸어');
    });
    // irregular issue #47
    it('should conjugate ㅏㄷ,ㄴㅈ,ㅅ/ㅗㄷ,ㄴㅈ,ㅅ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('앉다', {tense: 'Present'});
      expect(presentWord).to.equal('앉아');

      presentWord = kc.conjugate('닫다', {tense: 'Present'});
      expect(presentWord).to.equal('닫아');

      presentWord = kc.conjugate('솟다', {tense: 'Present'});
      presentWord = kc.conjugate('솟아', {tense: 'Present'});
    });
    // irregular issue #48
   it('should conjugate ㅓㄷ/ㅡㄷ words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('걷다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('걸어');

      presentWord = kc.conjugate('듣다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('들어');
    });
   });
   it('should conjugate all other words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('열다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('열어');

      presentWord = kc.conjugate('만들다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('만들어');

      presentWord = kc.conjugate('찍다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('찍어');

      presentWord = kc.conjugate('있다', {tense: 'Present', formality: 'Casual'});
      expect(presentWord).to.equal('있어');
     });
   });
  describe('Future Tense', () => {
    it('should conjugate verbs with more than one character before 다', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('좋아하다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('좋아할 거야');

      futureWord = kc.conjugate('부르다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('부를 거야');
    });
    it('should conjugate verbs with stem ending with a vowel correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('하다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('할 거야');

      futureWord = kc.conjugate('오다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('올 거야');
    });
    it('should conjugate verbs with stem ending with a ㄹ consonant correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('놀다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('놀 거야');

      futureWord = kc.conjugate('날다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('날 거야');

      futureWord = kc.conjugate('울다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('울 거야');

      futureWord = kc.conjugate('만들다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('만들 거야');
     });
    it('should conjugate verbs with stem ending with other consonants correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('있다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('있을 거야');

      futureWord = kc.conjugate('먹다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('먹을 거야');

      futureWord = kc.conjugate('듣다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('들을 거야');

      futureWord = kc.conjugate('걷다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('걸을 거야');

      futureWord = kc.conjugate('입다', {tense: 'Future', formality: 'Casual'});
      expect(futureWord).to.equal('입을 거야');
    });
    it('should conjugate verbs in formal test correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('있다', {tense: 'Future', formality: 'Formal'});
      expect(futureWord).to.equal('있을 거예요');

      futureWord = kc.conjugate('사다', {tense: 'Future', formality: 'Formal'});
      expect(futureWord).to.equal('살 거예요');
    });
  });
  describe('Present Continuous Tense', () => {
    it('should conjugate verbs correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'Present Continuous', formality: 'Casual'});
      expect(presentWord).to.equal('하고있어');

      presentWord = kc.conjugate('오다', {tense: 'Present Continuous', formality: 'Casual'});
      expect(presentWord).to.equal('오고있어');

      presentWord = kc.conjugate('먹다', {tense: 'Present Continuous', formality: 'Casual'});
      expect(presentWord).to.equal('먹고있어');

      presentWord = kc.conjugate('좋아하다', {tense: 'Present Continuous', formality: 'Casual'});
      expect(presentWord).to.equal('좋아하고있어');
    });
  });
  describe('Past Tense', () => {
    it('should conjugate verbs with stem ending with a vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('하다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('했어');
      pastWord = kc.conjugate('오다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('왔어');
      pastWord = kc.conjugate('놀다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('놀았어');
      pastWord = kc.conjugate('날다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('날았어');
      pastWord = kc.conjugate('울다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('울었어');
      pastWord = kc.conjugate('있다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('있었어');
      pastWord = kc.conjugate('먹다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('먹었어');
      pastWord = kc.conjugate('부르다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('불렀어');
      pastWord = kc.conjugate('믿다', {tense: 'Past', formality: 'Casual'});
      expect(pastWord).to.equal('믿었어');
    });
  });
  describe('Prepared form', () => {
    it('should conjugate verbs correctly for prepared form', () => {
      const kc = new Korean();
      let preparedWord = kc.conjugate('하다', {tense: 'Prepared'});
      expect(preparedWord).to.equal('할');

      preparedWord = kc.conjugate('오다', {tense: 'Prepared'});
      expect(preparedWord).to.equal('올');

      preparedWord = kc.conjugate('먹다', {tense: 'Prepared'});
      expect(preparedWord).to.equal('먹을');

      preparedWord = kc.conjugate('부르다', {tense: 'Prepared'});
      expect(preparedWord).to.equal('부를');

      preparedWord = kc.conjugate('듣다', {tense: 'Prepared'});
      expect(preparedWord).to.equal('들을');
     });
  });
  describe('Truncated form', () => {
    it('should conjugate verbs correctly for truncated form', () => {
      const kc = new Korean();
      let preparedWord = kc.conjugate('하다', {tense: 'Truncated'});
      expect(preparedWord).to.equal('하');

      preparedWord = kc.conjugate('부르다', {tense: 'Truncated'});
      expect(preparedWord).to.equal('부르');

      preparedWord = kc.conjugate('듣다', {tense: 'Truncated'});
      expect(preparedWord).to.equal('듣');
     });
  });
  describe('Conditional form', () => {
    it('should conjugate verbs without bottom consonant correctly for conditional form', () => {
      const kc = new Korean();
      let preparedWord = kc.conjugate('하다', {tense: 'Conditional'});
      expect(preparedWord).to.equal('하');

      preparedWord = kc.conjugate('부르다', {tense: 'Conditional'});
      expect(preparedWord).to.equal('부르');
    });
    it('should conjugate verbs with bottom consonant correctly for conditional form', () => {
      const kc = new Korean();
      let preparedWord = kc.conjugate('울다', {tense: 'Conditional'});
      expect(preparedWord).to.equal('울으');
    });
    it('should conjugate ㅓㄷ/ㅡㄷ words correctly for conditional form', () => {
      const kc = new Korean();
      let preparedWord = kc.conjugate('걷다', {tense: 'Conditional'});
      expect(preparedWord).to.equal('걸으');

      preparedWord = kc.conjugate('듣다', {tense: 'Conditional'});
      expect(preparedWord).to.equal('들으');
    });
  });
  describe('Adjective in different tenses', () => {
    it('should conjugate adjectives correctly', () => {
      const kc = new Korean();
      let adjectiveWord = kc.conjugate('외롭다', {tense: 'past'});
      expect(adjectiveWord).to.equal('외로웠어');

      adjectiveWord = kc.conjugate('덥다', {tense: 'present'});
      expect(adjectiveWord).to.equal('더워');

      adjectiveWord = kc.conjugate('고급스럽다', {tense: 'present'});
      expect(adjectiveWord).to.equal('고급스러워');

      adjectiveWord = kc.conjugate('비싸다', {tense: 'past'});
      expect(adjectiveWord).to.equal('비쌌어');

      adjectiveWord = kc.conjugate('게으르다', {tense: 'present'});
      expect(adjectiveWord).to.equal('게을러');
    });
  });
  describe('Adjective in state tense', () => {
    it('should conjugate adjectives correctly', () => {
      const kc = new Korean();
      let adjectiveWord = kc.conjugate('외롭다', {tense: 'state'});
      expect(adjectiveWord).to.equal('외로운');

      adjectiveWord = kc.conjugate('졸리다', {tense: 'state'});
      expect(adjectiveWord).to.equal('졸린');

      adjectiveWord = kc.conjugate('고급스럽다', {tense: 'state'});
      expect(adjectiveWord).to.equal('고급스러운');

      adjectiveWord = kc.conjugate('비싸다', {tense: 'state'});
      expect(adjectiveWord).to.equal('비싼');

      adjectiveWord = kc.conjugate('게으르다', {tense: 'state'});
      expect(adjectiveWord).to.equal('게으른');
    });
  });
  describe('Noun conjugation', () => {
    it('should conjugate in subject form', () => {
      const kc = new Korean();
      let nounWord = kc.conjugate('손', {wordType: 'noun', tense: 'subject'});
      expect(nounWord).to.equal('손이');
      
      nounWord = kc.conjugate('바지', {wordType: 'noun', tense: 'subject'});
      expect(nounWord).to.equal('바지가');
    });
    
    it('should conjugate in object form', () => {
      const kc = new Korean();
      let nounWord = kc.conjugate('손', {wordType: 'noun', tense: 'object'});
      expect(nounWord).to.equal('손을');
      
      nounWord = kc.conjugate('바지', {wordType: 'noun', tense: 'object'});
      expect(nounWord).to.equal('바지를');
    });
  });
