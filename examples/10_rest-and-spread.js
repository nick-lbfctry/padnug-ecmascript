/************************************ */
/**/ topic('rest');
/************************************ */

const rest = (first,...rest) => ({
  first,
  rest
});

const restResult = rest(1,2,3,4,5);

show('restResult',restResult);


/************************************ */
/**/ topic('spread');
/************************************ */

const spread = (one,two,three) => ({
  one,
  two,
  three
});

const args = [1,2,3,4,5]
const spreadResult = spread(32,...args);
show('spreadResult',spreadResult);