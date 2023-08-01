import { IMeasure } from '../types';

type apparentPowerSystems = 'metric';
type apparentPowerUnits = 'mVA' | 'VA' | 'kVA' | 'MVA' | 'GVA';

export const apparentPower: IMeasure<apparentPowerSystems, apparentPowerUnits> =
  {
    metric: {
      baseUnit: 'VA',
      transform: (val: number): number => val * 1,
      units: {
        mVA: {
          name: {
            singular: 'millivolt-ampere',
            plural: 'millivolt-amperes',
          },
          anchor: 0.001,
        },
        VA: {
          name: {
            singular: 'volt-ampere',
            plural: 'volt-amperes',
          },
          anchor: 1,
        },
        kVA: {
          name: {
            singular: 'kilovolt-ampere',
            plural: 'kilovolt-amperes',
          },
          anchor: 1000,
        },
        MVA: {
          name: {
            singular: 'megavolt-ampere',
            plural: 'megavolt-amperes',
          },
          anchor: 1000000,
        },
        GVA: {
          name: {
            singular: 'gigavolt-ampere',
            plural: 'gigavolt-amperes',
          },
          anchor: 1000000000,
        },
      },
    },
  };
