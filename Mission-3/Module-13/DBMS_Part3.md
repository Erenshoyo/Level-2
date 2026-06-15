# DBMS Part 3 — SQL & Data Handling

---

## 1. SQL (Structured Query Language)

SQL is the language used to communicate with databases.

- **Full form:** Structured Query Language
- **Developed:** 1970s at IBM
- **Standardized:** 1986
- **Used in:** All modern databases

### Declarative Nature of SQL

SQL is a **declarative language** — you tell the database _what_ you want, not _how_ to do it.

- You specify the result
- DBMS decides the execution strategy (query plan)

---

## 2. Categories of SQL Commands

SQL commands are divided into **5 main categories:**

### DDL — Data Definition Language

> Used to define and modify database structure

| Command    | Description                  |
| ---------- | ---------------------------- |
| `CREATE`   | Create tables/databases      |
| `DROP`     | Delete tables                |
| `ALTER`    | Modify table structure       |
| `TRUNCATE` | Remove all data (fast reset) |

### DQL — Data Query Language

> Used to retrieve data

| Command  | Description            |
| -------- | ---------------------- |
| `SELECT` | Fetch data from tables |

### DML — Data Manipulation Language

> Used to modify data inside tables

| Command  | Description          |
| -------- | -------------------- |
| `INSERT` | Add data             |
| `UPDATE` | Modify existing data |
| `DELETE` | Remove data          |

### DCL — Data Control Language

> Used to manage permissions

| Command  | Description   |
| -------- | ------------- |
| `GRANT`  | Give access   |
| `REVOKE` | Remove access |

### TCL — Transaction Control Language

> Used to manage transactions

| Command    | Description  |
| ---------- | ------------ |
| `COMMIT`   | Save changes |
| `ROLLBACK` | Undo changes |

---

## 3. Why SQL Still Matters

- Works with all modern DBMS
- Backbone of data systems and AI pipelines
- Stable, proven, and scalable

> _Old but gold — and still running the world quietly._

---

## 4. Data Types

Data types define what kind of data can be stored in a column.

### Why Data Types Matter

- Data accuracy
- Memory efficiency
- Performance
- Constraints & validation

### Major Categories

`Boolean` · `Numbers` · `Character (String)` · `Date/Time` · `Binary` · `JSON` · `UUID` · `Array` · `XML`

---

### 4.1 Boolean

| Value   |
| ------- |
| `true`  |
| `false` |
| `null`  |

---

### 4.2 Numeric Types

| Type       | Storage  | Range      | Use Case           |
| ---------- | -------- | ---------- | ------------------ |
| `SMALLINT` | 2 bytes  | ±32K       | Small values (age) |
| `INTEGER`  | 4 bytes  | ±2B        | Default choice     |
| `BIGINT`   | 8 bytes  | Very large | IDs, counters      |
| `REAL`     | 4 bytes  | ~6 digits  | Approximate values |
| `DOUBLE`   | 8 bytes  | ~15 digits | High precision     |
| `NUMERIC`  | Variable | Exact      | Financial data     |
| `SERIAL`   | 4 bytes  | Auto-incr. | Primary keys       |

---

### 4.3 Character Types

| Type         | Description             |
| ------------ | ----------------------- |
| `CHAR(n)`    | Fixed length            |
| `VARCHAR(n)` | Variable length (max n) |
| `TEXT`       | Unlimited length        |

---

### 4.4 Date & Time Types

| Type          | Example                 |
| ------------- | ----------------------- |
| `DATE`        | `'1980-12-20'`          |
| `TIME`        | `'14:30:00'`            |
| `TIMESTAMP`   | `'2025-08-29 14:30:00'` |
| `TIMESTAMPTZ` | Timestamp with timezone |
| `INTERVAL`    | `'3 days 4 hours'`      |

---

### 4.5 UUID

**Universally Unique Identifier** — a globally unique 128-bit value.

```
550e8400-e29b-41d4-a716-446655440000
```

---

## 5. Creating Tables

A table consists of:

- **Columns** (attributes)
- **Data types**
- **Constraints**

---

## 6. Column Constraints

Constraints enforce rules on data to maintain integrity.

| Constraint    | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `NOT NULL`    | Column cannot store NULL values                                |
| `UNIQUE`      | All values in the column must be distinct                      |
| `PRIMARY KEY` | Unique + Not Null; uniquely identifies each row; one per table |
| `FOREIGN KEY` | Links one table to another; maintains referential integrity    |
| `DEFAULT`     | Assigns a default value if none is provided                    |
| `CHECK`       | Enforces a condition on values (e.g. age > 18)                 |

### Foreign Key Example

```
Product table  →  product_id  (primary key)
Order table    →  prod_id     (foreign key → Product)
```

This ensures you **cannot insert invalid references** into related tables.

---

## 7. Insert Operations

| Type                           | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| **Single Row Insert**          | Insert one row at a time                           |
| **Multi Row Insert**           | Insert multiple rows in one query — more efficient |
| **Insert Without Column List** | Values must follow exact column order              |

> ⚠️ **Risky:** If the schema changes, an insert without a column list will break.

---

## 8. Normalization Recap

- **2NF** — Eliminate partial dependencies
- **Lossy Decomposition** — Bad; data is lost when joining back
- **Lossless Decomposition** — Required; original data can be fully recovered

---

## Quick Summary

| Concept     | Key Idea                            |
| ----------- | ----------------------------------- |
| SQL         | Language to interact with databases |
| Declarative | Tell WHAT, not HOW                  |
| DDL         | Structure (CREATE, ALTER)           |
| DML         | Data changes (INSERT, UPDATE)       |
| DQL         | Query (SELECT)                      |
| DCL         | Permissions                         |
| TCL         | Transactions                        |
| Data Types  | Define storage & constraints        |
| Constraints | Ensure data integrity               |
| Primary Key | Unique + Not Null                   |
| Foreign Key | Maintains relationships             |
| Insert      | Add data (single/multiple)          |
