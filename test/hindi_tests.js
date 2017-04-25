//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Hindi } from '../src/hindi';

describe('Hindi', () => {
  describe('Present tense masculine', () => {
    it('should conjugate hindi present tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('nachta hun');

      word = ic.conjugate('khana', {tense: 'present', gender: 'm'});
      expect(word).to.equal('khata hun');

      word = ic.conjugate('peena', {tense: 'present', gender: 'm'});
      expect(word).to.equal('peeta hun');

      word = ic.conjugate('khelna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('khelta hun');

      word = ic.conjugate('baat karna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('baat karta hun');

      word = ic.conjugate('rukna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('rukta hun');

      word = ic.conjugate('padhna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('padhta hun');

      word = ic.conjugate('kam karna', {tense: 'present', gender: 'm'});
      expect(word).to.equal('kam karta hun');

      word = ic.conjugate('sona', {tense: 'present', gender: 'm'});
      expect(word).to.equal('sota hun');
    });
  });

  describe('Present tense feminine', () => {
    it('should conjugate hindi present tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('nachti hun');

      word = ic.conjugate('khana', {tense: 'present', gender: 'f'});
      expect(word).to.equal('khati hun');

      word = ic.conjugate('peena', {tense: 'present', gender: 'f'});
      expect(word).to.equal('peeti hun');

      word = ic.conjugate('khelna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('khelti hun');

      word = ic.conjugate('baat karna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('baat karti hun');

      word = ic.conjugate('rukna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('rukti hun');

      word = ic.conjugate('padhna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('padhti hun');

      word = ic.conjugate('kam karna', {tense: 'present', gender: 'f'});
      expect(word).to.equal('kam karti hun');

      word = ic.conjugate('sona', {tense: 'present', gender: 'f'});
      expect(word).to.equal('soti hun');
    });
  });

  describe('Past tense masculine', () => {
    it('should conjugate hindi past tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('nachta tha');

      word = ic.conjugate('khana', {tense: 'past', gender: 'm'});
      expect(word).to.equal('khata tha');

      word = ic.conjugate('peena', {tense: 'past', gender: 'm'});
      expect(word).to.equal('peeta tha');

      word = ic.conjugate('khelna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('khelta tha');

      word = ic.conjugate('baat karna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('baat karta tha');

      word = ic.conjugate('rukna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('rukta tha');

      word = ic.conjugate('padhna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('padhta tha');

      word = ic.conjugate('kam karna', {tense: 'past', gender: 'm'});
      expect(word).to.equal('kam karta tha');

      word = ic.conjugate('sona', {tense: 'past', gender: 'm'});
      expect(word).to.equal('sota tha');
    });
  });

  describe('Past tense feminine', () => {
    it('should conjugate hindi past tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('nachti thi');

      word = ic.conjugate('khana', {tense: 'past', gender: 'f'});
      expect(word).to.equal('khati thi');

      word = ic.conjugate('peena', {tense: 'past', gender: 'f'});
      expect(word).to.equal('peeti thi');

      word = ic.conjugate('khelna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('khelti thi');

      word = ic.conjugate('baat karna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('baat karti thi');

      word = ic.conjugate('rukna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('rukti thi');

      word = ic.conjugate('padhna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('padhti thi');

      word = ic.conjugate('kam karna', {tense: 'past', gender: 'f'});
      expect(word).to.equal('kam karti thi');

      word = ic.conjugate('sona', {tense: 'past', gender: 'f'});
      expect(word).to.equal('soti thi');
    });
  });

  describe('Future tense masculine', () => {
    it.skip('should conjugate hindi future tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('nachunga');

      word = ic.conjugate('khana', {tense: 'future', gender: 'm'});
      expect(word).to.equal('khaunga');

      word = ic.conjugate('peena', {tense: 'future', gender: 'm'});
      expect(word).to.equal('peeunga');

      word = ic.conjugate('khelna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('khelunga');

      word = ic.conjugate('baat karna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('baat karunga');

      word = ic.conjugate('rukna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('rukunga');

      word = ic.conjugate('padhna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('padhunga');

      word = ic.conjugate('kam karna', {tense: 'future', gender: 'm'});
      expect(word).to.equal('kam karunga');

      word = ic.conjugate('sona', {tense: 'future', gender: 'm'});
      expect(word).to.equal('sounga');
    });
  });

  describe('Future tense feminine', () => {
    it('should conjugate hindi future tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('nachungi');

      word = ic.conjugate('khana', {tense: 'future', gender: 'f'});
      expect(word).to.equal('khaungi');

      word = ic.conjugate('peena', {tense: 'future', gender: 'f'});
      expect(word).to.equal('peeungi');

      word = ic.conjugate('khelna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('khelungi');

      word = ic.conjugate('baat karna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('baat karungi');

      word = ic.conjugate('rukna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('rukungi');

      word = ic.conjugate('padhna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('padhungi');

      word = ic.conjugate('kam karna', {tense: 'future', gender: 'f'});
      expect(word).to.equal('kam karungi');

      word = ic.conjugate('sona', {tense: 'future', gender: 'f'});
      expect(word).to.equal('soungi');
    });
  });
});
