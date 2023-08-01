import { digital } from '../..';

// bits
test('b to b', () => {
  expect(digital.convert('b', 'b', 1)).toBe(1);
});

test('Mb to Kb', () => {
  expect(digital.convert('Mb', 'Kb', 1)).toBe(1024);
});

test('Gb to Tb', () => {
  expect(digital.convert('Gb', 'Tb', 100)).toBeCloseTo(0.1);
});

// bytes
test('B to B', () => {
  expect(digital.convert('B', 'B', 1)).toBe(1);
});

test('MB to GB', () => {
  expect(digital.convert('MB', 'GB', 1)).toBeCloseTo(0.001);
});

test('TB to GB', () => {
  expect(digital.convert('TB', 'GB', 1)).toBe(1024);
});

// both
test('B to b', () => {
  expect(digital.convert('B', 'b', 1)).toBe(8);
});

test('KB to Kb', () => {
  expect(digital.convert('KB', 'Kb', 1)).toBe(8);
});

test('MB to Tb', () => {
  expect(digital.convert('MB', 'Tb', 1)).toBeCloseTo(0.000008);
});
