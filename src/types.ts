// Type of single unit object
export interface IUnit {
  name: {
    singular: string;
    plural: string;
  };
  anchor: number;
  anchor_shift?: number;
}

// Type of measure object
export type IMeasure<TSystem extends string, TUnitName extends string> = {
  [system in TSystem]: {
    baseUnit: string;
    transform: (val: number) => number;
    units: Partial<Record<TUnitName, IUnit>>;
  };
};

// Type of unit description object
export interface IUnitDescription {
  abbreviation: string;
  measure: string;
  system: string;
  singular: string;
  plural: string;
}

export const allMeasures: string[] = [
  'acceleration',
  'area',
  'angle',
  'apparent power',
  'charge',
  'current',
  'digital',
  'energy',
  'force',
  'frequency',
  'illuminance',
  'length',
  'mass',
  'pace',
  'power',
  'pressure',
  'reactive energy',
  'reactive power',
  'speed',
  'temperature',
  'time',
  'voltage',
  'volume',
  'volume flow rate',
];

export const allUnits: string[] = [
  // acceleration
  'g-force',
  'm/s2',
  // angle
  'rad',
  'deg',
  'grad',
  'arcmin',
  'arcsec',
  // apparent power
  'mVA',
  'VA',
  'kVA',
  'MVA',
  'GVA',
  // area
  'mm2',
  'cm2',
  'm2',
  'ha',
  'km2',
  'in2',
  'ft2',
  'yd2',
  'ac',
  'mi2',
  // charge
  'c',
  'mC',
  'μC',
  'nC',
  'pC',
  // current
  'mA',
  'A',
  'kA',
  // digital
  'b',
  'Kb',
  'Mb',
  'Gb',
  'Tb',
  'B',
  'KB',
  'MB',
  'GB',
  'TB',
  // energy
  'J',
  'kJ',
  'mWh',
  'Wh',
  'kWh',
  'MWh',
  'GWh',
  // force
  'N',
  'kN',
  'lbf',
  // frequency
  'mHz',
  'Hz',
  'kHz',
  'MHz',
  'GHz',
  'THz',
  'rpm',
  'deg/s',
  'rad/s',
  // illuminance
  'lx',
  'ft-cd',
  // length
  'mm',
  'cm',
  'm',
  'km',
  'in',
  'hand',
  'ft',
  'ft-us',
  'yd',
  'fath',
  'fur',
  'mi',
  'nMi',
  // mass
  'mg',
  'g',
  'kg',
  't',
  'kt',
  'mt',
  'gr',
  'dr',
  'oz',
  'lb',
  'stone',
  'qr',
  'slug',
  'tn',
  'ton-uk',
  // pace
  'min/km',
  's/m',
  'min/mi',
  's/ft',
  // power
  'mW',
  'W',
  'kW',
  'MW',
  'GW',
  // pressure
  'Pa',
  'hPa',
  'kPa',
  'bar',
  'MPa',
  'torr',
  'psi',
  'ksi',
  // reactive energy
  'mVARh',
  'VARh',
  'kVARh',
  'MVARh',
  'GVARh',
  // reactive power
  'mVAR',
  'VAR',
  'kVAR',
  'MVAR',
  'GVAR',
  // speed
  'km/h',
  'm/s',
  'ft/s',
  'mi/h',
  'knot',
  // temperature
  'C',
  'K',
  'F',
  'R',
  // time
  'ns',
  'mu',
  'ms',
  's',
  'min',
  'h',
  'd',
  'week',
  'fortnight',
  'month',
  'year',
  // voltage
  'mV',
  'V',
  'kV',
  // volume
  'mm3',
  'cm3',
  'ml',
  'cl',
  'dl',
  'l',
  'kl',
  'm3',
  'km3',
  'krm',
  'tsk',
  'msk',
  'kkp',
  'glas',
  'kanna',
  'tsp',
  'Tbs',
  'in3',
  'fl-oz',
  'cup',
  'pnt',
  'qt',
  'gal',
  'ft3',
  'yd3',
  // volume flow rate
  'mm3/s',
  'cm3/s',
  'ml/s',
  'cl/s',
  'dl/s',
  'l/s',
  'l/min',
  'l/h',
  'kl/s',
  'kl/min',
  'kl/h',
  'm3/s',
  'm3/min',
  'm3/h',
  'km3/s',
  'tsp/s',
  'Tbs/s',
  'in3/s',
  'in3/min',
  'in3/h',
  'fl-oz/s',
  'fl-oz/min',
  'fl-oz/h',
  'cup/s',
  'pnt/s',
  'pnt/min',
  'pnt/h',
  'qt/s',
  'gal/s',
  'gal/min',
  'gal/h',
  'ft3/s',
  'ft3/min',
  'ft3/h',
  'yd3/s',
  'yd3/min',
  'yd3/h',
];
