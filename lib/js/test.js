const z = require('./src/demo.js');

// result should look like {1verb: [...], 1adjective: [...]}
const result = z.conjugate('estudiar', { tense: 'present', subject: 'ella' });
const result2 = z.conjugate('comer', { tense: 'present', subject: 'tu' });

console.log('your result is: ', result);
console.log('your result is: ', result2);
