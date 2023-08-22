import { IMeasure } from '../types';

const RATIO = 2.20462262;

export type massSystems = 'metric' | 'imperial';
export type massUnits =
  | 'mg'
  | 'g'
  | 'kg'
  | 't'
  | 'kt'
  | 'mt'
  | 'gr'
  | 'dr'
  | 'oz'
  | 'lb'
  | 'stone'
  | 'qr'
  | 'slug'
  | 'tn'
  | 'ton-uk';

export const mass: IMeasure<massSystems, massUnits> = {
  metric: {
    baseUnit: 'kg',
    transform: (val: number): number => val * RATIO,
    units: {
      mg: {
        name: {
          singular: 'milligram',
          plural: 'milligrams',
        },
        anchor: 1 / 1_000_000,
      },
      g: {
        name: {
          singular: 'gram',
          plural: 'grams',
        },
        anchor: 1 / 1000,
      },
      kg: {
        name: {
          singular: 'kilogram',
          plural: 'kilograms',
        },
        anchor: 1,
      },
      t: {
        name: {
          singular: 'ton',
          plural: 'tons',
        },
        anchor: 1000,
      },
      kt: {
        name: {
          singular: 'kiloton',
          plural: 'kilotons',
        },
        anchor: 1_000_000,
      },
      mt: {
        name: {
          singular: 'megaton',
          plural: 'megatons',
        },
        anchor: 1_000_000_000,
      },
    },
  },
  imperial: {
    baseUnit: 'lb',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      gr: {
        name: {
          singular: 'grain',
          plural: 'grains',
        },
        anchor: 1 / 7000,
      },
      dr: {
        name: {
          singular: 'dram',
          plural: 'drams',
        },
        anchor: 1 / 256,
      },
      oz: {
        name: {
          singular: 'ounce',
          plural: 'ounces',
        },
        anchor: 1 / 16,
      },
      lb: {
        name: {
          singular: 'pound',
          plural: 'pounds',
        },
        anchor: 1,
      },
      stone: {
        name: {
          singular: 'stone',
          plural: 'stones',
        },
        anchor: 14,
      },
      qr: {
        name: {
          singular: 'quarter',
          plural: 'quarters',
        },
        anchor: 25,
      },
      slug: {
        name: {
          singular: 'slug',
          plural: 'slugs',
        },
        anchor: 32.1740486,
      },
      tn: {
        name: {
          singular: 'short ton',
          plural: 'short tons',
        },
        anchor: 2000,
      },
      'ton-uk': {
        name: {
          singular: 'imperial ton',
          plural: 'imperial tons',
        },
        anchor: 2240,
      },
    },
  },
};
