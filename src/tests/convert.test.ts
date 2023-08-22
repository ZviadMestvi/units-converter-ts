import { convert, length, mass } from '..';

test('should convert from one unit to another', () => {
  const result1 = mass.convert('kg', 'g', 1);
  expect(result1).toBe(1000);

  const result2 = mass.convert('kg', 'lb', 100);
  expect(result2).toBeCloseTo(220.462262);

  const result3 = length.convert('in', 'cm', 10);
  expect(result3).toBeCloseTo(25.4);

  const result4 = convert.convert('K', 'C', 1);
  expect(result4).toBe(-272.15);
});

test('should return the same value for the same units', () => {
  const result1 = length.convert('m', 'm', 10);
  expect(result1).toBe(10);

  const result2 = convert.convert('m', 'm', 10);
  expect(result2).toBe(10);
});

test('should return NaN if value is not inputted', () => {
  const result1 = length.convert('m', 'm', parseInt(''));
  expect(result1).toBe(NaN);

  const result2 = convert.convert('m', 'm', parseInt(''));
  expect(result2).toBe(NaN);
});

test('should throw an error for an invalid unit', () => {
  expect(() => mass.convert('invalidUnit', 'kg', 100)).toThrow(
    `Unit 'invalidUnit' is not a valid or supported unit for this measure. Get list of units using {measure}.possibilities()`
  );

  expect(() => convert.convert('invalidUnit', 'kg', 100)).toThrow(`Unit 'invalidUnit' could not be found. Get list of units using convert.possibilities()`);
});

test('should throw an error if units are not from the same measure', () => {
  expect(() => convert.convert('mm', 'kg', 100)).toThrow(`Cannot convert between incompatible measures 'length' and 'mass'`);
});
