# Backend Journey with PH Level-2

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Progress-brightgreen?style=for-the-badge)
![Learning](https://img.shields.io/badge/Learning-Backend%20Engineering-blue?style=for-the-badge)

A comprehensive collection of JavaScript and TypeScript implementations exploring functional programming, advanced type systems, and data transformation patterns.

## Purpose

This repository serves as a practical learning sandbox for mastering backend fundamentals. It bridges the gap between core JavaScript utility patterns and robust, type-safe TypeScript architectures. By providing focused, real-world examples—such as client-side joins, data aggregation, and advanced generics—this project aims to demonstrate scalable, production-ready coding practices.

## Table of Contents

- [Learning Path](#-learning-path)
- [Key Concepts](#-key-concepts)
- [Project Structure](#-project-structure)
- [Getting Started](#️-getting-started)
- [Progress Tracker](#-progress-tracker)

## Learning Path

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
  - Inheritance, abstraction, encapsulation, polymorphism, getters/setters, and static members
- **Assignment Practice**: Apply TypeScript concepts in Module 4 with problem-solving, blogs, and utility types

**Phase 4: Web & Backend Essentials (Mission-2/Module-5 & Module-6)**

- Understand frontend vs backend responsibilities
- Learn how the web works from scratch, including requests, responses, and browser interactions
- Master JavaScript module patterns: IIFE (Immediately Invoked Function Expressions)
- Compare CommonJS and ES Modules (ESM) for module management
- Build foundational knowledge for web application architecture and module systems
- Build a complete HTTP server using Node.js built-in modules
- Implement MVC architecture: routes, controllers, services, and data models
- Parse HTTP requests and serialize responses with proper headers
- Create type-safe data models using TypeScript interfaces
- Manage file-based persistence with JSON database
- Configure environment variables with dotenv

**Phase 5: Database Integration (Mission-2/Module-7)**

- Master SQL fundamentals: data types, table creation, and basic queries
- Understand PostgreSQL as a relational database system
- Learn database connection management with connection pooling
- Implement CRUD operations using parameterized queries for security
- Handle database schema design with primary keys, constraints, and defaults
- Manage database migrations and initialization scripts
- Integrate Express.js with PostgreSQL using the pg library
- Build RESTful APIs backed by relational databases
- Implement partial updates using COALESCE for flexible data modification
- Configure environment variables for database connections

## Key Concepts

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
- Access modifiers, inheritance, and type guards for safer class-based patterns
- JavaScript module patterns: IIFE for scope isolation and avoiding global namespace pollution
- CommonJS (`module.exports`, `require`) for server-side module management
- ES Modules (ESM) for standardized module syntax with `import`/`export`
- Module bundling and how frontend and backend leverage different module systems
- HTTP protocol fundamentals: requests, responses, methods (GET, POST, PATCH, PUT, DELETE), headers, and status codes
- MVC architecture: separation of concerns through routes, controllers, services, and models
- Request body parsing and response serialization with proper content-type headers
- Type-safe server implementation using TypeScript interfaces and types
- File-based data persistence with JSON database operations
- Environment configuration management with dotenv for sensitive data
- RESTful API design principles and endpoint structure
- SQL fundamentals: data types (numbers, character, date/time, JSON, UUID, arrays)
- PostgreSQL database management: connection pooling, schema design, and queries
- Database integration with Node.js: pg library for PostgreSQL connections
- CRUD operations with parameterized queries for SQL injection prevention
- Database schema creation with constraints, defaults, and auto-incrementing keys
- Partial updates using COALESCE for handling optional fields in updates

## Project Structure

- `Mission-1/`
  - `Module-1/`
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

  - `Module-2/`
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

  - `Module-3/`
    - `tsconfig.json` — TypeScript compiler configuration for Module 3
    - `src/`
      - `abstraction.ts` — abstraction with interfaces and abstract classes
      - `accessModifier.ts` — access modifiers: `public`, `protected`, `private`, and `readonly`
      - `class.ts` — class definitions, constructor patterns, and parameter properties
      - `encapsulation.ts` — encapsulation with private/protected members and hidden methods
      - `getterSetter.ts` — getter and setter usage for controlled property access
      - `inheritance.ts` — inheritance with subclass extension and superclass constructors
      - `instanceOfGuard.ts` — `instanceof` type guards and runtime narrowing with class instances
      - `polymorphism.ts` — polymorphism through method overriding and shared interfaces
      - `static.ts` — static properties and methods on classes
      - `typeGuard.ts` — type guard examples using `typeof` and `in`

  - `Module-4 : Assignment Module/`
    - `README.md` — assignment overview and problem summaries
    - `solution.ts` — TypeScript assignment solutions for 7 problems
    - `blog-1.md` — blog on `unknown` vs `any` and type narrowing
    - `blog-2.md` — blog on `Pick` and `Omit` utility types

- `Mission-2/`
  - `Module-5/`
    - `FrontendVSBackendEssentials.ts` — frontend vs backend essentials
    - `How_The_Web_Works_From_Scratch.ts` — web fundamentals from scratch
    - `IIFE.js` — immediately invoked function expressions
    - `commonJS_ESM.js` — CommonJS module examples
    - `commonJS_ESM2.js` — CommonJS vs ESM comparison examples
    - `commonJS_ESM3.js` — additional CommonJS and ESM patterns
    - `esm1.mjs` — ES module patterns (first example)
    - `esm2.mjs` — ES module patterns (second example)
    - `utils/` — utility module folder
      - `add.js` — addition utility function
      - `sub.js` — subtraction utility function
      - `index.js` — utility module index
  - `Module-6/`
    - `tsconfig.json` — TypeScript compiler configuration
    - `package.json` — project dependencies (tsx, dotenv, @types/node)
    - `.env` — environment variables (PORT configuration)
    - `src/`
      - `server.ts` — HTTP server entry point with routing and request handling
      - `config/index.ts` — configuration management (PORT, database path)
      - `routes/route.ts` — URL routing logic and HTTP method matching
      - `controller/product.controller.ts` — request handlers and business logic
      - `service/product.service.ts` — data operations and CRUD logic
      - `types/product.type.ts` — TypeScript interfaces for Product model
      - `utils/parseBody.ts` — HTTP request body parsing utility
      - `utils/sendResponse.ts` — HTTP response serialization utility
      - `database/db.json` — file-based JSON database for products

  - `Module-7/`
    - `tsconfig.json` — TypeScript compiler configuration
    - `package.json` — project dependencies (express, pg, dotenv, tsx, @types/express, @types/pg)
    - `.env` — environment variables (DATABASE_URL for PostgreSQL connection)
    - `src/`
      - `server.ts` — Express server with PostgreSQL integration and user CRUD API
      - `sql_basic.md` — comprehensive SQL fundamentals guide covering data types, queries, and PostgreSQL features

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

## Getting Started

### JavaScript examples

Use `node` from the script folder, for example:

```bash
cd "PreVideos/Module-2"
node MO2VO3.js
```

### TypeScript examples (`Mission-1/Module-1`, `Mission-1/Module-2`, `Mission-1/Module-3`, `Mission-2/Module-5` and `Mission-2/Module-6`)

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

### Backend Server Project (Mission-2/Module-6)

A complete HTTP server implementation with MVC architecture and type-safe TypeScript.

**Setup:**

```bash
cd "Mission-2/Module-6"
npm install
```

**Running the server:**

```bash
# Using tsx for TypeScript execution
npm start

# Or manually
tsx src/server.ts
```

**API Endpoints:**

```bash
# Get all products
curl http://localhost:3000/products

# Get product by ID
curl http://localhost:3000/products/1

# Create product
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Product","price":29.99,"quantity":10}'

# Update product
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":39.99}'

# Delete product
curl -X DELETE http://localhost:3000/products/1
```

### Database-Backed Server Project (Mission-2/Module-7)

A complete Express.js server with PostgreSQL integration, implementing user management with full CRUD operations.

**Setup:**

```bash
cd "Mission-2/Module-7"
npm install
```

**Environment Configuration:**

Create a `.env` file with your PostgreSQL connection string:

```env
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
```

**Running the server:**

```bash
# Using tsx for TypeScript execution
npm run dev

# Or manually
tsx watch ./src/server.ts
```

**API Endpoints:**

```bash
# Get server status
curl http://localhost:5000/

# Get all users
curl http://localhost:5000/api/users

# Get user by ID
curl http://localhost:5000/api/users/1

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"secret123","age":25}'

# Update user (partial update)
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","age":26}'

# Delete user
curl -X DELETE http://localhost:5000/api/users/1
```

## Progress Tracker

| Module                   | Location           | Status | Description                                                       |
| :----------------------- | :----------------- | :----: | :---------------------------------------------------------------- |
| **JavaScript**           | PreVideos/Module-2 |   ✅   | Array utilities, reduce, lookups, grouping, binning               |
| **JavaScript**           | PreVideos/Module-3 |   ⚠️   | Stateful/stateless patterns, OOP examples, some placeholders      |
| **TypeScript**           | Mission-1/Module-1 |   ✅   | Type fundamentals, unions, destructuring, spread/rest operators   |
| **TypeScript**           | Mission-1/Module-2 |   ✅   | Generics, interfaces, utility types, mapped & conditional types   |
| **TypeScript OOP**       | Mission-1/Module-3 |   ✅   | Classes, access modifiers, inheritance, polymorphism, type guards |
| **TypeScript Applied**   | Mission-1/Module-4 |   ✅   | 7 coding challenges, type narrowing blog, utility types blog      |
| **Web Fundamentals**     | Mission-2/Module-5 |   ✅   | HTTP protocol, IIFE, CommonJS vs ESM, module patterns             |
| **Backend Project**      | Mission-2/Module-6 |   ✅   | HTTP server, MVC architecture, type-safe APIs, JSON persistence   |
| **Database Integration** | Mission-2/Module-7 |   ✅   | SQL basics, PostgreSQL, Express + DB integration, CRUD operations |

## 🎓 Learning Recommendations

**For Beginners:**

1. Start with `PreVideos/Module-2` to understand functional programming concepts
2. Move to `Mission-1/Module-1` to learn TypeScript basics
3. Progress through `Mission-1/Module-2` and `Module-3` for advanced types and OOP

**For Intermediate Learners:**

1. Review `PreVideos` to strengthen JavaScript fundamentals
2. Study `Mission-1/Module-2` for advanced type system features
3. Explore `Mission-1/Module-4` assignment module for real-world problems
4. Review `Mission-2/Module-5` for web architecture understanding

**For Building Projects:**

1. Complete `Mission-1` for TypeScript proficiency
2. Study `Mission-2/Module-5` for HTTP protocol understanding
3. Work with `Mission-2/Module-6` to build full-featured backend servers
4. Integrate `Mission-2/Module-7` for database-backed applications with PostgreSQL

## 📝 Key Files Summary

| Concept              | File                                                                      | Module |
| -------------------- | ------------------------------------------------------------------------- | ------ |
| Primitive Types      | [primitive.ts](Mission-1/Module-1/src/primitive.ts)                       | M1-M1  |
| Union & Intersection | [unionAndIntersection.ts](Mission-1/Module-1/src/unionAndIntersection.ts) | M1-M1  |
| Generics             | [generic.ts](Mission-1/Module-2/src/generic.ts)                           | M1-M2  |
| Interfaces           | [interface.ts](Mission-1/Module-2/src/interface.ts)                       | M1-M2  |
| Mapped Types         | [mappedTypes.ts](Mission-1/Module-2/src/mappedTypes.ts)                   | M1-M2  |
| Utility Types        | [utilityTypes.ts](Mission-1/Module-2/src/utilityTypes.ts)                 | M1-M2  |
| Classes              | [class.ts](Mission-1/Module-3/src/class.ts)                               | M1-M3  |
| Inheritance          | [inheritance.ts](Mission-1/Module-3/src/inheritance.ts)                   | M1-M3  |
| Assignment Solutions | [solution.ts](Mission-1/Module-4/solution.ts)                             | M1-M4  |
| HTTP Server          | [server.ts](Mission-2/Module-6/src/server.ts)                             | M2-M6  |
| Data Models          | [product.type.ts](Mission-2/Module-6/src/types/product.type.ts)           | M2-M6  |
| PostgreSQL Server    | [server.ts](Mission-2/Module-7/src/server.ts)                             | M2-M7  |
| SQL Fundamentals     | [sql_basic.md](Mission-2/Module-7/src/sql_basic.md)                       | M2-M7  |
