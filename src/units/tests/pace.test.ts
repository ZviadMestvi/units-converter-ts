import { pace } from '../..';

// metric
test('s/m to s/m', () => {
  expect(pace.convert('s/m', 's/m', 1)).toBe(1);
});

test('s/m to min/km', () => {
  expect(pace.convert('s/m', 'min/km', 1)).toBeCloseTo(16.6666667);
});

// imperial
test('s/ft to min/mi', () => {
  expect(pace.convert('s/ft', 'min/mi', 1)).toBeCloseTo(88);
});

// both
test('s/m to s/ft', () => {
  expect(pace.convert('s/m', 's/ft', 1)).toBeCloseTo(0.3048);
});
