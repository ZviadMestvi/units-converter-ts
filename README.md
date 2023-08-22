# units-converter-ts

![NPM Downloads](https://img.shields.io/npm/dw/units-converter-ts)
![NPM License](https://img.shields.io/npm/l/units-converter-ts)

A simple utility library for converting units. Inspired by [convert-units](https://github.com/convert-units/convert-units) and [units-converter](https://github.com/nosferatoy/units-converter).
I didn't liked the syntax used in these libraries so I decided to make my own one.

## Installation

```bash
npm install units-converter-ts --save
```

## Usage

The package is simple and straightforward to use. First, you need to import the specific measure:

```js
import { mass } from 'units-converter-ts';
```

or if you're using Node.js:

```js
const { mass } = require('units-converter-ts');
```

Then you can use the convert method to convert units from that measurement. The function takes three arguments: the source unit, the target unit and the value to convert, respectively:

```js
mass.convert('kg', 'g', 1);
// 1000
```

In the example 1 kilogram (kg) is being converted to grams (g) which will return 1000.

<br />
<br />

You can also import all objects at once like so:

```js
import * as converter from 'units-converter-ts';
```

or if you're using Node.js:

```js
const converter = require('units-converter-ts');
```

In this case you would use it like this:

```js
converter.mass.convert('kg', 'g', 1);
// 1000
```

There is another alternative, if you don't want to use specific measure, you can import convert object and convert any unit. For example:

```js
import { convert } from 'units-converter-ts';
```

or for Node.js:

```js
const converter = require('units-converter-ts');
```

and use it like so:

```js
converter.convert.convert('mm', 'm', 1000);
// 1
```

## Examples

The library has other methods as well, here are use cases for all of them.

Get list of measures:

```js
convert.measures();
/// [ 'mass', 'length', 'speed', ... ]
```

Get list of all available units:

```js
convert.possibilities();
// [ 'mm2', 'deg', 'mC', 'ml', 'l', 'fl-oz', ... ]
```

Get list of units for specific measure:

```js
power.possibilities();
// [ 'mW', 'W', 'kW', 'MW', 'GW' ]

// OR

convert.possibilities('power');
// [ 'mW', 'W', 'kW', 'MW', 'GW' ]
```

Get list of units for specific measures:

```js
convert.possibilities('power', 'pace');
// [ "mW", "W", "kW", "MW", "GW", "min/km", "s/m", "min/mi", "s/ft"]
```

Get list of all unit descriptions

```js
convert.list();
/*
  [{
      "abbreviation": "gal",
      "measure": "acceleration",
      "plural": "gals"
      "singular": "gal",
      "system": "metric",
    },
    {
      "abbreviation": "m/s2",
      "measure": "acceleration",
      "plural": "metres per second squared"
      "singular": "metre per second squared",
      "system": "metric",
    }
    ...
  ]
*/
```

Get list of unit descriptions for specific measure:

```js
illuminance.list();
/*
  [{
      "abbreviation": "lx",
      "measure": "illuminance",
      "plural": "lux"
      "singular": "lux",
      "system": "metric",
    },
    {
      "abbreviation": "ft-cd",
      "measure": "illuminance",
      "plural": "foot-candles"
      "singular": "foot-candle",
      "system": "imperial",
  }]
*/

// OR

convert.list('illuminance');
/*
  [{
      "abbreviation": "lx",
      "measure": "illuminance",
      "plural": "lux"
      "singular": "lux",
      "system": "metric",
    },
    {
      "abbreviation": "ft-cd",
      "measure": "illuminance",
      "plural": "foot-candles"
      "singular": "foot-candle",
      "system": "imperial",
  }]
*/
```

Get list of units for specific measures:

```js
convert.list('illuminance', 'force');
/*
  [{
      "abbreviation": "lx",
      "measure": "illuminance",
      "plural": "lux"
      "singular": "lux",
      "system": "metric",
    },
    {
      "abbreviation": "ft-cd",
      "measure": "illuminance",
      "plural": "foot-candles"
      "singular": "foot-candle",
      "system": "imperial",
    }
    {
      abbreviation: 'N',
      measure: 'force',
      plural: 'newtons',
      singular: 'newton',
      system: 'metric',
    },
    {
      abbreviation: 'kN',
      measure: 'force',
      plural: 'kilonewtons',
      singular: 'kilonewton',
      system: 'metric',
    },
    {
      abbreviation: 'lbf',
      measure: 'force',
      plural: 'pound-forces',
      singular: 'pound-force',
      system: 'imperial',
  }]
*/
```

Get information about specific unit:

```js
convert.describe('kN');
/*
  {
    abbreviation: "kN",
    measure: "force",
    plural: "kilonewtons",
    singular: "kilonewton",
    system: "metric"
  }
*/
```

## Units

<details><summary>Acceleration</summary>
<p>

- gal
- g-force
- m/s2

</p>
</details>
 
<details><summary>Angle</summary>
<p>

- rev
- rad
- deg
- grad
- arcmin
- arcsec

</p>
</details>

<details><summary>Apparent Power</summary>
<p>

- mVA
- VA
- kVA
- MVA
- GVA

</p>
</details>

<details><summary>Area</summary>
<p>

- mm2
- cm2
- m2
- are
- ha
- km2
- circ-mil
- circ-inch
- in2
- ft2
- yd2
- ro
- ac
- mi2
- twp

</p>
</details>

<details><summary>Charge</summary>
<p>

- abC
- c
- mC
- μC
- nC
- stC
- pC
- e

</p>
</details>

<details><summary>Current</summary>
<p>

- stA
- mA
- A
- abA
- kA

</p>
</details>

<details><summary>Digital</summary>
<p>

- b
- Kb
- Mb
- Gb
- Tb
- B
- KB
- MB
- GB
- TB

</p>
</details>

<details><summary>Energy</summary>
<p>

- J
- kJ
- mWh
- Wh
- kWh
- MWh
- GWh
- Btu-it

</p>
</details>

<details><summary>Force</summary>
<p>

- N
- kN
- lbf

</p>
</details>

<details><summary>Frequency</summary>
<p>

- mHz
- Hz
- kHz
- MHz
- GHz
- THz
- rpm
- deg/s
- rad/s

</p>
</details>

<details><summary>Illuminance</summary>
<p>

- lx
- ft-cd

</p>
</details>

<details><summary>Length</summary>
<p>

- mm
- cm
- m
- km
- in
- hand
- ft
- ft-us
- yd
- fath
- fur
- mi
- nMi

</p>
</details>

<details><summary>Mass</summary>
<p>

- mg
- g
- kg
- t
- kt
- mt
- gr
- dr
- oz
- lb
- stone
- qr
- slug
- tn
- ton-uk

</p>
</details>

<details><summary>Pace</summary>
<p>

- min/km
- s/m
- min/mi
- s/ft

</p>
</details>

<details><summary>Power</summary>
<p>

- mW
- W
- kW
- MW
- GW

</p>
</details>

<details><summary>Pressure</summary>
<p>

- Pa
- hPa
- kPa
- bar
- MPa
- torr
- psi
- ksi

</p>
</details>

<details><summary>Reactive Energy</summary>
<p>

- mVARh
- VARh
- kVARh
- MVARh
- GVARh

</p>
</details>

<details><summary>Reactive Power</summary>
<p>

- mVAR
- VAR
- kVAR
- MVAR
- GVAR

</p>
</details>

<details><summary>Speed</summary>
<p>

- km/h
- m/s
- ft/s
- mi/h
- knot

</p>
</details>

<details><summary>Temperature</summary>
<p>

- C
- K
- F
- R

</p>
</details>

<details><summary>Time</summary>
<p>

- ns
- mu
- ms
- s
- min
- h
- d
- week
- fortnight
- month
- year

</p>
</details>

<details><summary>Voltage</summary>
<p>

- mV
- V
- kV

</p>
</details>

<details><summary>Volume</summary>
<p>

- mm3
- cm3
- ml
- cl
- dl
- l
- kl
- m3
- km3
- krm
- tsk
- msk
- kkp
- glas
- kanna
- tsp
- Tbs
- in3
- fl-oz
- cup
- pnt
- qt
- gal
- ft3
- yd3

</p>
</details>

<details><summary>Volume Flow Rate</summary>
<p>

- mm3/s
- cm3/s
- ml/s
- cl/s
- dl/s
- l/s
- l/min
- l/h
- kl/s
- kl/min
- kl/h
- m3/s
- m3/min
- m3/h
- km3/s
- tsp/s
- Tbs/s
- in3/s
- in3/min
- in3/h
- fl-oz/s
- fl-oz/min
- fl-oz/h
- cup/s
- pnt/s
- pnt/min
- pnt/h
- qt/s
- gal/s
- gal/min
- gal/h
- ft3/s
- ft3/min
- ft3/h
- yd3/s
- yd3/min
- yd3/h

</p>
</details>
