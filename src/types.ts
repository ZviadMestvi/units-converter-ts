import { accelerationUnits } from './units/acceleration';
import { angleUnits } from './units/angle';
import { apparentPowerUnits } from './units/apparentPower';
import { areaUnits } from './units/area';
import { chargeUnits } from './units/charge';
import { currentUnits } from './units/current';
import { digitalUnits } from './units/digital';
import { energyUnits } from './units/energy';
import { forceUnits } from './units/force';
import { frequencyUnits } from './units/frequency';
import { illuminanceUnits } from './units/illuminance';
import { lengthUnits } from './units/length';
import { massUnits } from './units/mass';
import { paceUnits } from './units/pace';
import { powerUnits } from './units/power';
import { pressureUnits } from './units/pressure';
import { reactiveEnergyUnits } from './units/reactiveEnergy';
import { reactivePowerUnits } from './units/reactivePower';
import { speedUnits } from './units/speed';
import { temperatureUnits } from './units/temperature';
import { timeUnits } from './units/time';
import { voltageUnits } from './units/voltage';
import { volumeUnits } from './units/volume';
import { volumeFlowRateUnits } from './units/volumeFlowRate';

export interface IUnit {
  name: {
    singular: string;
    plural: string;
  };
  anchor: number;
  anchor_shift?: number;
}

export type IMeasure<TSystem extends string, TUnitName extends string> = {
  [system in TSystem]: {
    baseUnit: string;
    transform: (val: number) => number;
    units: Partial<Record<TUnitName, IUnit>>;
  };
};

export interface IUnitDescription {
  abbreviation: string;
  measure: string;
  system: string;
  singular: string;
  plural: string;
}

export type AllMeasuresUnits =
  | accelerationUnits
  | angleUnits
  | apparentPowerUnits
  | areaUnits
  | chargeUnits
  | currentUnits
  | digitalUnits
  | energyUnits
  | forceUnits
  | frequencyUnits
  | illuminanceUnits
  | lengthUnits
  | massUnits
  | paceUnits
  | powerUnits
  | pressureUnits
  | reactiveEnergyUnits
  | reactivePowerUnits
  | speedUnits
  | temperatureUnits
  | timeUnits
  | voltageUnits
  | volumeUnits
  | volumeFlowRateUnits;

export type AllMeasures =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'current'
  | 'digital'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'illuminance'
  | 'length'
  | 'mass'
  | 'pace'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'speed'
  | 'temperature'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';
