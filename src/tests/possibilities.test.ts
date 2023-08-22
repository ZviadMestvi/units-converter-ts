import { convert, mass } from '..';
import { allUnits } from '../units/all';

test('should return array of mass measure possibilities', () => {
  const actual = mass.possibilities();
  const expected = allUnits.mass;

  expect(actual).toEqual(expected);
});

test('should return array of specific measure possibilities', () => {
  const actual = convert.possibilities('length');
  const expected = allUnits['length'];

  expect(actual).toEqual(expected);
});

test('should return array of specific measures possibilities', () => {
  const actual = convert.possibilities('length', 'pace');
  const expected = [...allUnits['length'], ...allUnits.pace];

  expect(actual).toEqual(expected);
});

test('should return array of all possibilities if no argument is provided', () => {
  const actual = convert.possibilities();
  const expected = Object.values(allUnits).flat();

  expect(actual).toEqual(expected);
});
