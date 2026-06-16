# Prisma Basics — Revision Notes

> **Tagline:** Type-safe · Auto-complete · Human-readable schema · Production-ready  
> **Definition:** Prisma is an open-source ORM (Object-Relational Mapper) that makes database access easy, type-safe, and intuitive for modern JavaScript and TypeScript applications.

---

## 1. What is a Database?

- A database is like a **super-powered spreadsheet** — tables = tabs, rows = records, columns = fields.
- Handles **millions of rows** and **multiple concurrent readers/writers**.
- **Why not spreadsheets?** They break under large data, have no data validation rules, and can't handle thousands of simultaneous users.
- **SQL** (Structured Query Language) is how you talk to a database — `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **Prisma's role:** Sits between your JS/TS app and the database. You write JavaScript → Prisma converts it to SQL → returns clean results.

---

## 2. What is an ORM?

**ORM = Object-Relational Mapping** — lets you talk to your database using JS/TS objects instead of raw SQL.

| Without ORM (Raw SQL) | With Prisma ORM |
|---|---|
| `SELECT * FROM users WHERE email = 'john@example.com' AND age > 18 ORDER BY name ASC;` | `prisma.user.findMany({ where: { email: 'john@example.com', age: { gt: 18 } }, orderBy: { name: 'asc' } })` |

> Prisma **translates your JavaScript into SQL automatically**.

---

## 3. Why Choose Prisma?

| Feature | What it means |
|---|---|
| **Type Safety** | Catch DB errors at compile time, not runtime. Full TypeScript integration. |
| **Great DX** | Readable schema, auto-generated client, one-command migrations. |
| **Data Integrity** | Declarative migrations with version history. DB stays in sync with app code. |
| **Auto-complete** | Editor knows every table, column, relation — no more guessing field names. |
| **Flexible** | Works with all major databases. Supports raw SQL alongside ORM. |
| **Scalable** | From solo side projects to enterprise apps. Handles complex queries and large datasets. |

---

## 4. Type Safety in Prisma

- Your editor catches mistakes **before** you run your app.
- Prisma generates **TypeScript types from your schema automatically**.
- If you define `email` as `String`, passing a number causes a **red underline** in your editor — not a runtime crash.
- Real-world example: Misspelling `'emial'` instead of `'email'` is caught **instantly** — not after users report errors.
- Without type safety → bugs hide until production crashes.

---

## 5. Great Developer Experience (DX)

- **Readable Schema Language** — Simple `.prisma` file, human-readable. No XML or JSON configs.
- **Auto-Generated Client** — Change schema → Prisma auto-generates a custom client library. Zero boilerplate.
- **One-Command Migrations** — Edit schema, run one command, Prisma figures out the diff and applies it.
- **Prisma Studio** — Free visual GUI to browse and edit your database in a browser. Great for debugging.

---

## 6. Auto-complete in Prisma

- Prisma generates a client that knows your **exact database structure**.
- VS Code reads it and shows a **dropdown of valid options** as you type.
- Type `prisma.user.` → get `findMany`, `create`, `update`, `delete`, etc.
- `where` clause only shows fields that actually exist on that model — can't query a nonexistent field.
- Works with **relations too** — `include: { posts: true }` is suggested automatically.
- Typos become nearly impossible since you pick from a list.
- Explore entire DB structure with `Ctrl+Space`.

---

## 7. Data Integrity in Prisma

- **Data Integrity** = DB always contains correct, consistent, reliable data.
- **Schema as Single Source of Truth** — The schema defines what data is allowed. `@unique` on email means no two users can share one.
- **Declarative Migrations with History** — Every DB change is tracked in timestamped migration files. Can roll back. Think: **Git for your DB structure**.
- **Referential Integrity** — If a `Post` belongs to a `User`, that `User` must actually exist. No orphan records.

---

## 8. Prisma is Flexible

- Supports: **PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, CockroachDB** — switch with one config line.
- Works with any framework: **Next.js, Express, Fastify, NestJS, Remix, SvelteKit**, any Node.js/TypeScript project.
- **Raw SQL escape hatch** — Write raw SQL alongside Prisma Client when queries get too complex.
- **Incremental adoption** — Add Prisma one model at a time. Works alongside existing DB code.

---

## 9. Prisma is Scalable

- **Connection Pooling** — Reuses DB connections instead of creating new ones per request. Prevents overload.
- **Optimized Queries** — Fetches only requested fields, uses proper JOINs, batches queries. No SQL expertise needed.
- **Serverless Support** — Works on Vercel, AWS Lambda, Cloudflare Workers via **Prisma Accelerate** (handles connections in stateless functions).
- Used by **Netflix, AT&T**, and thousands of startups. 35,000+ GitHub stars.

---

## 10. Prisma vs Other ORMs

| ORM | Notes |
|---|---|
| **Sequelize** | Oldest Node.js ORM. Class-based, lacks built-in TS support and auto-complete. |
| **TypeORM** | Decorator/class-based (Java-style). Has TS support but requires lots of boilerplate. |
| **Drizzle** | Newer, lightweight, closer to raw SQL. More control but more SQL knowledge required. |
| **Raw SQL** | Maximum control, zero safety nets — no auto-complete, no type checking, easy typos. |
| **Prisma** | Schema-first, fully typed, auto-generated client. Less code, fewer bugs. |

> Prisma gives you **90% of SQL's power with 10% of the effort** and full safety guarantees.

---

## 11. The Prisma Ecosystem

| Tool | Purpose |
|---|---|
| **Prisma Client** | Auto-generated, type-safe query builder. Used in your app code for CRUD. |
| **Prisma Migrate** | Manages DB schema changes. Creates timestamped migration files. Like Git for DB structure. |
| **Prisma Studio** | Visual GUI — browse, add, and edit data in a browser. No SQL needed. |
| **Prisma Accelerate** | Global DB cache + connection pooler. Makes queries faster at the edge. Essential for serverless. |

---

## 12. When to Use Prisma

### ✅ Use Prisma When…
- Building a Node.js or TypeScript app
- You want type safety and auto-complete
- You're a beginner and don't know SQL well
- Working in a team needing consistent migrations
- Building a REST API or GraphQL server
- Using Next.js, Remix, NestJS, or Express
- Deploying to serverless platforms

### ❌ Maybe Skip Prisma If…
- Not using JavaScript or TypeScript
- You need extremely complex SQL constantly
- Building a tiny script with no database
- You prefer full control with raw SQL
- Using Python, Ruby, or Java (use their own ORMs)
- Working with a legacy DB that can't be migrated
- Need real-time DB subscriptions (use **Prisma Pulse**)

---

## 13. The Three Core Tools

```
01. Prisma Schema   →  schema.prisma file | Data Models | Relations
02. Prisma Migrate  →  Auto Migrations | Version Control | Safe Rollbacks
03. Prisma Client   →  Type-Safe | Auto-generated | IntelliSense
```

---

## 14. The Prisma Schema — `schema.prisma`

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  author   User   @relation(fields: [authorId])
  authorId Int
}
```

