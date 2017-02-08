import {Outer} from './outer';

export class Inner {
  createOuter() {
    return new Outer();
  }

  get value() {
    return 'inner';
  }
}