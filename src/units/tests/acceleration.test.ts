import { acceleration } from '../..';

test('g-force to m/s2', () => {
  expect(acceleration.convert('g-force', 'm/s2', 1)).toBeCloseTo(9.80665);
});

test('m/s2 to g-force', () => {
  expect(acceleration.convert('m/s2', 'g-force', 10)).toBeCloseTo(1.01972);
});

test('g-force to gal', () => {
  expect(acceleration.convert('g-force', 'gal', 1)).toBeCloseTo(980.665);
});
