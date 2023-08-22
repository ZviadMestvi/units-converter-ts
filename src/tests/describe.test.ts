import { convert } from '..';
import { IUnitDescription } from '../types';

test('should return the correct description for the valid unit. measure mass', () => {
  const description: IUnitDescription = convert.describe('kg');
  expect(description).toEqual({
    abbreviation: 'kg',
    measure: 'mass',
    plural: 'kilograms',
    singular: 'kilogram',
    system: 'metric',
  });
});

test('should return the correct description for the valid unit. measure length', () => {
  const description: IUnitDescription = convert.describe('in');
  expect(description).toEqual({
    abbreviation: 'in',
    measure: 'length',
    plural: 'inches',
    singular: 'inch',
    system: 'imperial',
  });
});

test('should throw an error for an invalid unit', () => {
  expect(() => convert.describe('invalidUnit')).toThrow(`Cannot get measure. Unit 'invalidUnit' could not be found. Get list of units using convert.possibilities()`);
});
