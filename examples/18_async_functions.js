/************************************ */
/**/ topic('async functions');
/************************************ */

async function doit({fail, value} = {}) {
  if (fail) {
    throw 'Failed!';
  }

  return value + 1;
}

async function completeAsync(config) {
  try {
    const success = await doit(config);
    return success;
  }
  catch (e) {
    throw e;
  }
}

completeAsync({value: 11}).then(result => show('success', result));
completeAsync({fail: true})
  .then(result => show('success', result))
  .catch(error => show('failed!', error));

show('Completed async calls');
