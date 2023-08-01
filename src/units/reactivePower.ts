import { IMeasure } from '../types';

const RATIO = 1;

type reactivePowerSystems = 'metric';
type reactivePowerUnits = 'mVAR' | 'VAR' | 'kVAR' | 'MVAR' | 'GVAR';

export const reactivePower: IMeasure<reactivePowerSystems, reactivePowerUnits> =
  {
    metric: {
      baseUnit: 'VAR',
      transform: (val: number): number => val * RATIO,
      units: {
        mVAR: {
          name: {
            singular: 'millivolt-ampere reactive',
            plural: 'millivolt-amperes reactive',
          },
          anchor: 0.001,
        },
        VAR: {
          name: {
            singular: 'volt-ampere reactive',
            plural: 'volt-amperes reactive',
          },
          anchor: 1,
        },
        kVAR: {
          name: {
            singular: 'kilovolt-ampere reactive',
            plural: 'kilovolt-amperes reactive',
          },
          anchor: 1000,
        },
        MVAR: {
          name: {
            singular: 'megavolt-ampere reactive',
            plural: 'megavolt-amperes reactive',
          },
          anchor: 1000000,
        },
        GVAR: {
          name: {
            singular: 'gigavolt-ampere reactive',
            plural: 'gigavolt-amperes reactive',
          },
          anchor: 1000000000,
        },
      },
    },
  };
