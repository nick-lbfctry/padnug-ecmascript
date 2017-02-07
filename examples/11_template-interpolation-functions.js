/************************************ */
/**/ topic('template interoplation');
/************************************ */

const showInsideTemplate = (template,...dataBindings) => ({
  template,
  raw: template.raw,
  dataBindings
});

const result = showInsideTemplate`
 1 + 1 = ${1 + 1} 
 2 + 2 = ${2 + 2}\r\n 3 + 3 = ${3 + 3}
`;

show('result', result);