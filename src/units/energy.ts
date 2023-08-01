import { IMeasure } from '../types';

const RATIO = 1;

type energySystems = 'metric';
type energyUnits = 'J' | 'kJ' | 'mWh' | 'Wh' | 'kWh' | 'MWh' | 'GWh';

export const energy: IMeasure<energySystems, energyUnits> = {
  metric: {
    baseUnit: 'J',
    transform: (val: number): number => RATIO * val,
    units: {
      J: {
        name: {
          singular: 'joule',
          plural: 'joules',
        },
        anchor: 1,
      },
      kJ: {
        name: {
          singular: 'kilojoule',
          plural: 'kilojoules',
        },
        anchor: 1000,
      },
      mWh: {
        name: {
          singular: 'milliwatt-hour',
          plural: 'milliwatt-hours',
        },
        anchor: 3.6,
      },
      Wh: {
        name: {
          singular: 'watt-hour',
          plural: 'watt-hours',
        },
        anchor: 3600,
      },
      kWh: {
        name: {
          singular: 'kilowatt-hour',
          plural: 'kilowatt-hours',
        },
        anchor: 3600000,
      },
      MWh: {
        name: {
          singular: 'megawatt-hour',
          plural: 'megawatt-hours',
        },
        anchor: 3600000000,
      },
      GWh: {
        name: {
          singular: 'gigawatt-hour',
          plural: 'gigawatt-hours',
        },
        anchor: 3600000000000,
      },
    },
  },
};
