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