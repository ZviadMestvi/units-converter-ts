import { time } from '../..';

test('s to min', () => {
  expect(time.convert('s', 'min', 60)).toBe(1);
});

test('min to s', () => {
  expect(time.convert('min', 's', 1)).toBe(60);
});

test('s to mu', () => {
  expect(time.convert('s', 'mu', 1)).toBe(1000000);
});

test('year to h', () => {
  expect(time.convert('year', 'h', 1)).toBe(8766);
});
