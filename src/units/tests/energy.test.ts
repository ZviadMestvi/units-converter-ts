import { energy } from '../..';

test('J to J', () => {
  expect(energy.convert('J', 'J', 1)).toBe(1);
});

test('mWh to Wh', () => {
  expect(energy.convert('mWh', 'Wh', 1)).toBe(0.001);
});

test('GWh to kWh', () => {
  expect(energy.convert('GWh', 'kWh', 1)).toBe(1000000);
});

test('MWh to kJ', () => {
  expect(energy.convert('MWh', 'kJ', 1)).toBe(3600000);
});
