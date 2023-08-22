import { IMeasure } from '../types';

export type areaSystems = 'metric' | 'imperial';
export type areaUnits = 'mm2' | 'cm2' | 'm2' | 'are' | 'ha' | 'km2' | 'circ-mil' | 'circ-inch' | 'in2' | 'ft2' | 'yd2' | 'ro' | 'ac' | 'mi2' | 'twp';

const RATIO = 10.7639;

export const area: IMeasure<areaSystems, areaUnits> = {
  metric: {
    baseUnit: 'm2',
    transform: (val: number): number => val * RATIO,
    units: {
      mm2: {
        name: {
          singular: 'square millimeter',
          plural: 'square millimeters',
        },
        anchor: 1 / 1000000,
      },
      cm2: {
        name: {
          singular: 'square centimeter',
          plural: 'square centimeters',
        },
        anchor: 1 / 10000,
      },
      m2: {
        name: {
          singular: 'square meter',
          plural: 'square meters',
        },
        anchor: 1,
      },
      are: {
        name: {
          singular: 'are',
          plural: 'ares',
        },
        anchor: 100,
      },
      ha: {
        name: {
          singular: 'hectare',
          plural: 'hectares',
        },
        anchor: 10000,
      },
      km2: {
        name: {
          singular: 'square kilometer',
          plural: 'square kilometers',
        },
        anchor: 1000000,
      },
    },
  },
  imperial: {
    baseUnit: 'ft2',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      'circ-mil': {
        name: {
          singular: 'circular mil',
          plural: 'circular mils',
        },
        anchor: 0.000000005454153912,
      },
      'circ-inch': {
        name: {
          singular: 'circular inch',
          plural: 'circular inches',
        },
        anchor: 0.0054541539,
      },
      in2: {
        name: {
          singular: 'square inch',
          plural: 'square inches',
        },
        anchor: 1 / 144,
      },
      ft2: {
        name: {
          singular: 'square foot',
          plural: 'square feet',
        },
        anchor: 1,
      },
      yd2: {
        name: {
          singular: 'square yard',
          plural: 'square yards',
        },
        anchor: 9,
      },
      ro: {
        name: {
          singular: 'rood',
          plural: 'roods',
        },
        anchor: 10890,
      },
      ac: {
        name: {
          singular: 'acre',
          plural: 'acres',
        },
        anchor: 43560,
      },
      mi2: {
        name: {
          singular: 'square mile',
          plural: 'square miles',
        },
        anchor: 27878400,
      },
      twp: {
        name: {
          singular: 'township',
          plural: 'townships',
        },
        anchor: 1003622400,
      },
    },
  },
};
