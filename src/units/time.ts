import { IMeasure } from '../types';

const RATIO = 1;
const daysInYear = 365.25;

type timeSystems = 'metric';
type timeUnits =
  | 'ns'
  | 'mu'
  | 'ms'
  | 's'
  | 'min'
  | 'h'
  | 'd'
  | 'week'
  | 'fortnight'
  | 'month'
  | 'year';

export const time: IMeasure<timeSystems, timeUnits> = {
  metric: {
    baseUnit: 's',
    transform: (val: number): number => val * RATIO,
    units: {
      ns: {
        name: {
          singular: 'nanosecond',
          plural: 'nanoseconds',
        },
        anchor: 1 / 1000000000,
      },
      mu: {
        name: {
          singular: 'microsecond',
          plural: 'microseconds',
        },
        anchor: 1 / 1000000,
      },
      ms: {
        name: {
          singular: 'millisecond',
          plural: 'milliseconds',
        },
        anchor: 1 / 1000,
      },
      s: {
        name: {
          singular: 'second',
          plural: 'seconds',
        },
        anchor: 1,
      },
      min: {
        name: {
          singular: 'minute',
          plural: 'minutes',
        },
        anchor: 60,
      },
      h: {
        name: {
          singular: 'hour',
          plural: 'hours',
        },
        anchor: 60 * 60,
      },
      d: {
        name: {
          singular: 'day',
          plural: 'days',
        },
        anchor: 60 * 60 * 24,
      },
      week: {
        name: {
          singular: 'week',
          plural: 'weeks',
        },
        anchor: 60 * 60 * 24 * 7,
      },
      fortnight: {
        name: {
          singular: 'fortnight',
          plural: 'fortnight',
        },
        anchor: 60 * 60 * 24 * 14,
      },
      month: {
        name: {
          singular: 'month',
          plural: 'months',
        },
        anchor: (60 * 60 * 24 * daysInYear) / 12,
      },
      year: {
        name: {
          singular: 'year',
          plural: 'years',
        },
        anchor: 60 * 60 * 24 * daysInYear,
      },
    },
  },
};
