import {
  IMeasure,
  IUnit,
  IUnitDescription,
  allMeasures,
  allUnits,
} from './types';

export class Convert<TSystems extends string, TUnitNames extends string> {
  public static measures(): string[] {
    return allMeasures;
  }

  public static allPossibilities(): string[] {
    return allUnits;
  }

  private measure: IMeasure<TSystems, TUnitNames>;
  private measureName: string;

  constructor(measure: IMeasure<TSystems, TUnitNames>, measureName: string) {
    this.measure = measure;
    this.measureName = measureName;
  }

  /**
   * @returns {string[]} An array containing names of all available units for a specified measure.
   */
  public possibilities(): string[] {
    const res: string[] = [];

    for (const system in this.measure) {
      res.push(...Object.keys(this.measure[system].units));
    }

    return res;
  }

  /**
   * Gets information about specific unit.
   *
   * @param {string} unitName - The name of the unit to describe (e.g., 'cm' for centimeter).
   * @returns {IUnitDescription} An object with information about unit.
   */
  public describe(unitName: string): IUnitDescription {
    const unit = this.getUnit(unitName);

    if (!unit) {
      this.throwUnsupportedUnitError(unitName, 'The unit cannot be described.');
    }

    const result: IUnitDescription = {
      abbreviation: unitName,
      measure: this.measureName,
      system: unit.system,
      singular: unit.unit.name.singular,
      plural: unit.unit.name.plural,
    };

    return result;
  }

  /**
   * Converts a numeric value from one unit to another within the same measure system.
   *
   * @param {string} from - The unit name to convert from (e.g., 'cm' for centimeter).
   * @param {string} to - The unit name to convert to (e.g., 'in' for inch).
   * @param {number} value - The numeric value to convert.
   * @returns {number} The converted numeric value in the target unit.
   */
  public convert(from: string, to: string, value: number): number {
    // If both units are the same just return the inputted value
    if (from === to) return value;

    let result: number = 0;

    const fromUnit = this.getUnit(from);
    const toUnit = this.getUnit(to);

    if (!fromUnit) this.throwUnsupportedUnitError(from);
    if (!toUnit) this.throwUnsupportedUnitError(to);

    const fromUnitAnchor: number = fromUnit.unit.anchor;
    const toUnitAnchor: number = toUnit.unit.anchor;

    if (!fromUnitAnchor) {
      throw new Error(
        `'${from}' unit's anchor value is invalid. check '${this.measureName}' object`
      );
    }

    if (!toUnitAnchor) {
      throw new Error(
        `'${to}' unit's anchor value is invalid. check '${this.measureName}' object.`
      );
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

  /**
   * returns the unit information (system and details) corresponding to the provided unit name.
   *
   * @param {string} unitName - The unit name for which to retrieve information.
   * @returns {{system: string; unit: IUnit}} An object containing the system and unit details.
   */
  private getUnit(unitName: string): { system: string; unit: IUnit } {
    for (const system in this.measure) {
      const units = this.measure[system].units;

      if (units[unitName as TUnitNames]) {
        return {
          system,
          unit: units[unitName as TUnitNames],
        };
      }
    }
  }

  /**
   * Throws error with custom error message.
   *
   * @param {string} unit - The unsupported unit that caused the error. Value is empty string by default.
   * @param {string} msg - The custom message.
   */
  private throwUnsupportedUnitError(
    unit: string = '',
    msg: string = ''
  ): never {
    throw new Error(
      `${msg} Unit '${unit}' is not a valid or supported unit for this measure. Get list of units using {measure}.possibilities()`
    );
  }
}
