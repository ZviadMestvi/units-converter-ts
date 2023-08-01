import { length, mass, temperature } from '..';

test('should convert from one unit to another', () => {
  const result1 = mass.convert('kg', 'g', 1);
  expect(result1).toBe(1000);

  const result2 = mass.convert('kg', 'lb', 100);
  expect(result2).toBeCloseTo(220.462262);

  const result3 = length.convert('in', 'cm', 10);
  expect(result3).toBeCloseTo(25.4);

  const result4 = temperature.convert('K', 'C', 1);
  expect(result4).toBe(-272.15);
});

test('should return the same value for the same units', () => {
  const result = length.convert('m', 'm', 10);
  expect(result).toBe(10);
});

test('should return NaN if value is not inputted', () => {
  const result = length.convert('m', 'm', parseInt(''));
  expect(result).toBe(NaN);
});

test('should throw an error for an invalid unit', () => {
  expect(() => mass.convert('invalidUnit', 'kg', 100)).toThrow(
    `Unit 'invalidUnit' is not a valid or supported unit for this measure. Get list of units using {measure}.possibilities()`
  );
});
