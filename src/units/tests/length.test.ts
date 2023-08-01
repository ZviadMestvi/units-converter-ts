import { length } from '../..';

// metric
test('m to m', () => {
  expect(length.convert('m', 'm', 1)).toBe(1);
});

test('m to cm', () => {
  expect(length.convert('m', 'cm', 1)).toBe(100);
});

test('cm to m', () => {
  expect(length.convert('cm', 'm', 1)).toBe(0.01);
});

// imperial
test('ft to ft', () => {
  expect(length.convert('ft', 'ft', 1)).toBe(1);
});

test('ft to in', () => {
  expect(length.convert('ft', 'in', 1)).toBe(12);
});

test('in to ft', () => {
  expect(length.convert('in', 'ft', 1)).toBe(1 / 12);
});

// both
test('m to ft', () => {
  expect(length.convert('m', 'ft', 1)).toBeCloseTo(3.28084);
});

test('cm to ft', () => {
  expect(length.convert('cm', 'ft', 1)).toBeCloseTo(0.0328084);
});

test('ft to cm', () => {
  expect(length.convert('ft', 'cm', 1)).toBeCloseTo(30.48);
});
