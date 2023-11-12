import { sum, substract } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('substract', () => {
  it('should substract 2 numbers', () => {
    expect(substract(2, 1)).toEqual(1);
  });

  it('should substract 2 numbers even if result is negative', () => {
    expect(substract(2, 5)).toEqual(-3);
  });
});
