import { current } from '../..';

test('A to A', () => {
  expect(current.convert('A', 'A', 1)).toBe(1);
});

test('mA to kA', () => {
  expect(current.convert('mA', 'kA', 1)).toBe(0.000001);
});

test('kA to A', () => {
  expect(current.convert('kA', 'A', 1)).toBe(1000);
});

test('stA to abA', () => {
  expect(current.convert('stA', 'abA', 100)).toBeCloseTo(0.000000003335641);
});
