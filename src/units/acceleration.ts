import { IMeasure } from '../types';

type accelerationSystems = 'metric';
type accelerationUnits = 'g-force' | 'm/s2';

export const acceleration: IMeasure<accelerationSystems, accelerationUnits> = {
  metric: {
    baseUnit: 'g-force',
    transform: (val: number): number => val * 1,
    units: {
      'g-force': {
        name: {
          singular: 'g-force',
          plural: 'g-forces',
        },
        anchor: 9.80665,
      },
      'm/s2': {
        name: {
          singular: 'metre per second squared',
          plural: 'metres per second squared',
        },
        anchor: 1,
      },
    },
  },
};
