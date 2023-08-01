import { IMeasure } from '../types';

const RATIO = 1;

type reactiveEnergySystems = 'metric';
type reactiveEnergyUnits = 'mVARh' | 'VARh' | 'kVARh' | 'MVARh' | 'GVARh';

export const reactiveEnergy: IMeasure<
  reactiveEnergySystems,
  reactiveEnergyUnits
> = {
  metric: {
    baseUnit: 'VARh',
    transform: (val: number): number => val * RATIO,
    units: {
      mVARh: {
        name: {
          singular: 'millivolt-ampere reactive hour',
          plural: 'millivolt-amperes reactive hour',
        },
        anchor: 0.001,
      },
      VARh: {
        name: {
          singular: 'volt-ampere reactive hour',
          plural: 'volt-amperes reactive hour',
        },
        anchor: 1,
      },
      kVARh: {
        name: {
          singular: 'kilovolt-ampere reactive hour',
          plural: 'kilovolt-amperes reactive hour',
        },
        anchor: 1000,
      },
      MVARh: {
        name: {
          singular: 'megavolt-ampere reactive hour',
          plural: 'megavolt-amperes reactive hour',
        },
        anchor: 1000000,
      },
      GVARh: {
        name: {
          singular: 'gigavolt-ampere reactive hour',
          plural: 'gigavolt-amperes reactive hour',
        },
        anchor: 1000000000,
      },
    },
  },
};
