import { acceleration } from './acceleration';
import { area } from './area';
import { angle } from './angle';
import { apparentPower } from './apparentPower';
import { charge } from './charge';
import { current } from './current';
import { digital } from './digital';
import { energy } from './energy';
import { force } from './force';
import { frequency } from './frequency';
import { illuminance } from './illuminance';
import { length } from './length';
import { mass } from './mass';
import { pace } from './pace';
import { power } from './power';
import { pressure } from './pressure';
import { reactiveEnergy } from './reactiveEnergy';
import { reactivePower } from './reactivePower';
import { speed } from './speed';
import { temperature } from './temperature';
import { time } from './time';
import { voltage } from './voltage';
import { volume } from './volume';
import { volumeFlowRate } from './volumeFlowRate';
import { AllMeasures, AllMeasuresUnits, IMeasure } from '../types';

export const allMeasureObjs: Record<AllMeasures, IMeasure<string, AllMeasuresUnits>> = {
  acceleration,
  area,
  angle,
  apparentPower,
  charge,
  current,
  digital,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  pace,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate,
};

export const allMeasureNames: string[] = [
  'acceleration',
  'area',
  'angle',
  'apparentPower',
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
  'reactiveEnergy',
  'reactivePower',
  'speed',
  'temperature',
  'time',
  'voltage',
  'volume',
  'volumeFlowRate',
];

export const allUnits: { [measure: string]: string[] } = {
  acceleration: ['gal', 'm/s2', 'g-force'],
  angle: ['rev', 'deg', 'rad', 'grad', 'arcmin', 'arcsec'],
  apparentPower: ['mVA', 'VA', 'kVA', 'MVA', 'GVA'],
  area: ['mm2', 'cm2', 'm2', 'are', 'ha', 'km2', 'circ-mil', 'circ-inch', 'in2', 'ft2', 'yd2', 'ro', 'ac', 'mi2', 'twp'],
  charge: ['abC', 'c', 'mC', 'uC', 'nC', 'stC', 'pC', 'e'],
  current: ['stA', 'mA', 'A', 'abA', 'kA'],
  digital: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'],
  energy: ['J', 'kJ', 'mWh', 'Wh', 'kWh', 'MWh', 'GWh', 'Btu-it'],
  force: ['N', 'kN', 'lbf'],
  frequency: ['mHz', 'Hz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'],
  illuminance: ['lx', 'ft-cd'],
  length: ['mm', 'cm', 'm', 'km', 'in', 'hand', 'ft', 'ft-us', 'yd', 'fath', 'fur', 'mi', 'nMi'],
  mass: ['mg', 'g', 'kg', 't', 'kt', 'mt', 'gr', 'dr', 'oz', 'lb', 'stone', 'qr', 'slug', 'tn', 'ton-uk'],
  pace: ['min/km', 's/m', 'min/mi', 's/ft'],
  power: ['mW', 'W', 'kW', 'MW', 'GW'],
  pressure: ['Pa', 'hPa', 'kPa', 'bar', 'MPa', 'torr', 'psi', 'ksi'],
  reactiveEnergy: ['mVARh', 'VARh', 'kVARh', 'MVARh', 'GVARh'],
  reactivePower: ['mVAR', 'VAR', 'kVAR', 'MVAR', 'GVAR'],
  speed: ['km/h', 'm/s', 'ft/s', 'mi/h', 'knot'],
  temperature: ['C', 'K', 'F', 'R'],
  time: ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'fortnight', 'month', 'year'],
  voltage: ['mV', 'V', 'kV'],
  volume: [
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
  ],
  volumeFlowRate: [
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
  ],
};
