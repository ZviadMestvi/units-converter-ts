import { IMeasure } from '../types';

const RATIO = 10.76391;

export type illuminanceSystems = 'metric' | 'imperial';
export type illuminanceUnits = 'lx' | 'ft-cd';

export const illuminance: IMeasure<illuminanceSystems, illuminanceUnits> = {
  metric: {
    baseUnit: 'lx',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      lx: {
        name: {
          singular: 'lux',
          plural: 'lux',
        },
        anchor: 1,
      },
    },
  },
  imperial: {
    baseUnit: 'ft-cd',
    transform: (val: number): number => RATIO * val,
    units: {
      'ft-cd': {
        name: {
          singular: 'foot-candle',
          plural: 'foot-candles',
        },
        anchor: 1,
      },
    },
  },
};
