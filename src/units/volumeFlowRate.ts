import { IMeasure } from '../types';

const RATIO = 33.8140227;

type volumeFlowRateSystems = 'metric' | 'imperial';
type volumeFlowRateUnits =
  | 'mm3/s'
  | 'cm3/s'
  | 'ml/s'
  | 'cl/s'
  | 'dl/s'
  | 'l/s'
  | 'l/min'
  | 'l/h'
  | 'kl/s'
  | 'kl/min'
  | 'kl/h'
  | 'm3/s'
  | 'm3/min'
  | 'm3/h'
  | 'km3/s'
  | 'tsp/s'
  | 'Tbs/s'
  | 'in3/s'
  | 'in3/min'
  | 'in3/h'
  | 'fl-oz/s'
  | 'fl-oz/min'
  | 'fl-oz/h'
  | 'cup/s'
  | 'pnt/s'
  | 'pnt/min'
  | 'pnt/h'
  | 'qt/s'
  | 'gal/s'
  | 'gal/min'
  | 'gal/h'
  | 'ft3/s'
  | 'ft3/min'
  | 'ft3/h'
  | 'yd3/s'
  | 'yd3/min'
  | 'yd3/h';

export const volumeFlowRate: IMeasure<
  volumeFlowRateSystems,
  volumeFlowRateUnits
> = {
  metric: {
    baseUnit: 'l/s',
    transform: (val: number): number => val * RATIO,
    units: {
      'mm3/s': {
        name: {
          singular: 'cubic millimeter per second',
          plural: 'cubic millimeters per second',
        },
        anchor: 1 / 1000000,
      },
      'cm3/s': {
        name: {
          singular: 'cubic centimeter per second',
          plural: 'cubic centimeters per second',
        },
        anchor: 1 / 1000,
      },
      'ml/s': {
        name: {
          singular: 'millilitre per second',
          plural: 'millilitres per second',
        },
        anchor: 1 / 1000,
      },
      'cl/s': {
        name: {
          singular: 'centilitre per second',
          plural: 'centilitres per second',
        },
        anchor: 1 / 100,
      },
      'dl/s': {
        name: {
          singular: 'decilitre per second',
          plural: 'decilitres per second',
        },
        anchor: 1 / 10,
      },
      'l/s': {
        name: {
          singular: 'litre per second',
          plural: 'litres per second',
        },
        anchor: 1,
      },
      'l/min': {
        name: {
          singular: 'litre per minute',
          plural: 'litres per minute',
        },
        anchor: 1 / 60,
      },
      'l/h': {
        name: {
          singular: 'litre per hour',
          plural: 'litres per hour',
        },
        anchor: 1 / 3600,
      },
      'kl/s': {
        name: {
          singular: 'kilolitre per second',
          plural: 'kilolitres per second',
        },
        anchor: 1000,
      },
      'kl/min': {
        name: {
          singular: 'kilolitre per minute',
          plural: 'kilolitres per minute',
        },
        anchor: 50 / 3,
      },
      'kl/h': {
        name: {
          singular: 'kilolitre per hour',
          plural: 'kilolitres per hour',
        },
        anchor: 5 / 18,
      },
      'm3/s': {
        name: {
          singular: 'cubic meter per second',
          plural: 'cubic meters per second',
        },
        anchor: 1000,
      },
      'm3/min': {
        name: {
          singular: 'cubic meter per minute',
          plural: 'cubic meters per minute',
        },
        anchor: 50 / 3,
      },
      'm3/h': {
        name: {
          singular: 'cubic meter per hour',
          plural: 'cubic meters per hour',
        },
        anchor: 5 / 18,
      },
      'km3/s': {
        name: {
          singular: 'cubic kilometer per second',
          plural: 'cubic kilometers per second',
        },
        anchor: 1000000000000,
      },
    },
  },
  imperial: {
    baseUnit: 'fl-oz/s',
    transform: (val: number): number => (val * 1) / RATIO,
    units: {
      'tsp/s': {
        name: {
          singular: 'teaspoon per second',
          plural: 'teaspoons per second',
        },
        anchor: 1 / 6,
      },
      'Tbs/s': {
        name: {
          singular: 'tablespoon per second',
          plural: 'tablespoons per second',
        },
        anchor: 1 / 2,
      },
      'in3/s': {
        name: {
          singular: 'cubic inch per second',
          plural: 'cubic inches per second',
        },
        anchor: 0.55411,
      },
      'in3/min': {
        name: {
          singular: 'cubic inch per minute',
          plural: 'cubic inches per minute',
        },
        anchor: 0.55411 / 60,
      },
      'in3/h': {
        name: {
          singular: 'cubic inch per hour',
          plural: 'cubic inches per hour',
        },
        anchor: 0.55411 / 3600,
      },
      'fl-oz/s': {
        name: {
          singular: 'fluid ounce per second',
          plural: 'fluid ounces per second',
        },
        anchor: 1,
      },
      'fl-oz/min': {
        name: {
          singular: 'fluid ounce per minute',
          plural: 'fluid ounces per minute',
        },
        anchor: 1 / 60,
      },
      'fl-oz/h': {
        name: {
          singular: 'fluid ounce per hour',
          plural: 'fluid ounces per hour',
        },
        anchor: 1 / 3600,
      },
      'cup/s': {
        name: {
          singular: 'cup per second',
          plural: 'cups per second',
        },
        anchor: 8,
      },
      'pnt/s': {
        name: {
          singular: 'pint per second',
          plural: 'pints per second',
        },
        anchor: 16,
      },
      'pnt/min': {
        name: {
          singular: 'pint per minute',
          plural: 'pints per minute',
        },
        anchor: 4 / 15,
      },
      'pnt/h': {
        name: {
          singular: 'pint per hour',
          plural: 'pints per hour',
        },
        anchor: 1 / 225,
      },
      'qt/s': {
        name: {
          singular: 'quart per second',
          plural: 'quarts per second',
        },
        anchor: 32,
      },
      'gal/s': {
        name: {
          singular: 'gallon per second',
          plural: 'gallons per second',
        },
        anchor: 128,
      },
      'gal/min': {
        name: {
          singular: 'gallon per minute',
          plural: 'gallons per minute',
        },
        anchor: 32 / 15,
      },
      'gal/h': {
        name: {
          singular: 'gallon per hour',
          plural: 'gallons per hour',
        },
        anchor: 8 / 225,
      },
      'ft3/s': {
        name: {
          singular: 'cubic foot per second',
          plural: 'cubic feet per second',
        },
        anchor: 957.506,
      },
      'ft3/min': {
        name: {
          singular: 'cubic foot per minute',
          plural: 'cubic feet per minute',
        },
        anchor: 957.506 / 60,
      },
      'ft3/h': {
        name: {
          singular: 'cubic foot per hour',
          plural: 'cubic feet per hour',
        },
        anchor: 957.506 / 3600,
      },
      'yd3/s': {
        name: {
          singular: 'cubic yard per second',
          plural: 'cubic yards per second',
        },
        anchor: 25852.7,
      },
      'yd3/min': {
        name: {
          singular: 'cubic yard per minute',
          plural: 'cubic yards per minute',
        },
        anchor: 25852.7 / 60,
      },
      'yd3/h': {
        name: {
          singular: 'cubic yard per hour',
          plural: 'cubic yards per hour',
        },
        anchor: 25852.7 / 3600,
      },
    },
  },
};
