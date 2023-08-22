import { IMeasure } from '../types';

export type accelerationSystems = 'metric';
export type accelerationUnits = 'gal' | 'm/s2' | 'g-force';

export const acceleration: IMeasure<accelerationSystems, accelerationUnits> = {
  metric: {
    baseUnit: 'm/s2',
    transform: (val: number): number => val * 1,
    units: {
      gal: {
        name: {
          singular: 'gal',
          plural: 'gals',
        },
        anchor: 0.01,
      },
      'm/s2': {
        name: {
          singular: 'metre per second squared',
          plural: 'metres per second squared',
        },
        anchor: 1,
      },
      'g-force': {
        name: {
          singular: 'g-force',
          plural: 'g-forces',
        },
        anchor: 9.80665,
      },
    },
  },
};
