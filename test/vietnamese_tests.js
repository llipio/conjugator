// Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Vietnamese } from '../src/vietnamese';

describe('Vietnamese', () => {
  describe('Present', () => {
    it('should conjugate Vietnamese present tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Present' });
      expect(word).to.equal('xảy ra');

      word = vn.conjugate('cảm thấy', { tense: 'Present' });
      expect(word).to.equal('cảm thấy');

      word = vn.conjugate('đi', { tense: 'Present' });
      expect(word).to.equal('đi');

      word = vn.conjugate('cần', { tense: 'Present' });
      expect(word).to.equal('cần');
    });
  });

  describe('Past', () => {
    it('should conjugate Vietnamese past tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Past' });
      expect(word).to.equal('đã xảy ra / xảy ra rồi');

      word = vn.conjugate('cảm thấy', { tense: 'Past' });
      expect(word).to.equal('đã cảm thấy / cảm thấy rồi');

      word = vn.conjugate('đi', { tense: 'Past' });
      expect(word).to.equal('đã đi / đi rồi');

      word = vn.conjugate('cần', { tense: 'Past' });
      expect(word).to.equal('đã cần / cần rồi');
    });
  });

  describe('Future', () => {
    it('should conjugate Vietnamese future tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Future' });
      expect(word).to.equal('sẽ xảy ra');

      word = vn.conjugate('cảm thấy', { tense: 'Future' });
      expect(word).to.equal('sẽ cảm thấy');

      word = vn.conjugate('đi', { tense: 'Future' });
      expect(word).to.equal('sẽ đi');

      word = vn.conjugate('cần', { tense: 'Future' });
      expect(word).to.equal('sẽ cần');
    });
  });

  describe('Present Continuous', () => {
    it('should conjugate Vietnamese present Continuous tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Present Continuous' });
      expect(word).to.equal('đang xảy ra');

      word = vn.conjugate('cảm thấy', { tense: 'Present Continuous' });
      expect(word).to.equal('đang cảm thấy');

      word = vn.conjugate('đi', { tense: 'Present Continuous' });
      expect(word).to.equal('đang đi');

      word = vn.conjugate('cần', { tense: 'Present Continuous' });
      expect(word).to.equal('đang cần');
    });
  });

  describe('Past Continuous', () => {
    it('should conjugate Vietnamese past Continuous tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Past Continuous' });
      expect(word).to.equal('đã đang xảy ra');

      word = vn.conjugate('cảm thấy', { tense: 'Past Continuous' });
      expect(word).to.equal('đã đang cảm thấy');

      word = vn.conjugate('đi', { tense: 'Past Continuous' });
      expect(word).to.equal('đã đang đi');

      word = vn.conjugate('cần', { tense: 'Past Continuous' });
      expect(word).to.equal('đã đang cần');
    });
  });

  describe('Future Continuous', () => {
    it('should conjugate Vietnamese future Continuous tense', () => {
      let word;
      const vn = new Vietnamese();

      word = vn.conjugate('xảy ra', { tense: 'Future Continuous' });
      expect(word).to.equal('đang sẽ xảy ra');

      word = vn.conjugate('cảm thấy', { tense: 'Future Continuous' });
      expect(word).to.equal('đang sẽ cảm thấy');

      word = vn.conjugate('đi', { tense: 'Future Continuous' });
      expect(word).to.equal('đang sẽ đi');

      word = vn.conjugate('cần', { tense: 'Future Continuous' });
      expect(word).to.equal('đang sẽ cần');
    });
  });
});
