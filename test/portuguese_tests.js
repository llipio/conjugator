import expect from 'expect';
import { Portuguese } from '../src/portuguese';

describe('Portuguese', () => {
  
  describe('Regular Verbs', () => {
    
    describe("Mood: 'Indicativo'", () => {
      describe("Tense: 'Presente'", () => {
        describe("Verbs ending in -ar", () => {
          describe("Singular", () => {
            var info = null;
            const pt = new Portuguese();    
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: true, person: '1', gender: 'unkown'};
            });
            
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["falo", "ando", "caço", "nado", "salto"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["falas", "andas", "caças", "nadas", "saltas"]);
            });
            it('should conjugate in the 3rd person', () => {
              info.person = '3';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["fala", "anda", "caça", "nada", "salta"]);
            });
            
          })
          
          describe("Plural", () => {
            var info = null;
            const pt = new Portuguese();    
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: false, person: '1', gender: 'unkown'};
            });
            
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["falamos", "andamos", "caçamos", "nadamos", "saltamos"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["falais", "andais", "caçais", "nadais", "saltais"]);
            });
            it('should conjugate in the 3rd person', () => {
              info.person = '3';
              var verbs = ["falar", "andar", "caçar", "nadar", "saltar"];
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["falam", "andam", "caçam", "nadam", "saltam"]);
            });
            
          })
        })
        describe("Verbs ending in -er", () => {
          describe("Singular", () => {
            var info = null;
            const pt = new Portuguese();    
            var verbs = ["meter", "abater", "absolver", "absorver"];
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: true, gender: 'unkown'};
            });
            
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["meto", "abato", "absolvo", "absorvo"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["metes", "abates", "absolves", "absorves"]);
            });
            it('should conjugate in the 3nd person', () => {
              info.person = '3';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["mete", "abate", "absolve", "absorve"]);
            });
          })
          
          describe("Plural", () => {
            var info = null;
            const pt = new Portuguese();    
            var verbs = ["meter", "abater", "absolver", "absorver"];
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: false, gender: 'unkown'};
            });
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["metemos", "abatemos", "absolvemos", "absorvemos"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["meteis", "abateis", "absolveis", "absorveis"]);
            });
            it('should conjugate in the 3nd person', () => {
              info.person = '3';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["metem", "abatem", "absolvem", "absorvem"]);
            });
          })
          
        })
        describe("Verbs ending in -ir", () => {
          describe("Singular", () => {
            var info = null;
            const pt = new Portuguese();    
            var verbs = ["abrir", "abduzir", "adquirir"];
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: true, gender: 'unkown'};
            });
            
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abro", "abduzo", "adquiro"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abres", "abduzes", "adquires"]);
            });
            it('should conjugate in the 3nd person', () => {
              info.person = '3';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abre", "abduze", "adquire"]);
            });
          })
          
          describe("Plural", () => {
            var info = null;
            const pt = new Portuguese();    
            var verbs = ["abrir", "abduzir", "adquirir"];
            beforeEach(()=> {
              info = {mood: 'Indicativo', tense: 'Presente', formal: false, singular: false, gender: 'unkown'};
            });
            
            it('should conjugate in the 1st person', () => {
              info.person = '1';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abrimos", "abduzimos", "adquirimos"]);
            });
            it('should conjugate in the 2nd person', () => {
              info.person = '2';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abris", "abduzis", "adquiris"]);
            });
            it('should conjugate in the 3nd person', () => {
              info.person = '3';
              var result = verbs.map(v => pt.conjugate(v, info));
              expect(result).toEqual(["abrem", "abduzem", "adquirem"]);
            });
          })
          
          
          
        })
      })
      
    });
    
  })
})
