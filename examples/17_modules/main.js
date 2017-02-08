import {Inner} from 'dependency/inner';
import {Outer} from 'dependency/outer';

/************************************ */
/**/ topic('modules');
/************************************ */

const inner = new Inner();

const outer = new Outer();

show('create circular dependency', inner.createOuter().value);
show('create circular dependency', outer.createInner().value);