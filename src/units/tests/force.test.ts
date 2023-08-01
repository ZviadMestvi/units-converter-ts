import { force } from '../..';

test('N to N', () => {
  expect(force.convert('N', 'N', 1)).toBe(1);
});

test('kN to N', () => {
  expect(force.convert('kN', 'N', 1)).toBe(1000);
});

test('kN to lbf', () => {
  expect(force.convert('kN', 'lbf', 1)).toBeCloseTo(224.808943);
});
