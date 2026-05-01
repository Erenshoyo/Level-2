# Backend Journey with PH Level-2

This repository contains short JavaScript and TypeScript examples used in the PH Level-2 course. The `PreVideos` folder groups JavaScript examples by module, and `Mission-1/Module-1` contains TypeScript fundamentals.

## Repository overview

- `PreVideos/` — JavaScript demo scripts for Module 2 and Module 3.
- `Mission-1/Module-1/` — TypeScript examples showing function syntax, primitives, non-primitives, and object typing.

## How to run

### JavaScript examples

Use `node` from the script folder, for example:

```bash
cd "PreVideos/Module-2"
node MO2VO3.js
```

### TypeScript examples (`Mission-1/Module-1`)

Compile with the TypeScript compiler if available:

```bash
cd "Mission-1/Module-1"
npx tsc --project tsconfig.json
```

Then run the emitted JavaScript from `dist/`, for example:

```bash
node dist/test.js
```

If your environment supports running `.ts` files directly, you can also execute the source files from `Mission-1/Module-1/src`.

## Topics covered

- JavaScript array utilities: `sort`, `flat`, `some`, `Array.from`
- Array transformations with `reduce`: subtotals, aggregation, and max calculations
- Lookup tables and denormalization (client-side joins)
- Grouping and aggregating data by key (counts and totals)
- Time-series binning and interval resampling
- Data binning and analytics-friendly transformations
- Stateless vs stateful patterns in JavaScript
- TypeScript basics: primitive types, arrays, tuples, objects, functions, and type annotations

## Project structure

- `Mission-1/Module-1/`
  - `tsconfig.json` — TypeScript compiler configuration
  - `src/`
    - `function.ts` — function declaration styles, arrow functions, object methods, and callback examples
    - `primitive.ts` — primitive TypeScript types: `string`, `number`, `boolean`, `undefined`, `null`
    - `nonPrimitive.ts` — arrays, tuples, object types, optional properties, and `readonly` fields
    - `test.ts` — simple console output example

- `PreVideos/`
  - `Module-2/`
    - `MO2VO3.js` — data manipulation, grouping, and reduce usage
    - `MO2VO5.js` — aggregation utilities and subtotal examples
    - `MO2VO6.js` — array helpers and transformation patterns
    - `MO2VO7.js` — lookup and denormalization examples
    - `MO2VO8.js` — time-series binning and resampling demo
    - `MO2VO9.js` — additional aggregation patterns
    - `MO2VO10.js` — summary and advanced examples
  - `Module-3/`
    - `MO3VO1.js` — stateless versus stateful concepts overview
    - `MO3VO2.js` — example script for runtime demos
    - `MO3VO3.js` — follow-up examples and practice patterns
    - `MO3VO4.js` — utility and helper snippets
    - `MO3VO5.js` — aggregation and stateful example patterns
    - `MO3VO6.js` — event handling and state demonstration
    - `MO3VO7.js` — practical exercises with data processing
    - `MO3VO8.js` — advanced JavaScript patterns
    - `MO3VO9.js` — demo scripts for core concepts
    - `MO3VO10.js` — wrap-up and summary notes
