import { IMeasure } from '../types';

const RATIO = 1;
const PI = 3.141592653589793;

type frequencySystems = 'metric';
type frequencyUnits =
  | 'mHz'
  | 'Hz'
  | 'kHz'
  | 'MHz'
  | 'GHz'
  | 'THz'
  | 'rpm'
  | 'deg/s'
  | 'rad/s';

export const frequency: IMeasure<frequencySystems, frequencyUnits> = {
  metric: {
    baseUnit: 'Hz',
    transform: (val: number): number => RATIO * val,
    units: {
      mHz: {
        name: {
          singular: 'millihertz',
          plural: 'millihertz',
        },
        anchor: 1 / 1000,
      },
      Hz: {
        name: {
          singular: 'hertz',
          plural: 'hertz',
        },
        anchor: 1,
      },
      kHz: {
        name: {
          singular: 'kilohertz',
          plural: 'kilohertz',
        },
        anchor: 1000,
      },
      MHz: {
        name: {
          singular: 'megahertz',
          plural: 'megahertz',
        },
        anchor: 1000 * 1000,
      },
      GHz: {
        name: {
          singular: 'gigahertz',
          plural: 'gigahertz',
        },
        anchor: 1000 * 1000 * 1000,
      },
      THz: {
        name: {
          singular: 'terahertz',
          plural: 'terahertz',
        },
        anchor: 1000 * 1000 * 1000 * 1000,
      },
      rpm: {
        name: {
          singular: 'rotation per minute',
          plural: 'rotations per minute',
        },
        anchor: 1 / 60,
      },
      'deg/s': {
        name: {
          singular: 'degree per second',
          plural: 'degrees per second',
        },
        anchor: 1 / 360,
      },
      'rad/s': {
        name: {
          singular: 'radian per second',
          plural: 'radians per second',
        },
        anchor: 1 / (PI * 2),
      },
    },
  },
};
