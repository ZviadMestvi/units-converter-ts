import { IMeasure } from '../types';

const RATIO = 0.00014503768078;

export type pressureSystems = 'metric' | 'imperial';
export type pressureUnits = 'Pa' | 'hPa' | 'kPa' | 'bar' | 'MPa' | 'torr' | 'psi' | 'ksi';

export const pressure: IMeasure<pressureSystems, pressureUnits> = {
  metric: {
    baseUnit: 'kPa',
    transform: (val: number): number => val * RATIO,
    units: {
      Pa: {
        name: {
          singular: 'pascal',
          plural: 'pascals',
        },
        anchor: 1 / 1000,
      },
      hPa: {
        name: {
          singular: 'hectopascal',
          plural: 'hectopascals',
        },
        anchor: 1 / 10,
      },
      kPa: {
        name: {
          singular: 'kilopascal',
          plural: 'kilopascals',
        },
        anchor: 1,
      },
      bar: {
        name: {
          singular: 'bar',
          plural: 'bars',
        },
        anchor: 100,
      },
      MPa: {
        name: {
          singular: 'megapascal',
          plural: 'megapascals',
        },
        anchor: 1000,
      },
      torr: {
        name: {
          singular: 'torr',
          plural: 'torr',
        },
        anchor: 101325 / 760000,
      },
    },
  },
  imperial: {
    baseUnit: 'psi',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      psi: {
        name: {
          singular: 'pound per square inch',
          plural: 'pounds per square inch',
        },
        anchor: 1 / 1000,
      },
      ksi: {
        name: {
          singular: 'kilopound per square inch',
          plural: 'kilopound per square inch',
        },
        anchor: 1,
      },
    },
  },
};
