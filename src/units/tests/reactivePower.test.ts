import { reactivePower } from '../..';

test('VAR to VAR', () => {
  expect(reactivePower.convert('VAR', 'VAR', 1)).toBe(1);
});

test('kVAR to mVAR', () => {
  expect(reactivePower.convert('kVAR', 'mVAR', 1)).toBe(1000000);
});

test('MVAR to GVAR', () => {
  expect(reactivePower.convert('MVAR', 'GVAR', 1)).toBe(0.001);
});
