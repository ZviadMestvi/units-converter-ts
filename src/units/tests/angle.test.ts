import { angle } from '../..';

test('deg to deg', () => {
  expect(angle.convert('deg', 'deg', 1)).toBe(1);
});

test('deg to arcmin', () => {
  expect(angle.convert('deg', 'arcmin', 1)).toBe(60);
});

test('arcsec to deg', () => {
  expect(angle.convert('arcsec', 'grad', 10)).toBeCloseTo(0.00277778);
});

test('rad to rev', () => {
  expect(angle.convert('rad', 'rev', 1)).toBeCloseTo(0.159155);
});
