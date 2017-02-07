/************************************ */
/**/ topic('promises');
/************************************ */

const createPromise = ({fail, value} = {}) => new Promise((resolve, reject) => {
  if (fail) {
    reject('failed');
  } else {
    resolve(value);
  }
});

createPromise({value: 12}).then(
  (result) => show('succeeded',result)
);

createPromise({fail: true}).then(
  () => {},
  (error) => show('promise failed',error)
);

createPromise({fail: true}).catch(
  (error) => show('promise caught',error)
);

const promises = [
  createPromise({value: 1}),
  createPromise({value: 2}),
  createPromise({value: 3}),
]

Promise.all(promises).then(result => show('promise all result:', result));

show('launched promises');