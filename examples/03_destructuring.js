/************************************ */
/**/ topic('destructuring arrays');
/************************************ */

const array = [1,2,3,4,5,6];
const [firstItem,secondItem,...rest] = array;
show('firstItem',firstItem);
show('secondItem',secondItem);
show('rest',rest);

/************************************ */
/**/ topic('destructuring literals');
/************************************ */

const literal = {
  first: 'Nick',
  last: 'Muhonen'
};
const {first, last, hairColor = 'brown'} = literal;
show('first',first);
show('last',last);
show('hairColot',hairColor);