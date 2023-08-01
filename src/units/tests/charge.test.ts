import { charge } from '../..';

test('c to c', () => {
  expect(charge.convert('c', 'c', 1)).toBe(1);
});

test('c to mC', () => {
  expect(charge.convert('c', 'mC', 1)).toBe(1000);
});

test('nC to μC', () => {
  expect(charge.convert('nC', 'μC', 1)).toBe(0.001);
});

test('pC to μC', () => {
  expect(charge.convert('pC', 'μC', 1)).toBe(0.000001);
});
