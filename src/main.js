/************************************ */
/**/ topic('default parameters');
/************************************ */

const repeatSomeText = (someText, times = 2) => {
  for(let i = 0; i < times; i++) {
    console.log(`${i+1}: ${someText}`);
  }
  console.log('-------');
};

repeatSomeText('Hello Padnug');
repeatSomeText('Hello Padnug', 5);

/************************************ */
/**/ topic('default parameters with object literal');
/************************************ */

const repeatSomeTextAgain = ({someText = 'NoneProvided', times = 2} = {}) => {
  for(let i = 0; i < times; i++) {
    console.log(`${i+1}: ${someText}`);
  }
  console.log('-------');
};

repeatSomeTextAgain();
repeatSomeTextAgain({someText: 'Hello PADNUG'});
repeatSomeTextAgain({someText: 'Hello PADNUG', times: 4});

// console.log(name);

// // destructuring

// const array = [1,2,3,4,5,6];
// const [first,second,...rest] = array;
// console.log(first);
// console.log(second);
// console.log(rest);

// const {first, last} = {first: 'Nick', last: 'Muhonen', street: '12324 place', city: 'Owings', state: 'MD', zip: '2017'};
// console.log(first);
// console.log(last);

// string literals

// const newValue = 'Hello';
// console.log(`New Value: ${newValue}`);


// // arrow functions

// const value = "Hello";
// const getPrefixedValue = prefix => `${prefix}-${value}`;

// const literal = {
//   value: 2,
//   doit() {
//     const valuePlus2 = () => this.value + 2;
//     console.log(`Value + 2 = ${valuePlus2()}`);
//   }
// }

// literal.doit();
// literal.value = 17;
// literal.doit();

// console.log(getPrefixedValue('Padnug'));

// // template functions

// const getTemplate = (value,...databindings) => ({
//   value,
//   raw: value.raw,
//   databindings
// });

// const guts = getTemplate`${'Nick'} = 'Nick'\r\n And \r\n ${2 + 2}=4`;
// console.log(guts);

// default parameters

// const repeatSomeText = (someText, times = 2) => {
//   for(let i = 0; i < times; i++) {
//     console.log(`${i+1}: ${someText}`);
//   }
// };

// repeatSomeText('Hello Padnug');
// repeatSomeText('Hello Padnug', 5);


// const repeatSomeText = ({someText = 'NoneProvided', times = 2} = {}) => {
//   for(let i = 0; i < times; i++) {
//     console.log(`${i+1}: ${someText}`);
//   }
//   console.log('-------');
// };

// repeatSomeText();
// repeatSomeText({someText: 'Hello PADNUG'});
// repeatSomeText({someText: 'Hello PADNUG', times: 4});


// // rest

// const rest = (first,...rest) => ({
//   first,
//   rest
// });

// const result = rest(1,2,3,4,5);

// console.log(result);

// rest(1,2,3,4,5,6)

// spread

// const spread = (one,two,three) => ({
//   one,
//   two,
//   three
// });

// const args = [1,2,3,4,5]
// const result = spread(32,...args);
// console.log(result);


