import { apparentPower } from '../..';

test('VA to VA', () => {
  expect(apparentPower.convert('VA', 'VA', 1)).toBe(1);
});

test('VA to mVA', () => {
  expect(apparentPower.convert('VA', 'mVA', 1)).toBe(1000);
});

test('VA to kVA', () => {
  expect(apparentPower.convert('VA', 'kVA', 1)).toBe(0.001);
});

test('GVA to MVA', () => {
  expect(apparentPower.convert('GVA', 'MVA', 1)).toBe(1000);
});
