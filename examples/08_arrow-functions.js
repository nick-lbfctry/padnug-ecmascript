/************************************ */
/**/ topic('array functions');
/************************************ */

const value = 'Padnug'
const withPrefix = prefix => `${prefix} ${value}`;

console.log(withPrefix('Hello'));

/************************************ */
/**/ topic('this scoping');
/************************************ */

const literal = {
  value: 'Padnug',
  doit() {
    const withPrefix = prefix => `${prefix} ${this.value}`;
    console.log(withPrefix('Hello Again'));
  }
};

literal.doit();

