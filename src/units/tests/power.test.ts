import { power } from '../..';

test('W to W', () => {
  expect(power.convert('W', 'W', 1)).toBe(1);
});

test('kW to mW', () => {
  expect(power.convert('kW', 'mW', 1)).toBe(1000000);
});

test('MW to GW', () => {
  expect(power.convert('MW', 'GW', 1)).toBe(0.001);
});
