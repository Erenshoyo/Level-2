# DBMS Part 2 — Revision Notes

---

## 1. Anomalies

Anomalies in databases refer to **inconsistencies or unexpected issues** that can occur during data manipulation or retrieval.

There are **three main types** of anomalies:

### Update Anomaly

- When the same data is stored in multiple rows, updating one place but not others leads to inconsistency.
- Example: If branch `dhaka` has address `rampura` repeated across multiple employee rows, updating the address in one row but missing others creates conflicting data.

### Delete Anomaly

- Deleting a record unintentionally removes other useful information.
- Example: If employee Hassan (id=4) is the only employee in branch `barisal`, deleting Hassan also loses all information about the `barisal` branch.

### Insert Anomaly

- Cannot insert data without having other unrelated data available.
- Example: A new employee `Kofil` (id=8) cannot be added without providing branch and address information, causing NULL/incomplete records.
- Also: Adding a new employee `John` (id=7) in `dhaka` with address `mirpur` introduces inconsistency — dhaka now has two different addresses (rampura and mirpur).

---

## 2. Normalization

Normalization is the process of organizing a database to **reduce redundancy and avoid anomalies**.

It has two main components:

- **Functional Dependency**
- **Normal Forms**

---

## 3. Functional Dependency

> The value of one attribute (or set of attributes) **uniquely determines** the value of another attribute in a table.

**Notation:** `X → Y` means "X determines Y"

**Rule:** A functional dependency `X → Y` exists **only if**, for each value of X, there is exactly **one** corresponding value of Y.

### Examples

| x   | y   |
| --- | --- |
| 1   | 0   |
| 2   | 3   |
| 3   | 5   |
| 4   | 7   |
| 2   | 3   |

- `X → Y` ✅ (same X always gives same Y)
- If last row was `2 → 5`, then `X → Y` ❌ (same X gives different Y)

### Real-world Example

| role       | name   |
| ---------- | ------ |
| manager    | mezba  |
| developer  | mir    |
| manager    | milton |
| instructor | firoz  |
| developer  | nahid  |
| manager    | toky   |

- `role → name` ❌ (manager maps to mezba, milton, and toky)
- `name → role` ✅ (each name uniquely identifies a role)

### Another Example (Employee Table)

| EmployeeID | EmployeeName | Department  |
| ---------- | ------------ | ----------- |
| 101        | John         | Engineering |
| 102        | Emily        | Marketing   |
| 103        | Sarah        | Engineering |
| 104        | Jack         | HR          |
| 105        | John         | Manager     |

- `id → name` ✅
- `name → department` ❌ (John appears in Engineering and Manager)

---

## 4. Normal Forms

> A set of rules applied to a database table to **reduce redundancy** and **avoid anomalies** by organizing it properly.

There are 4 normal forms covered: **0NF → 1NF → 2NF → 3NF**

---

### 1NF (First Normal Form)

**Rules:**

1. **Atomic Values** — Each cell must contain a single value (no comma-separated lists)
2. **Unique Column Names** — No duplicate column names
3. **Positional dependency of data** — Row order should not matter
4. **Same data type per column** — All values in a column must be of the same type
5. **Determine a Primary Key**

**Problem Example (violates 1NF):**

| Serial_No | Titles | Courses |
| --------- | ------ | ------- |
| 11        | Xkon   | CN, OS  |
| 12        | Ykon   | Java    |
| 13        | Zkon   | C++, C  |

Courses column has multiple values — violates atomicity.

**After 1NF:**

| Serial_No | Titles | Courses |
| --------- | ------ | ------- |
| 11        | Xkon   | CN      |
| 11        | Xkon   | OS      |
| 12        | Ykon   | Java    |
| 13        | Zkon   | C++     |
| 13        | Zkon   | C       |

---

### 2NF (Second Normal Form)

**Rules:**

1. Must be in **1NF**
2. **No partial dependency** — No non-key attribute should depend on only _part_ of a composite candidate key

**Problem Example:**

| stud_id | c_id | c_name  | Instructor    |
| ------- | ---- | ------- | ------------- |
| 101     | 1    | Math    | Prof. Smith   |
| 102     | 2    | Science | Prof. Johnson |
| 101     | 3    | History | Prof. Adams   |
| 103     | 1    | Math    | Prof. Smith   |

- Composite key: `{stud_id, c_id}`
- `c_id → c_name` (partial dependency — c_name depends only on c_id, not the full key)
- This violates 2NF

**After 2NF — Split into 3 tables:**

