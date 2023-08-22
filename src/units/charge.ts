import { IMeasure } from '../types';

const RATIO = 1;

export type chargeSystems = 'metric';
export type chargeUnits = 'abC' | 'c' | 'mC' | 'uC' | 'nC' | 'stC' | 'pC' | 'e';

export const charge: IMeasure<chargeSystems, chargeUnits> = {
  metric: {
    baseUnit: 'c',
    transform: (val: number): number => RATIO * val,
    units: {
      abC: {
        name: {
          singular: 'abcoulomb',
          plural: 'abcoulombs',
        },
        anchor: 10,
      },
      c: {
        name: {
          singular: 'coulomb',
          plural: 'coulombs',
        },
        anchor: 1,
      },
      mC: {
        name: {
          singular: 'millicoulomb',
          plural: 'millicoulombs',
        },
        anchor: 1 / 1000,
      },
      uC: {
        name: {
          singular: 'microcoulomb',
          plural: 'microcoulombs',
        },
        anchor: 1 / 1000000,
      },
      nC: {
        name: {
          singular: 'nanocoulomb',
          plural: 'nanocoulombs',
        },
        anchor: 1e-9,
      },
      stC: {
        name: {
          singular: 'statcoulomb',
          plural: 'statcoulombs',
        },
        anchor: 3.335640951982e-10,
      },
      pC: {
        name: {
          singular: 'picocoulomb',
          plural: 'picocoulombs',
        },
        anchor: 1e-12,
      },
      e: {
        name: {
          singular: 'elementary charge',
          plural: 'elementary charges',
        },
        anchor: 1.60217733e-19,
      },
    },
  },
};
