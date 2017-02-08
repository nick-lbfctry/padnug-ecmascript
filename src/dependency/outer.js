import {Inner} from './inner';

export class Outer {
  createInner() {
    return new Inner();
  }

  get value() {
    return 'outer';
  }

}
