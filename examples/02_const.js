/************************************ */
/**/ topic('const examples');
/************************************ */

const first = 'Nick';
const last = 'Muhonen';

if (true) {
  const first = 'Izzie';
  show('first in block',first);
  show('last in block',last);
}

show('first out of block', first);
show('last out of block', last);

//this breaks
//first = 'Izzie'