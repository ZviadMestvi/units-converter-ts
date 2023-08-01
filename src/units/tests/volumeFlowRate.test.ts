import { volumeFlowRate } from '../..';

// metric
test('l/s to l/s', () => {
  expect(volumeFlowRate.convert('l/s', 'l/s', 1)).toBe(1);
});

test('ml/s to cm3/s', () => {
  expect(volumeFlowRate.convert('ml/s', 'cm3/s', 1)).toBe(1);
});

test('m3/min to m3/h', () => {
  expect(volumeFlowRate.convert('m3/min', 'm3/h', 1)).toBe(60);
});

// imperial
test('fl-oz/s to fl-oz/min', () => {
  expect(volumeFlowRate.convert('fl-oz/s', 'fl-oz/min', 1)).toBe(60);
});

test('qt/s to pnt/h', () => {
  expect(volumeFlowRate.convert('qt/s', 'pnt/h', 1)).toBe(7200);
});

test('gal/h to gal/min', () => {
  expect(volumeFlowRate.convert('gal/h', 'gal/min', 1)).toBeCloseTo(
    0.016666667
  );
});

// both
test('l/s to fl-oz/s', () => {
  expect(volumeFlowRate.convert('l/s', 'fl-oz/s', 1)).toBeCloseTo(33.81);
});

test('cl/s to Tbs/s', () => {
  expect(volumeFlowRate.convert('cl/s', 'Tbs/s', 1)).toBeCloseTo(0.676280454);
});

test('m3/s to pnt/min', () => {
  expect(volumeFlowRate.convert('m3/s', 'pnt/min', 1)).toBeCloseTo(
    126802.58512500001
  );
});
