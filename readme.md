# Backend Journey with PH Level-2

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Progress-brightgreen?style=for-the-badge)
![Learning](https://img.shields.io/badge/Learning-Backend%20Engineering-blue?style=for-the-badge)

A comprehensive collection of JavaScript and TypeScript implementations exploring functional programming, advanced type systems, and data transformation patterns.

## 📌 Purpose

This repository serves as a practical learning sandbox for mastering backend fundamentals. It bridges the gap between core JavaScript utility patterns and robust, type-safe TypeScript architectures. By providing focused, real-world examples—such as client-side joins, data aggregation, and advanced generics—this project aims to demonstrate scalable, production-ready coding practices.

## 📑 Table of Contents

- [🚀 Learning Path](#-learning-path)
- [💡 Key Concepts](#-key-concepts)
- [📁 Project Structure](#-project-structure)
- [🛠️ Getting Started](#️-getting-started)
- [📊 Progress Tracker](#-progress-tracker)

## 🚀 Learning Path

**Phase 1: JavaScript Essentials (PreVideos)**

- Master functional programming with array methods (`sort`, `flat`, `some`, `Array.from`)
- Advanced data transformations using `reduce` for aggregations, lookups, and grouping
- Real-world patterns: denormalization, binning time-series data, and client-side joins
- Object-oriented concepts: stateless vs stateful approaches and basic class constructors

**Phase 2: TypeScript Fundamentals (Mission-1/Module-1)**

- Understand primitive types (`string`, `number`, `boolean`, `undefined`, `null`)
- Learn compound types: arrays, tuples, objects with optional and readonly properties
- Master function typing and callback patterns
- Advanced typing techniques:
  - Union types (`|`) and intersection types (`&`) for flexible type combinations
  - Type aliases for reusable type declarations
  - Destructuring objects and arrays with type safety
  - Spread operator for arrays/objects and rest parameters in functions
  - Special types: nullable, unknown, never for edge cases
  - Optional chaining (`?.`) and nullish coalescing (`??`) for safe property access
  - Ternary operators for conditional logic

**Phase 3: TypeScript Advanced Types (Mission-1/Module-2 & Module-3)**

- **Generics**: Build reusable types and functions that work with any type
  - Generic arrays, tuples, and typed functions with type parameters
  - Default generic parameters for flexibility
  - Constraints to enforce rules on generic types using `extends`
  - keyof operator to work with object keys dynamically
- **Interfaces vs Types**: Define contracts for objects and functions
  - Interface extension and callable interfaces
  - Generics within interfaces
- **Type Assertions**: Cast types with confidence using the `as` keyword
- **Enums**: Create fixed sets of related constants (though type unions with `as const` are preferred)
- **Conditional Types**: Types that depend on type conditions
  - Using `extends` to create branching type logic
- **Mapped Types**: Transform existing types into new ones
  - Iterate over object keys with `[key in keyof T]`
  - Build generic type mappers
- **Utility Types**: Built-in TypeScript helpers
  - `Pick<T, K>`: select specific properties
  - `Omit<T, K>`: exclude specific properties
  - `Required<T>`: make all properties mandatory
  - `Partial<T>`: make all properties optional
  - `Readonly<T>`: prevent property mutations
  - `Record<K, T>`: create typed dictionaries
- **as const Assertion**: Lock objects to literal types for immutability and type inference
- **OOP and Classes**:
  - Class definitions and constructor patterns
  - Parameter properties for concise instantiation
  - Methods and properties visibility

## 💡 Key Concepts

- JavaScript array utilities: `sort`, `flat`, `some`, `Array.from`
- Array transformations with `reduce`: subtotals, aggregation, and max calculations
- Lookup tables and denormalization (client-side joins)
- Grouping and aggregating data by key (counts and totals)
- Time-series binning and interval resampling
- Data binning and analytics-friendly transformations
- Stateless vs stateful patterns in JavaScript
- TypeScript basics: primitive types, arrays, tuples, objects, functions, and type annotations
- Advanced TypeScript: union and intersection types, type aliases, destructuring, spread/rest operators, nullable types, unknown and never types, optional chaining, nullish coalescing, and ternary operators
- TypeScript generics with type parameters and default values
- Generic constraints and the `keyof` operator for type-safe access
- Interfaces and type assertions for type safety
- Enums and `as const` assertions for immutable literal types
- Conditional types and mapped types for advanced type transformations
- Utility types: Pick, Omit, Required, Partial, Readonly, and Record for common patterns
- Object-Oriented Programming: classes and constructors in TypeScript

## 📁 Project Structure

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
    - `generic.ts` — generic arrays and typed tuples with examples
    - `genericFunction.ts` — generic functions and tuple helpers with dynamic return types
    - `genericsWithInterface.ts` — generics in interfaces with optional generic defaults
    - `interface.ts` — interface syntax, extension, and callable function interfaces
    - `typeAssertion.ts` — type assertion examples with `as`, runtime type narrowing
    - `constraints.ts` — generic constraints using `extends` keyword to enforce rules
    - `keyOfConstraints.ts` — `keyof` operator for type-safe object key access
    - `enum.ts` — enum declarations and comparison with type unions
    - `asConst.ts` — `as const` assertion for immutable literal types
    - `conditionalType.ts` — conditional types using `extends` for branching type logic
    - `mappedTypes.ts` — mapped types with `[key in keyof T]` for type transformation
    - `utilityTypes.ts` — built-in utility types: Pick, Omit, Required, Partial, Readonly, Record

- `Mission-1/Module-3/`
  - `tsconfig.json` — TypeScript compiler configuration for Module 3
  - `src/`
    - `class.ts` — class definitions, constructor patterns, and parameter properties

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

## 🛠️ Getting Started

### JavaScript examples

Use `node` from the script folder, for example:

```bash
cd "PreVideos/Module-2"
node MO2VO3.js
```

### TypeScript examples (`Mission-1/Module-1`, `Mission-1/Module-2`, and `Mission-1/Module-3`)

Compile with the TypeScript compiler if available:

```bash
cd "Mission-1/Module-1"
npx tsc --project tsconfig.json
```

```bash
cd "Mission-1/Module-2"
npx tsc --project tsconfig.json
```

```bash
cd "Mission-1/Module-3"
npx tsc --project tsconfig.json
```

Then run the emitted JavaScript from `dist/`, for example:

```bash
node dist/test.js
```

If your environment supports running `.ts` files directly, you can also execute the source files from `Mission-1/Module-1/src`, `Mission-1/Module-2/src`, or `Mission-1/Module-3/src`.

## 📊 Progress Tracker

| Module        | Location           | Status | Description                                                     |
| :------------ | :----------------- | :----: | :-------------------------------------------------------------- |
| **JS Module** | PreVideos/Module-2 |   ✅   | Array utilities, `reduce`, lookup tables, and binning           |
| **JS Module** | PreVideos/Module-3 |   ⚠️   | Stateful vs stateless logic, OOP examples, placeholders present |
| **TS Module** | Mission-1/Module-1 |   ✅   | Core TypeScript types and syntax fundamentals                   |
| **TS Module** | Mission-1/Module-2 |   ✅   | Generics, interfaces, utility types, mapped/conditional types   |
| **TS Module** | Mission-1/Module-3 |   ⚠️   | Class-based TypeScript example in progress                      |