import { IMeasure } from '../types';

const RATIO = 1.609344;

type speedSystems = 'metric' | 'imperial';
type speedUnits = 'km/h' | 'm/s' | 'ft/s' | 'mi/h' | 'knot';

export const speed: IMeasure<speedSystems, speedUnits> = {
  metric: {
    baseUnit: 'km/h',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      'km/h': {
        name: {
          singular: 'kilometre per hour',
          plural: 'kilometres per hour',
        },
        anchor: 1,
      },
      'm/s': {
        name: {
          singular: 'metre per second',
          plural: 'metres per second',
        },
        anchor: 3.6,
      },
    },
  },
  imperial: {
    baseUnit: 'mi/h',
    transform: (val: number): number => val * RATIO,
    units: {
      'ft/s': {
        name: {
          singular: 'foot per second',
          plural: 'feet per second',
        },
        anchor: 0.681818,
      },
      'mi/h': {
        name: {
          singular: 'mile per hour',
          plural: 'miles per hour',
        },
        anchor: 1,
      },
      knot: {
        name: {
          singular: 'knot',
          plural: 'knots',
        },
        anchor: 1.150779,
      },
    },
  },
};
