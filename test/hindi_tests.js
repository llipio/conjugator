//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Hindi } from '../src/hindi';

describe('Hindi', () => {
  describe('Present tense masculine', () => {
    it('should conjugate hindi Present tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('nachta hun');

      word = ic.conjugate('khana', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('khata hun');

      word = ic.conjugate('peena', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('peeta hun');

      word = ic.conjugate('khelna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('khelta hun');

      word = ic.conjugate('baat karna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('baat karta hun');

      word = ic.conjugate('rukna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('rukta hun');

      word = ic.conjugate('padhna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('padhta hun');

      word = ic.conjugate('kam karna', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('kam karta hun');

      word = ic.conjugate('sona', {tense: 'Present', gender: 'male'});
      expect(word).to.equal('sota hun');
    });
  });

  describe('Present tense feminine', () => {
    it('should conjugate hindi Present tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('nachti hun');

      word = ic.conjugate('khana', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('khati hun');

      word = ic.conjugate('peena', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('peeti hun');

      word = ic.conjugate('khelna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('khelti hun');

      word = ic.conjugate('baat karna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('baat karti hun');

      word = ic.conjugate('rukna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('rukti hun');

      word = ic.conjugate('padhna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('padhti hun');

      word = ic.conjugate('kam karna', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('kam karti hun');

      word = ic.conjugate('sona', {tense: 'Present', gender: 'female'});
      expect(word).to.equal('soti hun');
    });
  });

  describe('Past tense masculine', () => {
    it('should conjugate hindi Past tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('nachta tha');

      word = ic.conjugate('khana', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('khata tha');

      word = ic.conjugate('peena', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('peeta tha');

      word = ic.conjugate('khelna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('khelta tha');

      word = ic.conjugate('baat karna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('baat karta tha');

      word = ic.conjugate('rukna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('rukta tha');

      word = ic.conjugate('padhna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('padhta tha');

      word = ic.conjugate('kam karna', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('kam karta tha');

      word = ic.conjugate('sona', {tense: 'Past', gender: 'male'});
      expect(word).to.equal('sota tha');
    });
  });

  describe('Past tense feminine', () => {
    it('should conjugate hindi Past tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('nachti thi');

      word = ic.conjugate('khana', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('khati thi');

      word = ic.conjugate('peena', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('peeti thi');

      word = ic.conjugate('khelna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('khelti thi');

      word = ic.conjugate('baat karna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('baat karti thi');

      word = ic.conjugate('rukna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('rukti thi');

      word = ic.conjugate('padhna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('padhti thi');

      word = ic.conjugate('kam karna', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('kam karti thi');

      word = ic.conjugate('sona', {tense: 'Past', gender: 'female'});
      expect(word).to.equal('soti thi');
    });
  });

  describe('Future tense masculine', () => {
    it.skip('should conjugate hindi Future tense masculine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('nachunga');

      word = ic.conjugate('khana', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('khaunga');

      word = ic.conjugate('peena', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('peeunga');

      word = ic.conjugate('khelna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('khelunga');

      word = ic.conjugate('baat karna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('baat karunga');

      word = ic.conjugate('rukna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('rukunga');

      word = ic.conjugate('padhna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('padhunga');

      word = ic.conjugate('kam karna', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('kam karunga');

      word = ic.conjugate('sona', {tense: 'Future', gender: 'male'});
      expect(word).to.equal('sounga');
    });
  });

  describe('Future tense feminine', () => {
    it('should conjugate hindi Future tense feminine', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('nachungi');

      word = ic.conjugate('khana', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('khaungi');

      word = ic.conjugate('peena', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('peeungi');

      word = ic.conjugate('khelna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('khelungi');

      word = ic.conjugate('baat karna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('baat karungi');

      word = ic.conjugate('rukna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('rukungi');

      word = ic.conjugate('padhna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('padhungi');

      word = ic.conjugate('kam karna', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('kam karungi');

      word = ic.conjugate('sona', {tense: 'Future', gender: 'female'});
      expect(word).to.equal('soungi');
    });
  });
});
