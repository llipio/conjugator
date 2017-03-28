//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Hindi } from '../src/hindi';

describe('Hindi', () => {
  describe('Present Tense', () => {
    it('should conjugate hindi present tense', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'present'});
      expect(word).to.equal('nachta hoon');

      word = ic.conjugate('khana', {tense: 'present'});
      expect(word).to.equal('khata hoon');

      word = ic.conjugate('peena', {tense: 'present'});
      expect(word).to.equal('peeta hoon');

      word = ic.conjugate('khelna', {tense: 'present'});
      expect(word).to.equal('khelta hoon');

      word = ic.conjugate('baat karna', {tense: 'present'});
      expect(word).to.equal('baat karta hoon');

      word = ic.conjugate('rukna', {tense: 'present'});
      expect(word).to.equal('rukta hoon');

      // I'm not sure what tense the below are, but I'm guessing they aren't present tense. -Bryan
      // word = ic.conjugate('padhna', {tense: 'present'});
      // expect(word).to.equal('padhne un janga');

      // word = ic.conjugate('kam karna', {tense: 'present'});
      // expect(word).to.equal('kam karne un janga');

      // word = ic.conjugate('sona', {tense: 'present'});
      // expect(word).to.equal('sone un janga');
    });
  });

  describe('Past Tense', () => {
    it('should conjugate hindi past tense', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'past'});
      expect(word).to.equal('nachta tha');

      word = ic.conjugate('khana', {tense: 'past'});
      expect(word).to.equal('khata tha');

      word = ic.conjugate('peena', {tense: 'past'});
      expect(word).to.equal('peeta tha');

      word = ic.conjugate('khelna', {tense: 'past'});
      expect(word).to.equal('khelta tha');

      word = ic.conjugate('baat karna', {tense: 'past'});
      expect(word).to.equal('baat karta tha');

      word = ic.conjugate('rukna', {tense: 'past'});
      expect(word).to.equal('rukta tha');

      word = ic.conjugate('padhna', {tense: 'present'});
      expect(word).to.equal('padhta hoon');

      word = ic.conjugate('kam karna', {tense: 'present'});
      expect(word).to.equal('kam karta hoon');

      word = ic.conjugate('sona', {tense: 'present'});
      expect(word).to.equal('sota hoon');
    });
  });

  describe('Future Tense', () => {
    it('should conjugate hindi Future tense', () => {
      let word;
      const ic = new Hindi();

      word = ic.conjugate('nachna', {tense: 'Future'});
      expect(word).to.equal('nachne ja unga');

      word = ic.conjugate('khana', {tense: 'Future'});
      expect(word).to.equal('khane ja unga');

      word = ic.conjugate('peena', {tense: 'Future'});
      expect(word).to.equal('peene ja unga');

      word = ic.conjugate('khelna', {tense: 'Future'});
      expect(word).to.equal('khelne ja unga');

      word = ic.conjugate('baat karna', {tense: 'Future'});
      expect(word).to.equal('baat karne ja unga');

      word = ic.conjugate('rukna', {tense: 'Future'});
      expect(word).to.equal('rukne ja unga');

      word = ic.conjugate('padhna', {tense: 'Future'});
      expect(word).to.equal('padhta hoon');

      word = ic.conjugate('kam karna', {tense: 'Future'});
      expect(word).to.equal('kam karta hoon');

      word = ic.conjugate('sona', {tense: 'Future'});
      expect(word).to.equal('sota hoon');
    });
 });
});


