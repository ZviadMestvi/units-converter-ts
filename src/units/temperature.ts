import { IMeasure } from '../types';

type temperatureSystems = 'metric' | 'imperial';
type temperatureUnits = 'C' | 'K' | 'F' | 'R';

export const temperature: IMeasure<temperatureSystems, temperatureUnits> = {
  metric: {
    baseUnit: 'C',
    transform: (val: number): number => val / (5 / 9) + 32,
    units: {
      C: {
        name: {
          singular: 'degree celsius',
          plural: 'degrees celsius',
        },
        anchor: 1,
        anchor_shift: 0,
      },
      K: {
        name: {
          singular: 'degree kelvin',
          plural: 'degrees kelvin',
        },
        anchor: 1,
        anchor_shift: 273.15,
      },
    },
  },
  imperial: {
    baseUnit: 'F',
    transform: (val: number): number => (val - 32) * (5 / 9),
    units: {
      F: {
        name: {
          singular: 'degree fahrenheit',
          plural: 'degrees fahrenheit',
        },
        anchor: 1,
      },
      R: {
        name: {
          singular: 'degree rankine',
          plural: 'degrees rankine',
        },
        anchor: 1,
        anchor_shift: 459.67,
      },
    },
  },
};
