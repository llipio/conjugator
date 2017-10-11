[![Build Status](https://travis-ci.org/llipio/conjugator.svg?branch=master)](https://travis-ci.org/llipio/conjugator)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/llipio/)

# Universal Conjugator Prototype in ReasonML

The conjugator takes in a verb and a grammar form and outputs the conjugated word. For example, the future form of ‘comer’ (to eat) should return ‘comeramos’ (We will eat). This API will come handy for people who are learning a new language or, if you’re like us, building a language learning app [https://llip.io](https://llip.io). 

As for now, Spanish is prototyped with the following conjugation schemes:

* Regular Present Tense
* Regular Past Tense
* Regular Future Tense

## Motivation for migrating the conjugator to ReasonML

  1) Typing word segments over creating word segment objects

  - First implemented in Javascript, conjugation relied on string manipulation. Every word segment such as the verb endings 'Ar', 'Er', 'Ir' can be misplaced in the concatenation of strings, making testing more difficult.

  2) Static Typing 

  - Static typing would have allowed the creation of 'type' classes from verb endings to irregular verb endings.


    type irregularVerbType = Zco | Go | Igo;
    type verbEndings = Ar | Er | Ir;


  3) Type Based Conjugation 
                  
    - Creating irregular verb types would make other conjugation such as Subjunctive Tense, easier. Irregular verbs can then be conjugated by based on rules, instead of hardcoding values.

  4) Performance Improvement

    - Reason improves performance by static typing. The compiler checks every parameter for its type, ensuring only the right type is passed in, and is mapped to an integer to make the switch statements much faster (over comparing strings). 

## Postponing the proposed migration to ReasonML

##### Issues

  1) Unicode is handled by an BuckleScript Library

  - The Bucklescript compiler currently uses a lexer which turns unicode into the form \xddd where d is a digit.
  - We had to wrap all of our unicode values as such `{js|ú|js}`.

  2) Pattern Matching

  - ReasonML does not pattern matching unicode values.
  - This means that our rule based conjugator cannot use any comparisons.

  3) Having to create wrappers

  - All of the issues can be handled by creating input value wrapper functions.
  - This solution will be a hack to be able to support the language.

## Moving forward

This project will have to wait till ReasonML supports unicode pattern matching.

## Contributing                                                                                                                                                                     

We warmly welcome contributions and pull requests to the universal-conjugator project.  If you'd like to contribute, please fork the repository and use a feature branch.$                                                                                                                                                                                             

## Licensing                                                                                                                                                                        
The code in this project is licensed under [MIT license](https://github.com/llipio/conjugator/blob/master/LICENSE)


