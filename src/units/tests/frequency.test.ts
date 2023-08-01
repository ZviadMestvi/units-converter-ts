import { frequency } from '../..';

test('Hz to Hz', () => {
  expect(frequency.convert('Hz', 'Hz', 1)).toBe(1);
});

test('mHz to Hz', () => {
  expect(frequency.convert('mHz', 'Hz', 1)).toBe(0.001);
});

test('GHz to kHz', () => {
  expect(frequency.convert('GHz', 'kHz', 1)).toBe(1000000);
});

test('rad/s to rpm', () => {
  expect(frequency.convert('rad/s', 'rpm', 1)).toBeCloseTo(9.5492968);
});
