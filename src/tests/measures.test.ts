import { convert } from '..';
import { allMeasureNames } from '../units/all';

test('should return array of available measures', () => {
  const actual = convert.measures();
  const expected = allMeasureNames;

  expect(actual).toEqual(expected);
});