**Instructor Table:**
| c_id | Instructor |
|------|------------|
| 1 | Prof. Smith |
| 2 | Prof. Johnson |
| 3 | Prof. Adams |

**Course Table:**
| c_id | c_name |
|------|--------|
| 1 | Math |
| 2 | Science |
| 3 | History |

**StudentCourse Table:**
| stud_id | c_id |
|---------|------|
| 101 | 1 |
| 102 | 2 |
| 101 | 3 |
| 103 | 1 |

> **Lossless Decomposition** — Splitting tables in a way that no data is lost and original table can be reconstructed by joining.  
> **Lossy Decomposition** — Splitting that causes data loss (bad!).

---

### 3NF (Third Normal Form)

**Rules:**

1. Must be in **2NF**
2. **No transitive dependency**

**Transitive Dependency:** If `X → Y` and `Y → Z`, then `X → Z` (transitively) — this is NOT allowed in 3NF.

**Problem Example:**

| stud_Id | stud_name | stud_phone | state      | country | stud_age |
| ------- | --------- | ---------- | ---------- | ------- | -------- |
| 101     | John      | 12345679   | California | USA     | 20       |
| 102     | Emily     | 987654321  | Toronto    | CANADA  | 22       |
| 103     | Alex      | 555555555  | California | USA     | 21       |

- `student_Id → state`
- `state → country`
- Therefore `student_Id → country` (transitive dependency — violates 3NF)

**After 3NF — Split into 2 tables:**

**Student Table:**
| stud_Id | stud_name | stud_phone | state | stud_age |
|---------|-----------|------------|-------|---------|
| 101 | John | 12345679 | California | 20 |
| 102 | Emily | 987654321 | Toronto | 22 |
| 103 | Alex | 555555555 | California | 21 |

**Location Table:**
| state | country |
|-------|---------|
| California | USA |
| Toronto | CANADA |

---

## 5. Database Design Steps

1. **Determining Entities** — Identify the main objects/tables
2. **Determining Attributes** — Define columns for each entity
3. **Relationships Among Entities** — Define how tables relate
4. **Resolving Many-to-Many Relationships** — Use a junction table

---

## 6. Resolving Many-to-Many Relationships

A many-to-many relationship cannot be directly represented in a relational database. It must be resolved using a **Junction Table** (also called a bridge/associative table).

**Example: Students ↔ Courses**

A student can enroll in many courses, and a course can have many students.

**Student Table:**
| id | name |
|----|------|
| 101 | John |
| 102 | Emily |
| 103 | Sarah |

**Course Table:**
| c_id | name |
|------|------|
| 1 | Math |
| 2 | Science |
| 3 | History |

**Enrollment (Junction) Table:**
| s_id | c_id |
|------|------|
| 101 | 1 |
| 101 | 2 |
| 102 | 2 |
| 103 | 1 |
| 103 | 3 |

- The junction table holds **foreign keys** from both tables
- This resolves the many-to-many into two one-to-many relationships
- `{s_id, c_id}` acts as the **composite primary key** of the junction table

> ⚠️ Storing arrays like `c_ids = [1, 2]` in a column violates **1NF** (not atomic).

---

## 7. PostgreSQL

PostgreSQL is described as **"The World's Most Advanced Open Source Relational Database Management System"**

- It is a **DBMS** (Database Management System)
- More specifically, an **RDBMS** (Relational DBMS)

### Why PostgreSQL?

| Feature                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| **Open Source**         | Free to use, large community                  |
| **Scalability**         | Handles small to very large databases         |
| **Modern**              | Actively developed with latest features       |
| **Advanced Data Types** | JSON, arrays, custom types, etc.              |
| **ACID Compliance**     | Atomicity, Consistency, Isolation, Durability |
| **Indexing**            | Multiple index types for fast queries         |

---

## Quick Summary

| Concept               | Key Point                                              |
| --------------------- | ------------------------------------------------------ |
| Update Anomaly        | Same data in multiple places → inconsistency on update |
| Delete Anomaly        | Deleting a row loses unrelated important data          |
| Insert Anomaly        | Can't insert without unrelated required data           |
| Functional Dependency | X → Y means X uniquely determines Y                    |
| 1NF                   | Atomic values, unique columns, primary key             |
| 2NF                   | 1NF + no partial dependency on composite key           |
| 3NF                   | 2NF + no transitive dependency                         |
| Junction Table        | Resolves many-to-many relationships                    |
| PostgreSQL            | Open source RDBMS with ACID compliance                 |