### Schema Cheat Sheet

| Keyword | Meaning |
|---|---|
| `model` | A table in your database |
| `Int`, `String`, `DateTime` | Data types |
| `@id` | Primary key (unique ID) |
| `@unique` | No duplicate values allowed |
| `@default(...)` | Automatic default value |
| `String?` | Optional field (can be null) |
| `Post[]` | One-to-many relation (User has many Posts) |
| `@relation(fields: [...])` | Defines a foreign key relationship |

---

## 15. What is Prisma Migrate?

- A **migration** = a set of instructions telling the DB how to change its structure (add a column, create a table, etc.).
- Needed for **team consistency** — everyone's DB must have the same structure.
- Other tools: write migration SQL by hand. Prisma: **reads your schema, detects the diff, generates the migration for you**.

---

## 16. Prisma Client Queries (CRUD)

```ts
// CREATE
await prisma.user.create({
  data: { email: "alice@prisma.io", name: "Alice" }
})

// READ (with filter + relation include)
await prisma.user.findMany({
  where: { email: { contains: "prisma" } },
  include: { posts: true }
})

// UPDATE
await prisma.user.update({
  where: { id: 1 },
  data: { name: "New Name" }
})

// DELETE
await prisma.user.delete({
  where: { id: 1 }
})
```

---

## 17. Common Prisma Terminology

| Term | Definition |
|---|---|
| **Model** | Represents a DB table. Has fields (columns) and relations. |
| **Schema** | The `schema.prisma` file — defines models, datasource, generators. |
| **Migration** | File recording DB structure changes. Keeps environments in sync. |
| **Relation** | Connection between two models (e.g. User has many Posts). |
| **Client** | Auto-generated, fully typed library you import to run queries. |
| **Generator** | Schema section telling Prisma what to generate (usually the Client). |
| **Datasource** | Schema section specifying which DB to connect to (PostgreSQL, MySQL, etc). |
| **Seeding** | Filling DB with initial test data via seed scripts. |

---

## 18. How Prisma Works Under the Hood

```
Your App Code (JS/TS)
       ↓
  Prisma Client  ← thin JS layer, provides the API
       ↓
  Query Engine   ← compiled Rust engine, translates to optimized SQL
       ↓
   Database
```

- **Query Engine** — Compiled (Rust-based). Your JS sends requests → engine generates optimized SQL → hits the DB.
- **Schema to Types Pipeline** — `prisma generate` reads `schema.prisma` → creates TypeScript type definitions → powers auto-complete and type safety.
- **Always re-run `prisma generate` after schema changes** to stay in sync.

---

## 19. The Prisma Workflow

```
1. Define Schema    →  Write models in schema.prisma
2. Run Migrate      →  Prisma creates/updates DB tables
3. Generate Client  →  Prisma builds a typed client
4. Write Queries    →  Use prisma.model.method() in your app
5. Iterate          →  Change schema → migrate → generate → repeat
```

> **Key Takeaway:** You focus on app logic. Prisma handles database complexity.

---

## Quick Reference — Install & Setup

```bash
# Install
npm install prisma --save-dev
npm install @prisma/client

# Initialize
npx prisma init

# After editing schema.prisma:
npx prisma migrate dev --name your_migration_name

# Regenerate client after schema change
npx prisma generate

# Open Prisma Studio
npx prisma studio
```