/************************************ */
/**/ topic('computed properties');
/************************************ */

const prop1 = 'prop1';
const prop2 = 'prop2';

const literal = {
  [prop1]: 'one',
  [prop2]: 'two',
  [prop1+prop2]: 'combined'
};

show('result',literal);