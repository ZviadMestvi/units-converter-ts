import { reactiveEnergy } from '../..';

test('VARh to VARh', () => {
  expect(reactiveEnergy.convert('VARh', 'VARh', 1)).toBe(1);
});

test('MVARh to mVARh', () => {
  expect(reactiveEnergy.convert('MVARh', 'mVARh', 1)).toBe(1000000000);
});

test('kVARh to GVARh', () => {
  expect(reactiveEnergy.convert('kVARh', 'GVARh', 1)).toBe(0.000001);
});
