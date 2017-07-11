import { Test } from './test';
export class Test2 extends Test {
  constructor(public name, public name2: string, public dt: Date) {
    super(name, dt)
  }
}
