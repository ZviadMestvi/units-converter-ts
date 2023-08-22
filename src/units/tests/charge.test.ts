import { charge } from '../..';

test('c to c', () => {
  expect(charge.convert('c', 'c', 1)).toBe(1);
});

test('c to mC', () => {
  expect(charge.convert('c', 'mC', 1)).toBe(1000);
});

test('nC to μC', () => {
  expect(charge.convert('nC', 'uC', 1)).toBe(0.001);
});

test('pC to μC', () => {
  expect(charge.convert('pC', 'uC', 1)).toBe(0.000001);
});

test('abC to stC', () => {
  expect(charge.convert('abC', 'stC', 1)).toBeCloseTo(29979245799.996);
});
