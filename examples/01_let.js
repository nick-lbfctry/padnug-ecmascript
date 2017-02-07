/************************************ */
/**/ topic('let examples');
/************************************ */

let first = 'Nick';
let last = 'Muhonen';

if (true) {
  let first = 'Izzie';
  show('first in block',first);
  show('last in block',last);
}

show('first outside block',first);
show('last outside block',last);