import { volume } from '../..';

// metric
test('l to l', () => {
  expect(volume.convert('l', 'l', 1)).toBe(1);
});

test('dl to ml', () => {
  expect(volume.convert('dl', 'ml', 1)).toBe(100);
});

test('glas to m3', () => {
  expect(volume.convert('glas', 'm3', 1)).toBe(0.0002);
});

// imperial
test('cup to fl-oz', () => {
  expect(volume.convert('cup', 'fl-oz', 1)).toBe(8);
});

test('in3 to Tbs', () => {
  expect(volume.convert('in3', 'Tbs', 1)).toBeCloseTo(1.1082251082);
});

test('ft3 to yd3', () => {
  expect(volume.convert('ft3', 'yd3', 1)).toBeCloseTo(0.037);
});

// both
test('fl-oz to l', () => {
  expect(volume.convert('fl-oz', 'l', 1)).toBeCloseTo(0.0295735296);
});

test('cup to cl', () => {
  expect(volume.convert('cup', 'cl', 1)).toBeCloseTo(23.6588236);
});

test('ft3 to kanna', () => {
  expect(volume.convert('ft3', 'kanna', 1)).toBeCloseTo(10.820340879846148);
});
