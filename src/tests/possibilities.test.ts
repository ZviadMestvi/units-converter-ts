import { convert, mass } from '..';
import { allUnits } from '../types';

test('should return array of mass measure possibilities', () => {
  const actual = mass.possibilities();
  const expected = [
    'mg',
    'g',
    'kg',
    't',
    'kt',
    'mt',
    'gr',
    'dr',
    'oz',
    'lb',
    'stone',
    'qr',
    'slug',
    'tn',
    'ton-uk',
  ];

  expect(actual).toEqual(expected);
});

test('should return array of all possibilities', () => {
  const actual = convert.allPossibilities();
  const expected = allUnits;

  expect(actual).toEqual(expected);
});
