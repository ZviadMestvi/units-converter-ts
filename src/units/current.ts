import { IMeasure } from '../types';

const RATIO = 1;

export type currentSystems = 'metric';
export type currentUnits = 'stA' | 'mA' | 'A' | 'abA' | 'kA';

export const current: IMeasure<currentSystems, currentUnits> = {
  metric: {
    baseUnit: 'A',
    transform: (val: number): number => RATIO * val,
    units: {
      stA: {
        name: {
          singular: 'statampere',
          plural: 'statamperes',
        },
        anchor: 3.335641e-10,
      },
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
      abA: {
        name: {
          singular: 'abampere',
          plural: 'abamperes',
        },
        anchor: 10,
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
