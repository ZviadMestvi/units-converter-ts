import { illuminance } from '../..';

test('lx to lx', () => {
  expect(illuminance.convert('lx', 'lx', 1)).toBe(1);
});

test('ft-cd to lx', () => {
  expect(illuminance.convert('ft-cd', 'lx', 1)).toBeCloseTo(10.76391);
});
