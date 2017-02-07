/************************************ */
/**/ topic('template literals');
/************************************ */

const value = 'Two';

const phrase = `
  ${1 + 1} = 
  ${value}
`;
show('template result', phrase);