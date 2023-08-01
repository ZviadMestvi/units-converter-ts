import { pressure } from '../..';

// metric
test('kPa to kPa', () => {
  expect(pressure.convert('kPa', 'kPa', 1)).toBe(1);
});

test('bar to hPa', () => {
  expect(pressure.convert('bar', 'hPa', 1)).toBe(1000);
});

test('MPa to torr', () => {
  expect(pressure.convert('MPa', 'torr', 1)).toBeCloseTo(7500.61683);
});

// imperial
test('psi to ksi', () => {
  expect(pressure.convert('psi', 'ksi', 1)).toBe(0.001);
});

// both
test('psi to kPa', () => {
  expect(pressure.convert('psi', 'kPa', 1)).toBeCloseTo(6.89475729);
});

test('ksi to torr', () => {
  expect(pressure.convert('ksi', 'torr', 1)).toBeCloseTo(51714.95287779034);
});
