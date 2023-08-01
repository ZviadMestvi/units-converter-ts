import { Convert } from './convert';
import { acceleration as accObj } from './units/acceleration';
import { area as areaObj } from './units/area';
import { angle as angleObj } from './units/angle';
import { apparentPower as appPowObj } from './units/apparentPower';
import { charge as chargeObj } from './units/charge';
import { current as currentObj } from './units/current';
import { digital as digitalObj } from './units/digital';
import { energy as energyObj } from './units/energy';
import { force as forceObj } from './units/force';
import { frequency as frequencyObj } from './units/frequency';
import { illuminance as illumObj } from './units/illuminance';
import { length as lengthObj } from './units/length';
import { mass as massObj } from './units/mass';
import { pace as paceObj } from './units/pace';
import { power as powerObj } from './units/power';
import { pressure as pressureObj } from './units/pressure';
import { reactiveEnergy as reactEnergyObj } from './units/reactiveEnergy';
import { reactivePower as reactPowerObj } from './units/reactivePower';
import { speed as speedObj } from './units/speed';
import { temperature as tempObj } from './units/temperature';
import { time as timeObj } from './units/time';
import { voltage as voltageObj } from './units/voltage';
import { volume as volumeObj } from './units/volume';
import { volumeFlowRate as volFlowRateObj } from './units/volumeFlowRate';

export const acceleration = new Convert(accObj, 'acceleration');
export const area = new Convert(areaObj, 'area');
export const angle = new Convert(angleObj, 'angle');
export const apparentPower = new Convert(appPowObj, 'apparent power');
export const charge = new Convert(chargeObj, 'charge');
export const current = new Convert(currentObj, 'current');
export const digital = new Convert(digitalObj, 'digital');
export const energy = new Convert(energyObj, 'energy');
export const force = new Convert(forceObj, 'force');
export const frequency = new Convert(frequencyObj, 'frequency');
export const illuminance = new Convert(illumObj, 'illuminance');
export const length = new Convert(lengthObj, 'length');
export const mass = new Convert(massObj, 'mass');
export const pace = new Convert(paceObj, 'pace');
export const power = new Convert(powerObj, 'power');
export const pressure = new Convert(pressureObj, 'pressure');
export const reactiveEnergy = new Convert(reactEnergyObj, 'reactive energy');
export const reactivePower = new Convert(reactPowerObj, 'reactive power');
export const speed = new Convert(speedObj, 'speed');
export const temperature = new Convert(tempObj, 'temperature');
export const time = new Convert(timeObj, 'time');
export const voltage = new Convert(voltageObj, 'voltage');
export const volume = new Convert(volumeObj, 'volume');
export const volumeFlowRate = new Convert(volFlowRateObj, 'volume flow rate');
export const convert = {
  /**
   * returns all available measures.
   *
   * @returns {string[]} An array containing names of all available measures.
   */
  measures: (): string[] => Convert.measures(),
  /**
   * returns all available units.
   *
   * @returns {string[]} An array containing abbreviated names of all available units.
   */
  allPossibilities: (): string[] => Convert.allPossibilities(),
};
