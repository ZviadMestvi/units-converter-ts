import { IMeasure } from '../types';

const RATIO = 33.8140226;

export type volumeSystems = 'metric' | 'imperial';
export type volumeUnits =
  | 'mm3'
  | 'cm3'
  | 'ml'
  | 'cl'
  | 'dl'
  | 'l'
  | 'kl'
  | 'm3'
  | 'km3'
  | 'krm'
  | 'tsk'
  | 'msk'
  | 'kkp'
  | 'glas'
  | 'kanna'
  | 'tsp'
  | 'Tbs'
  | 'in3'
  | 'fl-oz'
  | 'cup'
  | 'pnt'
  | 'qt'
  | 'gal'
  | 'ft3'
  | 'yd3';

export const volume: IMeasure<volumeSystems, volumeUnits> = {
  metric: {
    baseUnit: 'l',
    transform: (val: number): number => RATIO * val,
    units: {
      mm3: {
        name: {
          singular: 'cubic millimeter',
          plural: 'cubic millimeters',
        },
        anchor: 1 / 1000000,
      },
      cm3: {
        name: {
          singular: 'cubic centimeter',
          plural: 'cubic centimeters',
        },
        anchor: 1 / 1000,
      },
      ml: {
        name: {
          singular: 'millilitre',
          plural: 'millilitres',
        },
        anchor: 1 / 1000,
      },
      cl: {
        name: {
          singular: 'centilitre',
          plural: 'centilitres',
        },
        anchor: 1 / 100,
      },
      dl: {
        name: {
          singular: 'decilitre',
          plural: 'decilitres',
        },
        anchor: 1 / 10,
      },
      l: {
        name: {
          singular: 'litre',
          plural: 'litres',
        },
        anchor: 1,
      },
      kl: {
        name: {
          singular: 'kilolitre',
          plural: 'kilolitres',
        },
        anchor: 1000,
      },
      m3: {
        name: {
          singular: 'cubic meter',
          plural: 'cubic meters',
        },
        anchor: 1000,
      },
      km3: {
        name: {
          singular: 'cubic kilometer',
          plural: 'cubic kilometers',
        },
        anchor: 1000000000000,
      },

      // Swedish units
      krm: {
        name: {
          singular: 'kryddmått',
          plural: 'kryddmåtten',
        },
        anchor: 1 / 1000,
      },
      tsk: {
        name: {
          singular: 'tesked',
          plural: 'teskedar',
        },
        anchor: 5 / 1000,
      },
      msk: {
        name: {
          singular: 'matsked',
          plural: 'matskedar',
        },
        anchor: 15 / 1000,
      },
      kkp: {
        name: {
          singular: 'kaffekopp',
          plural: 'kaffekoppar',
        },
        anchor: 150 / 1000,
      },
      glas: {
        name: {
          singular: 'glas',
          plural: 'glas',
        },
        anchor: 200 / 1000,
      },
      kanna: {
        name: {
          singular: 'kanna',
          plural: 'kannor',
        },
        anchor: 2.617,
      },
    },
  },

  imperial: {
    baseUnit: 'fl-oz',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      tsp: {
        name: {
          singular: 'teaspoon',
          plural: 'teaspoons',
        },
        anchor: 1 / 6,
      },
      Tbs: {
        name: {
          singular: 'tablespoon',
          plural: 'tablespoons',
        },
        anchor: 1 / 2,
      },
      in3: {
        name: {
          singular: 'cubic inch',
          plural: 'cubic inches',
        },
        anchor: 0.55411,
      },
      'fl-oz': {
        name: {
          singular: 'fluid ounce',
          plural: 'fluid ounces',
        },
        anchor: 1,
      },
      cup: {
        name: {
          singular: 'cup',
          plural: 'cups',
        },
        anchor: 8,
      },
      pnt: {
        name: {
          singular: 'pint',
          plural: 'pints',
        },
        anchor: 16,
      },
      qt: {
        name: {
          singular: 'quart',
          plural: 'quarts',
        },
        anchor: 32,
      },
      gal: {
        name: {
          singular: 'gallon',
          plural: 'gallons',
        },
        anchor: 128,
      },
      ft3: {
        name: {
          singular: 'cubic foot',
          plural: 'cubic feet',
        },
        anchor: 957.506,
      },
      yd3: {
        name: {
          singular: 'cubic yard',
          plural: 'cubic yards',
        },
        anchor: 25852.7,
      },
    },
  },
};
