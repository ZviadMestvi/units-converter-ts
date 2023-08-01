import { speed } from '../..';

// metric
test('km/h to km/h', () => {
  expect(speed.convert('km/h', 'km/h', 1)).toBe(1);
});

test('m/s to km/h', () => {
  expect(speed.convert('m/s', 'km/h', 1)).toBe(3.6);
});

// imperial
test('mi/h to ft/s', () => {
  expect(speed.convert('mi/h', 'ft/s', 1)).toBeCloseTo(1.46666667);
});

test('mi/h to knot', () => {
  expect(speed.convert('mi/h', 'knot', 1)).toBeCloseTo(0.868976242);
});

// both
test('km/h to knot', () => {
  expect(speed.convert('km/h', 'knot', 1)).toBeCloseTo(0.539956803);
});

test('mi/h to m/s', () => {
  expect(speed.convert('mi/h', 'm/s', 1)).toBeCloseTo(0.44704);
});
