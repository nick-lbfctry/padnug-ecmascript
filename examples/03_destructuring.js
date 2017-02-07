// destructuring array

const array = [1,2,3,4,5,6];
const [firstItem,secondItem,...rest] = array;
console.log('In Array:');
console.log(firstItem);
console.log(secondItem);
console.log(rest);

// destructuring literals

console.log('In Literal:');
const literal = {
  first: 'Nick',
  last: 'Muhonen'
};
const {first, last, hairColor = 'brown'} = literal;
console.log(first);
console.log(last);
console.log(hairColor);