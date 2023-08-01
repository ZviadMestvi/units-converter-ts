import { IMeasure } from '../types';

const RATIO = 1;

type chargeSystems = 'metric';
type chargeUnits = 'c' | 'mC' | 'μC' | 'nC' | 'pC';

export const charge: IMeasure<chargeSystems, chargeUnits> = {
  metric: {
    baseUnit: 'c',
    transform: (val: number): number => RATIO * val,
    units: {
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
      μC: {
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
      pC: {
        name: {
          singular: 'picocoulomb',
          plural: 'picocoulombs',
        },
        anchor: 1e-12,
      },
    },
  },
};
