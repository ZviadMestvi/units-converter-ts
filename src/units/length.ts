import { IMeasure } from '../types';

const RATIO = 3.28084;

type lengthSystems = 'metric' | 'imperial';
type lengthUnits =
  | 'mm'
  | 'cm'
  | 'm'
  | 'km'
  | 'in'
  | 'hand'
  | 'ft'
  | 'ft-us'
  | 'yd'
  | 'fur'
  | 'fath'
  | 'mi'
  | 'nMi';

export const length: IMeasure<lengthSystems, lengthUnits> = {
  metric: {
    baseUnit: 'm',
    transform: (val: number): number => val * RATIO,
    units: {
      mm: {
        name: {
          singular: 'millimeter',
          plural: 'millimeters',
        },
        anchor: 1 / 1000,
      },
      cm: {
        name: {
          singular: 'centimeter',
          plural: 'centimeters',
        },
        anchor: 1 / 100,
      },
      m: {
        name: {
          singular: 'meter',
          plural: 'meters',
        },
        anchor: 1,
      },
      km: {
        name: {
          singular: 'kilometer',
          plural: 'kilometers',
        },
        anchor: 1000,
      },
    },
  },
  imperial: {
    baseUnit: 'ft',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      in: {
        name: {
          singular: 'inch',
          plural: 'inches',
        },
        anchor: 1 / 12,
      },
      hand: {
        name: {
          singular: 'hand',
          plural: 'hands',
        },
        anchor: 1 / 3,
      },
      ft: {
        name: {
          singular: 'foot',
          plural: 'feet',
        },
        anchor: 1,
      },
      'ft-us': {
        name: {
          singular: 'US survey foot',
          plural: 'US survey feet',
        },
        anchor: 1.000002,
      },
      yd: {
        name: {
          singular: 'yard',
          plural: 'yards',
        },
        anchor: 3,
      },
      fath: {
        name: {
          singular: 'fathom',
          plural: 'fathoms',
        },
        anchor: 6,
      },
      fur: {
        name: {
          singular: 'furlong',
          plural: 'furlongs',
        },
        anchor: 660,
      },
      mi: {
        name: {
          singular: 'mile',
          plural: 'miles',
        },
        anchor: 5280,
      },
      nMi: {
        name: {
          singular: 'international nautical mile',
          plural: 'international nautical miles',
        },
        anchor: 6076.12,
      },
    },
  },
};
