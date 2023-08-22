import { IMeasure } from '../types';

const RATIO = 1;
const PI = 3.141592653589793;

export type angleSystems = 'metric';
export type angleUnits = 'rev' | 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec';

export const angle: IMeasure<angleSystems, angleUnits> = {
  metric: {
    baseUnit: 'deg',
    transform: (val: number): number => val * RATIO,
    units: {
      rev: {
        name: {
          singular: 'revolution',
          plural: 'revolutions',
        },
        anchor: 360,
      },
      deg: {
        name: {
          singular: 'degree',
          plural: 'degrees',
        },
        anchor: 1,
      },
      rad: {
        name: {
          singular: 'radian',
          plural: 'radians',
        },
        anchor: 180 / PI,
      },
      grad: {
        name: {
          singular: 'gradian',
          plural: 'gradians',
        },
        anchor: 9 / 10,
      },
      arcmin: {
        name: {
          singular: 'arcminute',
          plural: 'arcminutes',
        },
        anchor: 1 / 60,
      },
      arcsec: {
        name: {
          singular: 'arcsecond',
          plural: 'arcseconds',
        },
        anchor: 1 / 3600,
      },
    },
  },
};
