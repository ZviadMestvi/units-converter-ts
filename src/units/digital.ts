import { IMeasure } from '../types';

const RATIO = 8;

export type digitalSystems = 'bits' | 'bytes';
export type digitalUnits = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export const digital: IMeasure<digitalSystems, digitalUnits> = {
  bits: {
    baseUnit: 'b',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      b: {
        name: {
          singular: 'bit',
          plural: 'bits',
        },
        anchor: 1,
      },
      Kb: {
        name: {
          singular: 'kilobit',
          plural: 'kilobits',
        },
        anchor: 1024,
      },
      Mb: {
        name: {
          singular: 'megabit',
          plural: 'megabits',
        },
        anchor: 1048576,
      },
      Gb: {
        name: {
          singular: 'gigabit',
          plural: 'gigabits',
        },
        anchor: 1073741824,
      },
      Tb: {
        name: {
          singular: 'terabit',
          plural: 'terabits',
        },
        anchor: 1099511627776,
      },
    },
  },
  bytes: {
    baseUnit: 'B',
    transform: (val: number): number => val * RATIO,
    units: {
      B: {
        name: {
          singular: 'byte',
          plural: 'bytes',
        },
        anchor: 1,
      },
      KB: {
        name: {
          singular: 'kilobyte',
          plural: 'kilobytes',
        },
        anchor: 1024,
      },
      MB: {
        name: {
          singular: 'megabyte',
          plural: 'megabytes',
        },
        anchor: 1048576,
      },
      GB: {
        name: {
          singular: 'gigabyte',
          plural: 'gigabytes',
        },
        anchor: 1073741824,
      },
      TB: {
        name: {
          singular: 'terabyte',
          plural: 'terabytes',
        },
        anchor: 1099511627776,
      },
    },
  },
};
