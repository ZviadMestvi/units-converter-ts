import { mass } from '../..';

// metric
test('kg to kg', () => {
  expect(mass.convert('kg', 'kg', 1)).toBe(1);
});

test('kg to g', () => {
  expect(mass.convert('kg', 'g', 1)).toBe(1000);
});

test('g to kg', () => {
  expect(mass.convert('g', 'kg', 1)).toBe(0.001);
});

// imperial
test('lb to lb', () => {
  expect(mass.convert('lb', 'lb', 1)).toBe(1);
});

test('lb to oz', () => {
  expect(mass.convert('lb', 'oz', 1)).toBe(16);
});

test('oz to lb', () => {
  expect(mass.convert('oz', 'lb', 1)).toBe(1 / 16);
});

// both
test('kg to lb', () => {
  expect(mass.convert('kg', 'lb', 1)).toBeCloseTo(2.2046226);
});

test('g to lb', () => {
  expect(mass.convert('g', 'lb', 1)).toBeCloseTo(0.00220462);
});

test('lb to g', () => {
  expect(mass.convert('lb', 'g', 1)).toBeCloseTo(453.59237);
});
