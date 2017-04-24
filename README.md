# conjugator
Conjugator for languages, currently supporting Korean and Hindi. Quickly look up a verb and its usage!

The conjugator takes in a verb and a grammar form and outputs the conjugated word. For example, the future form of ‘하다’(to do) should return ‘할꺼야’(will do). This API will come handy for people who are learning a new language or, if you’re like me, building a language learning app (https://llip.io).

# Usage
```
// First get a conjugator object for language of your choice. (We currently only support korean and hindi)
let koreanConjugator = Conjugator.create('korean');

// Call the conjugator object's conjugate method to conjugate the verb of your liking
let conjugatedWord = koreanConjugator.conjugate(‘하다’, {
  tense: 'future',
  });

```

# Tests
`npm run test`

[Full API Documentation](https://github.com/llipio/conjugator/wiki)

# Before commit a pull request (Must)
```sh
$ npm run eslint
```
