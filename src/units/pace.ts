import { IMeasure } from '../types';

const RATIO = 0.3048;

type paceSystems = 'metric' | 'imperial';
type paceUnits = 'min/km' | 's/m' | 'min/mi' | 's/ft';

export const pace: IMeasure<paceSystems, paceUnits> = {
  metric: {
    baseUnit: 's/m',
    transform: (val: number): number => val * RATIO,
    units: {
      'min/km': {
        name: {
          singular: 'minute per kilometre',
          plural: 'minutes per kilometre',
        },
        anchor: 0.06,
      },
      's/m': {
        name: {
          singular: 'second per metre',
          plural: 'seconds per metre',
        },
        anchor: 1,
      },
    },
  },
  imperial: {
    baseUnit: 's/ft',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      'min/mi': {
        name: {
          singular: 'minute per mile',
          plural: 'minutes per mile',
        },
        anchor: 0.0113636364,
      },
      's/ft': {
        name: {
          singular: 'second per foot',
          plural: 'seconds per foot',
        },
        anchor: 1,
      },
    },
  },
};
