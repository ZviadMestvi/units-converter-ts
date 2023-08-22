import { IMeasure } from '../types';

const RATIO = 4.44822;

export type forceSystems = 'metric' | 'imperial';
export type forceUnits = 'N' | 'kN' | 'lbf';

export const force: IMeasure<forceSystems, forceUnits> = {
  metric: {
    baseUnit: 'N',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      N: {
        name: {
          singular: 'newton',
          plural: 'newtons',
        },
        anchor: 1,
      },
      kN: {
        name: {
          singular: 'kilonewton',
          plural: 'kilonewtons',
        },
        anchor: 1000,
      },
    },
  },
  imperial: {
    baseUnit: 'lbf',
    transform: (val: number): number => RATIO * val,
    units: {
      lbf: {
        name: {
          singular: 'pound-force',
          plural: 'pound-forces',
        },
        anchor: 1,
      },
    },
  },
};
