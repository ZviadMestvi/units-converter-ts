import { area } from '../..';

// metric
test('m2 to m2', () => {
  expect(area.convert('m2', 'm2', 1)).toBe(1);
});

test('m2 to cm2', () => {
  expect(area.convert('m2', 'cm2', 1)).toBe(10000);
});

test('cm2 to m2', () => {
  expect(area.convert('cm2', 'm2', 1)).toBe(0.0001);
});

// imperial
test('ft2 to ft2', () => {
  expect(area.convert('ft2', 'ft2', 1)).toBe(1);
});

test('ft2 to in2', () => {
  expect(area.convert('ft2', 'in2', 1)).toBe(144);
});

test('twp to ft2', () => {
  expect(area.convert('twp', 'ft2', 1)).toBe(1003622400);
});

// both
test('m2 to ft2', () => {
  expect(area.convert('m2', 'ft2', 1)).toBeCloseTo(10.764);
});

test('cm2 to ft2', () => {
  expect(area.convert('cm2', 'ft2', 100)).toBeCloseTo(0.10764);
});

test('ft2 to cm2', () => {
  expect(area.convert('ft2', 'cm2', 1)).toBeCloseTo(929.0304);
});
