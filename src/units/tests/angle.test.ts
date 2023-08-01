import { angle } from '../..';

test('deg to deg', () => {
  expect(angle.convert('deg', 'deg', 1)).toBe(1);
});

test('deg to arcmin', () => {
  expect(angle.convert('deg', 'arcmin', 1)).toBe(60);
});

test('arcmin to deg', () => {
  expect(angle.convert('arcmin', 'grad', 10)).toBeCloseTo(0.19);
});

test('rad to arcsec', () => {
  expect(angle.convert('rad', 'arcsec', 1)).toBeCloseTo(206264.80625);
});
