import { voltage } from '../..';

test('V to V', () => {
  expect(voltage.convert('V', 'V', 1)).toBe(1);
});

test('kV to mV', () => {
  expect(voltage.convert('kV', 'mV', 1)).toBe(1000000);
});
