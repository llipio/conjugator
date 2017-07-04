[![Build Status](https://travis-ci.org/llipio/conjugator.svg?branch=master)](https://travis-ci.org/llipio/conjugator)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/llipio/)

# Universal Conjugator

The conjugator takes in a verb and a grammar form and outputs the conjugated word. For example, the future form of ‘하다’(to do) should return ‘할거야’(will do). This API will come handy for people who are learning a new language or, if you’re like us, building a language learning app [https://llip.io](https://llip.io). As for now, the following languages are     supported:

* Korean
* Hindi
* French
* Spanish
* Vietnamese

[Full API Documentation](https://github.com/llipio/conjugator/wiki)
 
## The Conjugator Website
The Conjugator Webiste is live! [https://llipio.github.io/conjugator](https://llipio.github.io/conjugator/)
 
## Installing / Getting started
Installing universal-conjugator can be done with npm.  The link to the npm page can be found [here](https://www.npmjs.com/package/universal-conjugator).
```shell
npm install universal-conjugator
```

## Usage
First, create a supported language conjugator.  Second, pass in a verb and attributes (e.g. tense) associated with the language.

```shell
# Import the universal-conjugator module
let Conjugator = require('universal-conjugator');

# First get a conjugator object for language of your choice
let koreanConjugator = Conjugator.create('korean');
  
#  Call the conjugator's conjugate method to conjugate the verb of your liking
let conjugatedWord = koreanConjugator.conjugate(‘하다’, {
  tense: 'future',
  });
```

## Developing
To start developing, fork and clone the reposity onto your local computer and run npm install.
```shell
git clone https://github.com/llipio/conjugator.git
cd conjugator
npm install
```

To contribute to the Conjugator Website, please submit pull request to origin/website branch.

# Tests
Tests are written with Chai.js.  Reference for the library is [here](http://chaijs.com/).  After writing tests, use the below instructions to run the tests.
```shell
npm run test        # run single time
npm run test:watch  # live re-run test for any change
```

# Contributing

We warmly welcome contributions and pull requests to the universal-conjugator project.  If you'd like to contribute, please fork the repository and use a feature branch.

## Licensing

The code in this project is licensed under [MIT license](https://github.com/llipio/conjugator/blob/master/LICENSE).
