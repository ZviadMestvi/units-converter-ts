import { IMeasure } from '../types';

const RATIO = 1;

export type voltageSystems = 'metric';
export type voltageUnits = 'mV' | 'V' | 'kV';

export const voltage: IMeasure<voltageSystems, voltageUnits> = {
  metric: {
    baseUnit: 'V',
    transform: (val: number): number => val * RATIO,
    units: {
      mV: {
        name: {
          singular: 'millivolt',
          plural: 'millivolts',
        },
        anchor: 0.001,
      },
      V: {
        name: {
          singular: 'volt',
          plural: 'volts',
        },
        anchor: 1,
      },
      kV: {
        name: {
          singular: 'kilovolt',
          plural: 'kilovolts',
        },
        anchor: 1000,
      },
    },
  },
};
