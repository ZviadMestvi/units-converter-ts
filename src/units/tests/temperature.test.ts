import { temperature } from '../..';

// metric
test('C to C', () => {
  expect(temperature.convert('C', 'C', 1)).toBe(1);
});

test('K to C', () => {
  expect(temperature.convert('K', 'C', 1)).toBeCloseTo(-272.15);
});

// imperial
test('F to R', () => {
  expect(temperature.convert('F', 'R', 1)).toBeCloseTo(460.67);
});

// both
test('F to K', () => {
  expect(temperature.convert('F', 'K', 1)).toBeCloseTo(255.927778);
});

test('C to R', () => {
  expect(temperature.convert('C', 'R', 1)).toBeCloseTo(493.47);
});
