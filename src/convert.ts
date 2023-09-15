import { AllMeasures, AllMeasuresUnits, IMeasure, IUnit, IUnitDescription } from './types';
import { allUnits, allMeasureNames, allMeasureObjs } from './units/all';

export class Convert<TSystems extends string, TUnitNames extends string> {
  /**
   * Throws error with custom error message.
   *
   * @param {string} unitName - The name of the unsupported unit that caused the error. Value is empty string by default.
   * @param {string} msg - The custom message. Value is empty string by default.
   */
  private static throwUnsupportedUnitError(unitName: string = '', msg: string = ''): never {
    throw new Error(`${msg} Unit '${unitName}' is not a valid or supported unit for this measure. Get list of units using {measure}.possibilities()`);
  }

  /**
   * Returns a measure object and its name for a given unit.
   *
   * @param {string} unitName - The name of the unit for which to retrieve the measure object.
   */
  private static getMeasure(unitName: string): { obj: IMeasure<string, AllMeasuresUnits>; name: string } {
    for (const measureName of allMeasureNames) {
      if (allUnits[measureName].includes(unitName)) {
        const measureObj = allMeasureObjs[measureName as keyof Record<AllMeasures, IMeasure<string, AllMeasuresUnits>>];
        return { obj: measureObj, name: measureName };
      }
    }

    throw new Error(`Cannot get measure. Unit '${unitName}' could not be found. Get list of units using convert.possibilities()`);
  }

  /**
   * Returns an object containing the system and unit details corresponding to the provided unit name.
   *
   * @param {string} unitName - The unit name for which to retrieve information.
   * @param {string} measureName - Name of the measure to retrieve unit from.
   */
  private static getUnit(unitName: string, measureName: string): { system: string; unit: IUnit } {
    const measureObj: IMeasure<string, AllMeasuresUnits> = allMeasureObjs[measureName as AllMeasures];

    for (const system in measureObj) {
      const units = measureObj[system].units;

      if (units[unitName as AllMeasuresUnits]) {
        return {
          system,
          unit: units[unitName as AllMeasuresUnits] as IUnit,
        };
      }
    }

    this.throwUnsupportedUnitError(unitName, `Trying to retrieve unit from '${measureName}' measure.`);
  }

  /**
   * Returns a description of a unit.
   *
   * @param {string} unitName - The name of the unit to describe.
   * @param {string} measureName - The name of the measure to which the unit belongs.
   */
  private static describeUnit(unitName: string, measureName: string): IUnitDescription {
    const unitInfo = Convert.getUnit(unitName, measureName);
    const unitDesc: IUnitDescription = {
      abbreviation: unitName,
      measure: measureName,
      system: unitInfo.system,
      singular: unitInfo.unit.name.singular,
      plural: unitInfo.unit.name.plural,
    };

    return unitDesc;
  }

  public static measures(): string[] {
    return allMeasureNames;
  }

  public static possibilities(...measures: string[]): string[] {
    if (measures.length === 0) {
      let possibleUnits: string[] = [];
      for (const measureUnits in allUnits) {
        possibleUnits.push(...allUnits[measureUnits]);
      }

      return possibleUnits;
    }

    let possibleUnits: string[] = [];
    measures.forEach(measure => {
      if (allMeasureNames.includes(measure)) {
        possibleUnits.push(...allUnits[measure]);
      } else {
        throw new Error(`Measure '${measure}' doesn't exist. Get list of measures using convert.measures()`);
      }
    });

    return possibleUnits;
  }

  public static describe(unitName: string): IUnitDescription {
    const measure = this.getMeasure(unitName);
    return this.describeUnit(unitName, measure.name);
  }

  public static list(...measures: string[]): IUnitDescription[] {
    if (measures.length === 0) {
      const describedUnits: IUnitDescription[] = [];
      for (const measure in allUnits) {
        allUnits[measure].forEach(unit => {
          describedUnits.push(this.describeUnit(unit, measure));
        });
      }

      return describedUnits;
    }

    const describedUnits: IUnitDescription[] = [];
    measures.forEach(measure => {
      if (allMeasureNames.includes(measure)) {
        allUnits[measure].forEach(unit => {
          describedUnits.push(this.describeUnit(unit, measure));
        });
      } else {
        throw new Error(`Measure '${measure}' doesn't exist. Get list of measures using convert.measures()`);
      }
    });

    return describedUnits;
  }

  public static convert(from: string, to: string, value: number): number {
    if (from === to) return value;

    const fromMeasure = this.getMeasure(from);
    const toMeasure = this.getMeasure(to);

    if (fromMeasure.name !== toMeasure.name) {
      throw new Error(`Cannot convert between incompatible measures '${fromMeasure.name}' and '${toMeasure.name}'`);
    }

    const measureInstance = new Convert(fromMeasure.obj, fromMeasure.name);
    return measureInstance.convert(from, to, value);
  }

  private measure: IMeasure<TSystems, TUnitNames>;
  private measureName: string;

  constructor(measure: IMeasure<TSystems, TUnitNames>, measureName: string) {
    this.measure = measure;
    this.measureName = measureName;
  }

  /**
   * Returns an array containing names of all available units for a specified measure.
   */
  public possibilities(): string[] {
    return allUnits[this.measureName];
  }

  /**
   * Returns an array of descriptions for all units for a specified measure.
   */
  public list(): IUnitDescription[] {
    return Convert.list(this.measureName);
  }

  /**
   * Converts a numeric value from one unit to another within the same measure system.
   *
   * @param {string} from - The unit name to convert from (e.g., 'cm' for centimeter).
   * @param {string} to - The unit name to convert to (e.g., 'in' for inch).
   * @param {number} value - The numeric value to convert.
   * @returns {number} The converted numeric value.
   */
  public convert(from: string, to: string, value: number): number {
    // If both units are the same return the inputted value
    if (from === to) return value;

    let result: number = 0;

    const fromUnit = Convert.getUnit(from, this.measureName);
    const toUnit = Convert.getUnit(to, this.measureName);

    const fromUnitAnchor = fromUnit.unit.anchor;
    const toUnitAnchor = toUnit.unit.anchor;

    if (!fromUnitAnchor) {
      throw new Error(`'${from}' unit's anchor value is invalid. check '${this.measureName}' object`);
    }

    if (!toUnitAnchor) {
      throw new Error(`'${to}' unit's anchor value is invalid. check '${this.measureName}' object.`);
    }

    result = value * fromUnitAnchor;

    if (fromUnit.unit.anchor_shift) {
      result -= fromUnit.unit.anchor_shift;
    }

    if (toUnit.system !== fromUnit.system) {
      result = this.measure[fromUnit.system as TSystems].transform(result);
    }

    if (toUnit.unit.anchor_shift !== undefined) {
      result += toUnit.unit.anchor_shift;
    }

    return result / toUnitAnchor;
  }
}
