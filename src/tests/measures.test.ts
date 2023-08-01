import { convert } from '..';
import { allMeasures } from '../types';

test('should return array of available measures', () => {
  const actual = convert.measures();
  const expected = allMeasures;

  expect(actual).toEqual(expected);
});
