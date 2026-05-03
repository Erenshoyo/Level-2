# Backend Journey with PH Level-2

This repository contains short JavaScript and TypeScript examples used in the PH Level-2 course. The `PreVideos` folder groups JavaScript examples by module, and `Mission-1/Module-1` contains TypeScript fundamentals.

## Repository overview

- `PreVideos/` — JavaScript demo scripts for Module 2 and Module 3.
- `Mission-1/Module-1/` — TypeScript examples showing function syntax, primitives, non-primitives, and object typing.
- `Mission-1/Module-2/` — TypeScript generics, interfaces, type assertions, and advanced type patterns.

## How to run

### JavaScript examples

Use `node` from the script folder, for example:

```bash
cd "PreVideos/Module-2"
node MO2VO3.js
```

### TypeScript examples (`Mission-1/Module-1` and `Mission-1/Module-2`)

Compile with the TypeScript compiler if available:

```bash
cd "Mission-1/Module-1"
npx tsc --project tsconfig.json
```

```bash
cd "Mission-1/Module-2"
npx tsc --project tsconfig.json
```

Then run the emitted JavaScript from `dist/`, for example:

```bash
node dist/test.js
```

If your environment supports running `.ts` files directly, you can also execute the source files from `Mission-1/Module-1/src` or `Mission-1/Module-2/src`.

## Topics covered

- JavaScript array utilities: `sort`, `flat`, `some`, `Array.from`
- Array transformations with `reduce`: subtotals, aggregation, and max calculations
- Lookup tables and denormalization (client-side joins)
- Grouping and aggregating data by key (counts and totals)
- Time-series binning and interval resampling
- Data binning and analytics-friendly transformations
- Stateless vs stateful patterns in JavaScript
- TypeScript basics: primitive types, arrays, tuples, objects, functions, and type annotations
- Advanced TypeScript: union and intersection types, type aliases, destructuring, spread/rest operators, nullable types, unknown and never types, optional chaining, nullish coalescing, and ternary operators

## Project structure

- `Mission-1/Module-1/`
  - `tsconfig.json` — TypeScript compiler configuration
  - `src/`
    - `function.ts` — function declaration styles, arrow functions, object methods, and callback examples
    - `primitive.ts` — primitive TypeScript types: `string`, `number`, `boolean`, `undefined`, `null`
    - `nonPrimitive.ts` — arrays, tuples, object types, optional properties, and `readonly` fields
    - `test.ts` — simple console output example
    - `specialPrimitiveType.ts` — special types: nullable, unknown, and never with examples
    - `questionMark.ts` — ternary operator, nullish coalescing, and optional chaining
    - `unionAndIntersection.ts` — union types, intersection types, and combined type examples
    - `typeAlias.ts` — reusable type aliases for objects and functions
    - `destructuring.ts` — object and array destructuring with aliases
    - `spreadAndRestOperators.ts` — spread operator for arrays/objects and rest operator for functions

- `Mission-1/Module-2/`
  - `tsconfig.json` — TypeScript compiler configuration for Module 2
  - `src/`
    - `generic.ts` — generic arrays and typed tuples
    - `genericFunction.ts` — generic functions and tuple helpers with dynamic return types
    - `genericsWithInterface.ts` — generics in interfaces and optional generic defaults
    - `interface.ts` — interface syntax, extension, and callable function interfaces
    - `typeAssertion.ts` — type assertion examples with `as`, runtime type narrowing, and custom error typing

- `PreVideos/`
  - `Module-2/`
    - `MO2VO3.js` — array utilities: `sort`, `flat`, `some`, and `Array.from` with examples like pagination
    - `MO2VO5.js` — using `reduce` for cart subtotal calculation and finding the best scorer from players
    - `MO2VO6.js` — creating a lookup table from posts array using `reduce`
    - `MO2VO7.js` — grouping and aggregating survey responses by count using `reduce`
    - `MO2VO8.js` — grouping sales data by category with total revenue and item count using `reduce`
    - `MO2VO9.js` — denormalizing data: client-side join of users and posts arrays
    - `MO2VO10.js` — binning time series events into 30-minute intervals and counting them
  - `Module-3/`
    - `MO3VO1.js` — stateless vs stateful concepts with object methods and lexical environment
    - `MO3VO2.js` — basic class constructor and methods refresher with counter examples
    - `MO3VO3.js` — empty file
    - `MO3VO4.js` — empty file
    - `MO3VO5.js` — empty file
    - `MO3VO6.js` — empty file
    - `MO3VO7.js` — empty file
    - `MO3VO8.js` — empty file
    - `MO3VO9.js` — empty file
    - `MO3VO10.js` — empty file
