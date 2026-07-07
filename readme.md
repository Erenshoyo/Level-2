<div align="center">

# 🚀 Backend Engineering Journey

### From JavaScript Fundamentals to Production-Ready APIs

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

![Status](https://img.shields.io/badge/Status-In%20Progress-brightgreen?style=flat-square)
![Modules](https://img.shields.io/badge/Modules_Completed-22-blue?style=flat-square)
![License](https://img.shields.io/badge/License-Learning-orange?style=flat-square)

**A hands-on, progressive curriculum covering everything from array methods to full-stack REST APIs with authentication, role-based access control, and ORM-powered data modeling.**

---

[Roadmap](#-roadmap) · [Quick Start](#-quick-start) · [Project Structure](#-project-structure) · [Progress](#-progress-tracker) · [Key Files](#-key-files-reference)

</div>

---

## 📖 About

This repository documents my backend engineering learning path through the **Programming Hero Level-2** course. Each module builds on the last — starting with JavaScript fundamentals, progressing through TypeScript's type system, and culminating in production-style Express + PostgreSQL + Prisma backends with JWT auth, refresh tokens, and role-based access control.

> **Why this repo?** It's a practical learning sandbox with focused, real-world examples: client-side joins, data aggregation, MVC architecture, parameterized SQL queries, cookie-based refresh tokens, and schema-first ORM modeling — all organized by learning phase.

---

## 🗺 Roadmap

```
●  Phase 1 — JavaScript Essentials          PreVideos/
│  Array methods · reduce · joins · binning · OOP
│
●  Phase 2 — TypeScript Fundamentals        Mission-1/Module-1
│  Primitives · unions · destructuring · spread/rest
│
●  Phase 3 — Advanced TypeScript            Mission-1/Module-2–4
│  Generics · mapped types · OOP · utility types · assignments
│
●  Phase 4 — Web & Backend                  Mission-2/Module-5–6
│  HTTP protocol · IIFE · CJS vs ESM · MVC · JSON persistence
│
●  Phase 5 — Database Integration           Mission-2/Module-7
│  SQL · PostgreSQL · Express + pg · CRUD · COALESCE
│
●  Phase 6 — Authentication                 Mission-2/Module-8
│  JWT · bcrypt · login flows · modular architecture
│
●  Phase 7 — Advanced Middleware            Mission-2/Module-9
│  RBAC · logging · CORS · cookies · refresh tokens
│
●  Phase 8 — Issue Tracker Assignment       Mission-2/Module-10
│  DevPulse API · full auth · HTTP-only cookies · roles
│
●  Phase 9 — DBMS Fundamentals             Mission-3/Module-11–17
│  Relational model · normalization · ER diagrams · SQL practice
│
●  Phase 10 — Prisma & ORM                 Mission-4/Module-18–22
   Schema-first · generated client · Prisma Press API
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18 and **npm**
- **PostgreSQL** (for database modules)
- **TypeScript** (`npx tsc` or globally installed)

### Run Any Module

```bash
# Clone the repo
git clone <repo-url> && cd "PH Level2"

# JavaScript examples (no setup needed)
node PreVideos/Module-2/MO2VO3.js

# TypeScript examples (compile first)
cd "Mission-1/Module-1" && npx tsc --project tsconfig.json && node dist/test.js

# Backend servers (install deps, configure .env, run)
cd "Mission-2/Module-7" && npm install && npm run dev

# Prisma projects
cd "Mission-4/Module-22" && npm install && npm run dev
```

### Environment Variables

Backend modules expect a `.env` file. Here's a template:

```env
DATABASE_URL=postgresql://user:password@host:port/dbname?sslmode=require
PORT=5000
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
BCRYPT_SALT_ROUNDS=10
```

---

## 📚 Learning Path — Phase by Phase

<details>
<summary><strong>Phase 1 — JavaScript Essentials</strong> &nbsp; <code>PreVideos/</code></summary>

### What You'll Learn

- Functional programming with `sort`, `flat`, `some`, `Array.from`
- Data transformations with `reduce` — subtotals, aggregation, max calculations
- Lookup tables and denormalization (client-side joins)
- Grouping and aggregating by key (counts and totals)
- Time-series binning and interval resampling
- Stateless vs stateful patterns, Stack class implementation

### Key Files

| File | Description |
|:-----|:------------|
| `MO2VO3.js` | Array utilities — sort, flat, some, Array.from with pagination |
| `MO2VO5.js` | `reduce` for cart subtotals and finding best scorer |
| `MO2VO6.js` | Lookup table from posts array |
| `MO2VO7.js` | Grouping survey responses by count |
| `MO2VO8.js` | Grouping sales data by category with revenue totals |
| `MO2VO9.js` | Client-side join of users and posts |
| `MO2VO10.js` | Binning time-series events into 30-minute intervals |
| `MO3VO1.js` | Stateless vs stateful concepts |
| `MO3VO2.js` | Basic class constructor refresher |
| `MO3VO3.js` | Stack class — push, pop, peek, isEmpty |

```bash
cd "PreVideos/Module-2" && node MO2VO3.js
```

</details>

<details>
<summary><strong>Phase 2 — TypeScript Fundamentals</strong> &nbsp; <code>Mission-1/Module-1</code></summary>

### What You'll Learn

- Primitive types: `string`, `number`, `boolean`, `undefined`, `null`
- Compound types: arrays, tuples, objects with optional/readonly properties
- Function typing and callback patterns
- Union types (`|`) and intersection types (`&`)
- Type aliases for reusable declarations
- Destructuring with type safety, spread/rest operators
- Special types: nullable, unknown, never
- Optional chaining (`?.`), nullish coalescing (`??`), ternary operators

### Key Files

| File | Description |
|:-----|:------------|
| `primitive.ts` | Primitive TypeScript types |
| `nonPrimitive.ts` | Arrays, tuples, objects, readonly |
| `function.ts` | Function declarations, arrow functions, callbacks |
| `unionAndIntersection.ts` | Union and intersection type examples |
| `typeAlias.ts` | Reusable type alias definitions |
| `destructuring.ts` | Object and array destructuring |
| `spreadAndRestOperators.ts` | Spread and rest operator patterns |
| `specialPrimitiveType.ts` | nullable, unknown, never |
| `questionMark.ts` | Ternary, nullish coalescing, optional chaining |

```bash
cd "Mission-1/Module-1" && npx tsc --project tsconfig.json && node dist/primitive.js
```

</details>

<details>
<summary><strong>Phase 3 — Advanced TypeScript</strong> &nbsp; <code>Mission-1/Module-2, Module-3, Module-4</code></summary>

### What You'll Learn

**Module 2 — Advanced Types:**
- Generics with type parameters, defaults, and constraints
- `keyof` operator for type-safe object key access
- Interfaces vs types, interface extension, callable interfaces
- Type assertions with `as` keyword
- Enums and `as const` for immutable literal types
- Conditional types, mapped types, utility types (`Pick`, `Omit`, `Required`, `Partial`, `Readonly`, `Record`)

**Module 3 — OOP in TypeScript:**
- Class definitions and constructor patterns (parameter properties)
- Access modifiers: `public`, `protected`, `private`, `readonly`
- Inheritance, abstraction, encapsulation, polymorphism
- Getters/setters, static members
- Type guards: `typeof`, `in`, `instanceof`

**Module 4 — Applied Practice:**
- 7 coding challenges applying TypeScript concepts
- Blog on `unknown` vs `any` and type narrowing
- Blog on `Pick` and `Omit` utility types

### Key Files

| File | Description |
|:-----|:------------|
| `generic.ts` | Generic arrays and typed tuples |
| `genericFunction.ts` | Generic functions with dynamic return types |
| `constraints.ts` | Generic constraints using `extends` |
| `keyOfConstraints.ts` | `keyof` for type-safe key access |
| `mappedTypes.ts` | Mapped types with `[key in keyof T]` |
| `utilityTypes.ts` | Pick, Omit, Required, Partial, Readonly, Record |
| `class.ts` | Class definitions and parameter properties |
| `inheritance.ts` | Subclass extension patterns |
| `polymorphism.ts` | Method overriding and shared interfaces |
| `typeGuard.ts` | typeof and in type guards |
| `solution.ts` | 7 assignment problem solutions |

```bash
cd "Mission-1/Module-2" && npx tsc --project tsconfig.json
cd "Mission-1/Module-3" && npx tsc --project tsconfig.json
```

</details>

<details>
<summary><strong>Phase 4 — Web & Backend Essentials</strong> &nbsp; <code>Mission-2/Module-5, Module-6</code></summary>

### What You'll Learn

- Frontend vs backend responsibilities
- How the web works: requests, responses, browser interactions
- Module patterns: IIFE, CommonJS vs ESM
- Building an HTTP server from scratch with Node.js built-in modules
- MVC architecture: routes → controllers → services → models
- Request parsing and response serialization with proper headers
- Type-safe data models using TypeScript interfaces
- File-based JSON persistence, environment variables with dotenv

### Module-6 Server — API Endpoints

```bash
cd "Mission-2/Module-6" && npm install && npm start
```

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/products` | List all products |
| `GET` | `/products/:id` | Get product by ID |
| `POST` | `/products` | Create a product |
| `PATCH` | `/products/:id` | Update a product |
| `DELETE` | `/products/:id` | Delete a product |

</details>

<details>
<summary><strong>Phase 5 — Database Integration</strong> &nbsp; <code>Mission-2/Module-7</code></summary>

### What You'll Learn

- SQL fundamentals: data types, table creation, basic queries
- PostgreSQL connection management and connection pooling
- CRUD operations with parameterized queries (SQL injection prevention)
- Schema design with primary keys, constraints, and defaults
- Partial updates using `COALESCE` for optional fields
- Express.js + PostgreSQL integration with the `pg` library

### API Endpoints

```bash
cd "Mission-2/Module-7" && npm install && npm run dev
```

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/` | Server status |
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get user by ID |
| `POST` | `/api/users` | Create a user |
| `PUT` | `/api/users/:id` | Update a user (partial) |
| `DELETE` | `/api/users/:id` | Delete a user |

</details>

<details>
<summary><strong>Phase 6 — Authentication & Authorization</strong> &nbsp; <code>Mission-2/Module-8</code></summary>

### What You'll Learn

- Secure auth flows with Express, PostgreSQL, bcryptjs, and JWT
- User registration with password hashing
- Login endpoint with credential validation and token generation
- Modular controller/service architecture for `/api/users`, `/api/auth`, `/api/profile`
- Profile creation with relational user validation

### API Endpoints

```bash
cd "Mission-2/Module-8" && npm install && npm run dev
```

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `POST` | `/api/users` | Register a user |
| `GET` | `/api/users` | List users |
| `POST` | `/api/auth/login` | Login and get JWT |
| `POST` | `/api/profile` | Create user profile |

</details>

<details>
<summary><strong>Phase 7 — Advanced Middleware</strong> &nbsp; <code>Mission-2/Module-9</code></summary>

### What You'll Learn

- Request logging middleware persisting to `logger.txt`
- CORS and cookie parsing for browser clients
- Global error handling middleware for centralized responses
- Role-based access control (admin/agent/user)
- Cookie-based JWT refresh tokens for session renewal

### API Endpoints

```bash
cd "Mission-2/Module-9" && npm install && npm run dev
```

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `POST` | `/api/users` | — | Register a user |
| `GET` | `/api/users` | Admin/Agent | List users (protected) |
| `POST` | `/api/auth/login` | — | Login |
| `POST` | `/api/auth/refresh_token` | Cookie | Refresh access token |
| `POST` | `/api/profile` | — | Create profile |

</details>

<details>
<summary><strong>Phase 8 — Issue Tracker Assignment</strong> &nbsp; <code>Mission-2/Module-10</code></summary>

### What You'll Learn

- Production-style issue tracking backend (DevPulse API)
- JWT authentication with access + refresh token flows
- HTTP-only cookies for refresh token storage
- Role-based access: contributors and maintainers
- Issue CRUD with filtering, sorting, and status workflows
- Auto-initialized database schema on startup

### API Workflow

```bash
cd "Mission-2/Module-10: Assignment Module" && npm install && npm run dev
```

```
POST /api/auth/signup    → Register
POST /api/auth/login     → Get access token
POST /api/auth/refresh   → Refresh via cookie
POST /api/issues         → Create issue
GET  /api/issues         → List (with filters)
PATCH /api/issues/:id    → Update issue
DELETE /api/issues/:id   → Maintainer-only removal
```

</details>

<details>
<summary><strong>Phase 9 — DBMS Fundamentals</strong> &nbsp; <code>Mission-3/Module-11 → Module-17</code></summary>

### What You'll Learn

A multi-part deep dive into relational database theory and practice:

| Module | Topic | Key File |
|:-------|:------|:---------|
| 11 | DBMS basics, relational model, key types (super/candidate/primary/foreign) | `DBMS_Part1.md` |
| 12 | Normalization, anomalies, functional dependency, 1NF→3NF | `DBMS_Part2.md` |
| 13 | SQL fundamentals — DDL/DML/DCL/TCL, data types, table creation | `DBMS_Part3.md` |
| 14 | SELECT, ALTER, aggregate & scalar functions | `DBMS_Part4.md` |
| 15 | Practical exercise — enrollment dataset & hands-on questions | `DBMS_Part5.md` |
| 16 | Online bookstore practice task with analytical queries | `DBMS_Part6.md` |
| 17 | **Assignment** — Football Ticket Booking System | `QUERY.sql` |

ER diagrams available in Module-11 and Module-12.

</details>

<details>
<summary><strong>Phase 10 — Prisma & ORM</strong> &nbsp; <code>Mission-4/Module-18 → Module-22</code></summary>

### What You'll Learn

Progressive Prisma ORM development across 5 modules:

| Module | Focus | Quick Start |
|:-------|:------|:------------|
| 18 | Prisma setup, schema modeling, generated client, User/Post queries | `npx tsx src/script.ts` |
| 19 | Reinforcing Prisma workflows and relation-based examples | `npx tsx src/script.ts` |
| 20 | Express + Prisma app with user registration, bcrypt, profile relations | `npm run dev` |
| 21 | Auth and user-management routes added to Prisma Press backend | `npm run dev` |
| 22 | Post and comment CRUD modules for full Prisma Press API | `npm run dev` |

```bash
# Example: run the latest module
cd "Mission-4/Module-22" && npm install && npm run dev
```

</details>

---

## 📂 Project Structure

```
PH Level2/
├── PreVideos/                  ← Phase 1: JavaScript fundamentals
│   ├── Module-2/               ← Array methods, reduce, lookups, binning
│   └── Module-3/               ← Stateful/stateless, OOP, Stack class
│
├── Mission-1/                  ← Phase 2–3: TypeScript mastery
│   ├── Module-1/               ← Type fundamentals (primitives → advanced)
│   ├── Module-2/               ← Generics, mapped types, utility types
│   ├── Module-3/               ← OOP — classes, inheritance, polymorphism
│   └── Module-4/               ← Assignment — 7 challenges + 2 blogs
│
├── Mission-2/                  ← Phase 4–8: Web & Backend
│   ├── Module-5/               ← Web fundamentals, IIFE, CJS vs ESM
│   ├── Module-6/               ← HTTP server from scratch (MVC, JSON DB)
│   ├── Module-7/               ← Express + PostgreSQL CRUD
│   ├── Module-8/               ← JWT auth, bcrypt, user/profile APIs
│   ├── Module-9/               ← RBAC, cookies, refresh tokens, logging
│   └── Module-10/              ← Assignment — DevPulse Issue Tracker
│
├── Mission-3/                  ← Phase 9: DBMS theory & practice
│   ├── Module-11 → 16/         ← Relational DB theory, SQL, ER diagrams
│   └── Module-17/              ← Assignment — Football Booking System
│
└── Mission-4/                  ← Phase 10: Prisma ORM
    ├── Module-18 → 19/         ← Schema modeling, generated client
    └── Module-20 → 22/         ← Prisma Press API (users, auth, posts, comments)
```

---

## ✅ Progress Tracker

| Phase | Module | Location | Status | Topics |
|:------|:-------|:---------|:------:|:-------|
| 1 | JavaScript | `PreVideos/Module-2` | ✅ | Array utilities, reduce, lookups, grouping, binning |
| 1 | JavaScript | `PreVideos/Module-3` | ⚠️ | Stateful/stateless, OOP, Stack class (partial) |
| 2 | TypeScript | `Mission-1/Module-1` | ✅ | Type fundamentals, unions, destructuring, spread/rest |
| 3 | TypeScript | `Mission-1/Module-2` | ✅ | Generics, interfaces, utility types, mapped & conditional types |
| 3 | TypeScript OOP | `Mission-1/Module-3` | ✅ | Classes, access modifiers, inheritance, polymorphism |
| 3 | Applied TS | `Mission-1/Module-4` | ✅ | 7 coding challenges + 2 blogs |
| 4 | Web Fundamentals | `Mission-2/Module-5` | ✅ | HTTP, IIFE, CommonJS vs ESM |
| 4 | Backend Project | `Mission-2/Module-6` | ✅ | HTTP server, MVC, type-safe APIs, JSON persistence |
| 5 | Database | `Mission-2/Module-7` | ✅ | SQL basics, PostgreSQL, Express + DB, CRUD |
| 6 | Authentication | `Mission-2/Module-8` | ✅ | JWT, bcrypt, user CRUD, profile creation |
| 7 | Middleware | `Mission-2/Module-9` | ✅ | RBAC, logging, CORS, cookies, refresh tokens |
| 8 | Assignment | `Mission-2/Module-10` | ✅ | DevPulse Issue Tracker (full-stack auth + CRUD) |
| 9 | DBMS Theory | `Mission-3/Module-11–17` | ✅ | Relational model, normalization, ER diagrams, SQL practice |
| 10 | ORM Setup | `Mission-4/Module-18–19` | ✅ | Prisma schema, generated client, User/Post queries |
| 10 | Prisma + Express | `Mission-4/Module-20` | ✅ | User registration, bcrypt, profile relations |
| 10 | Auth + Users | `Mission-4/Module-21` | ✅ | Prisma Press auth and user routes |
| 10 | Posts + Comments | `Mission-4/Module-22` | ✅ | Full Prisma Press API with CRUD for all entities |

---

## 🎓 Recommended Learning Order

<table>
<tr>
<td width="33%">

### 🟢 Beginners

1. `PreVideos/Module-2` — JS fundamentals
2. `Mission-1/Module-1` — TypeScript basics
3. `Mission-1/Module-2` — Advanced types
4. `Mission-1/Module-3` — OOP

</td>
<td width="33%">

### 🟡 Intermediate

1. `Mission-1/Module-4` — Applied challenges
2. `Mission-2/Module-5` — Web architecture
3. `Mission-2/Module-6–7` — Backend + DB
4. `Mission-3/Module-11–17` — DBMS theory

</td>
<td width="34%">

### 🔵 Project-Ready

1. `Mission-2/Module-8–9` — Auth + middleware
2. `Mission-2/Module-10` — Full assignment
3. `Mission-4/Module-18–22` — Prisma ORM
4. Build your own project! 🚀

</td>
</tr>
</table>

---

## 📎 Key Files Reference

<details>
<summary><strong>TypeScript Fundamentals</strong></summary>

| Concept | File | Module |
|:--------|:-----|:-------|
| Primitive Types | [primitive.ts](Mission-1/Module-1/src/primitive.ts) | M1-M1 |
| Union & Intersection | [unionAndIntersection.ts](Mission-1/Module-1/src/unionAndIntersection.ts) | M1-M1 |
| Generics | [generic.ts](Mission-1/Module-2/src/generic.ts) | M1-M2 |
| Interfaces | [interface.ts](Mission-1/Module-2/src/interface.ts) | M1-M2 |
| Mapped Types | [mappedTypes.ts](Mission-1/Module-2/src/mappedTypes.ts) | M1-M2 |
| Utility Types | [utilityTypes.ts](Mission-1/Module-2/src/utilityTypes.ts) | M1-M2 |
| Classes | [class.ts](Mission-1/Module-3/src/class.ts) | M1-M3 |
| Inheritance | [inheritance.ts](Mission-1/Module-3/src/inheritance.ts) | M1-M3 |
| Assignment Solutions | [solution.ts](Mission-1/Module-4/solution.ts) | M1-M4 |

</details>

<details>
<summary><strong>Backend & Server</strong></summary>

| Concept | File | Module |
|:--------|:-----|:-------|
| HTTP Server | [server.ts](Mission-2/Module-6/src/server.ts) | M2-M6 |
| Data Models | [product.type.ts](Mission-2/Module-6/src/types/product.type.ts) | M2-M6 |
| PostgreSQL Server | [server.ts](Mission-2/Module-7/src/server.ts) | M2-M7 |
| SQL Fundamentals | [sql_basic.md](Mission-2/Module-7/src/sql_basic.md) | M2-M7 |

</details>

<details>
<summary><strong>DBMS Theory & Practice</strong></summary>

| Concept | File | Module |
|:--------|:-----|:-------|
| DBMS Fundamentals | [DBMS_Part1.md](Mission-3/Module-11/DBMS_Part1.md) | M3-M11 |
| ER Diagram | [ER Diagram DEMO.png](Mission-3/Module-11/ER%20Diagram%20DEMO.png) | M3-M11 |
| Normalization | [DBMS_Part2.md](Mission-3/Module-12/DBMS_Part2.md) | M3-M12 |
| Final ER Diagram | [Final ER Diagram DEMO.png](Mission-3/Module-12/Final%20ER%20Diagram%20DEMO.png) | M3-M12 |
| SQL Basics | [DBMS_Part3.md](Mission-3/Module-13/DBMS_Part3.md) | M3-M13 |
| SQL Statements & Functions | [DBMS_Part4.md](Mission-3/Module-14/DBMS_Part4.md) | M3-M14 |
| Enrollment Exercise | [DBMS_Part5.md](Mission-3/Module-15/DBMS_Part5.md) | M3-M15 |
| Bookstore Practice | [DBMS_Part6.md](Mission-3/Module-16/DBMS_Part6.md) | M3-M16 |
| Assignment (Football) | [QUERY.sql](Mission-3/Module-17%20:%20Assignment%20Module/QUERY.sql) | M3-M17 |

</details>

<details>
<summary><strong>Prisma ORM</strong></summary>

| Concept | File | Module |
|:--------|:-----|:-------|
| Prisma Notes | [About_Prisma.md](Mission-4/Module-18/About_Prisma.md) | M4-M18 |
| Prisma Schema | [schema.prisma](Mission-4/Module-18/prisma/schema.prisma) | M4-M18 |
| Prisma Client Script | [script.ts](Mission-4/Module-18/src/script.ts) | M4-M18 |
| Practice Script | [script.ts](Mission-4/Module-19/src/script.ts) | M4-M19 |
| Schema (Module 19) | [schema.prisma](Mission-4/Module-19/prisma/schema.prisma) | M4-M19 |
| Express App | [app.ts](Mission-4/Module-20/src/app.ts) | M4-M20 |
| Server Entry | [server.ts](Mission-4/Module-20/src/server.ts) | M4-M20 |
| User Controller | [user.controller.ts](Mission-4/Module-20/src/modules/user/user.controller.ts) | M4-M20 |
| User Service | [user.service.ts](Mission-4/Module-20/src/modules/user/user.service.ts) | M4-M20 |
| Prisma Models | [user.prisma](Mission-4/Module-20/prisma/schema/user.prisma) | M4-M20 |
| Profile Model | [profile.prisma](Mission-4/Module-20/prisma/schema/profile.prisma) | M4-M20 |
| Enums | [enum.prisma](Mission-4/Module-20/prisma/schema/enum.prisma) | M4-M20 |
| Auth App (M21) | [app.ts](Mission-4/Module-21/src/app.ts) | M4-M21 |
| User Routes (M21) | [user.route.ts](Mission-4/Module-21/src/modules/user/user.route.ts) | M4-M21 |
| Post Routes (M22) | [post.route.ts](Mission-4/Module-22/src/modules/post/post.route.ts) | M4-M22 |
| Comment Routes (M22) | [comment.route.ts](Mission-4/Module-22/src/modules/comment/comment.route.ts) | M4-M22 |

</details>

---

<div align="center">

**Built with ☕ and curiosity** · Following the [Programming Hero](https://www.programming-hero.com/) Level-2 curriculum

</div>
