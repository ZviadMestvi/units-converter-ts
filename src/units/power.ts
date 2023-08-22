import { IMeasure } from '../types';

const RATIO = 1;

export type powerSystems = 'metric';
export type powerUnits = 'mW' | 'W' | 'kW' | 'MW' | 'GW';

export const power: IMeasure<powerSystems, powerUnits> = {
  metric: {
    baseUnit: 'W',
    transform: (val: number): number => val * RATIO,
    units: {
      mW: {
        name: {
          singular: 'milliwatt',
          plural: 'milliwatts',
        },
        anchor: 0.001,
      },
      W: {
        name: {
          singular: 'watt',
          plural: 'watts',
        },
        anchor: 1,
      },
      kW: {
        name: {
          singular: 'kilowatt',
          plural: 'kilowatts',
        },
        anchor: 1000,
      },
      MW: {
        name: {
          singular: 'megawatt',
          plural: 'megawatts',
        },
        anchor: 1000000,
      },
      GW: {
        name: {
          singular: 'gigawatt',
          plural: 'gigawatts',
        },
        anchor: 1000000000,
      },
    },
  },
};
