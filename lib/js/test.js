const z = require('./src/spanish.js');

// result should look like {1verb: [...], 1adjective: [...]}
const result = z.conjugate('estudiar', { tense: 'past', subject: 'él/ella/Ud.' });
const result2 = z.conjugate('comer', { tense: 'past', subject: 'tú' });

console.log('your result is: ', result);
console.log('your result is: ', result2);
