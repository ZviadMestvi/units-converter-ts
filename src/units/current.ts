import { IMeasure } from '../types';

const RATIO = 1;

type currentSystems = 'metric';
type currentUnits = 'mA' | 'A' | 'kA';

export const current: IMeasure<currentSystems, currentUnits> = {
  metric: {
    baseUnit: 'A',
    transform: (val: number): number => RATIO * val,
    units: {
      mA: {
        name: {
          singular: 'milliampere',
          plural: 'milliamperes',
        },
        anchor: 0.001,
      },
      A: {
        name: {
          singular: 'ampere',
          plural: 'amperes',
        },
        anchor: 1,
      },
      kA: {
        name: {
          singular: 'kiloampere',
          plural: 'kiloamperes',
        },
        anchor: 1000,
      },
    },
  },
};
