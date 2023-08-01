import { mass } from '..';
import { length } from '..';
import { IUnitDescription } from '../types';

test('should return the correct description for the valid unit. measure mass', () => {
  const description: IUnitDescription = mass.describe('kg');
  expect(description).toEqual({
    abbreviation: 'kg',
    measure: 'mass',
    plural: 'kilograms',
    singular: 'kilogram',
    system: 'metric',
  });
});

test('should return the correct description for the valid unit. measure length', () => {
  const description: IUnitDescription = length.describe('in');
  expect(description).toEqual({
    abbreviation: 'in',
    measure: 'length',
    plural: 'inches',
    singular: 'inch',
    system: 'imperial',
  });
});

test('should throw an error for an invalid unit', () => {
  expect(() => mass.describe('invalidUnit')).toThrow(
    `Unit 'invalidUnit' is not a valid or supported unit for this measure. Get list of units using {measure}.possibilities()`
  );
});
