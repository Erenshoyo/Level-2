# DBMS Part 4 — SQL Statements & Functions

---

## 1. ALTER Statement

The `ALTER` statement is used to **modify an existing table structure**.

### What You Can Do with ALTER

- Rename table
- Add column
- Drop column
- Rename column
- Change data type
- Set default value
- Add / Drop constraints

### Syntax

```sql
ALTER TABLE table_name
action;
```

### Examples

**Add a column**
```sql
ALTER TABLE employee
ADD dob DATE;
```

**Drop a column**
```sql
ALTER TABLE employee
DROP COLUMN dob;
```

**Rename a column**
```sql
ALTER TABLE employee
RENAME COLUMN name TO full_name;
```

**Change data type**
```sql
ALTER TABLE employee
ALTER COLUMN name TYPE VARCHAR(25);
```

**Set a default value**
```sql
ALTER TABLE employee
ALTER COLUMN name SET DEFAULT 'Unknown';
```

---

## 2. SELECT Statement

The `SELECT` statement is used to **retrieve data from tables**.

> *Think of it as: "give me exactly what I ask for."*

### Syntax

```sql
SELECT column_name
FROM table_name;
```

---

## 3. SELECT Clauses — Core Power Features

These are the real tools that make `SELECT` useful.

| Clause     | Purpose                        |
|------------|--------------------------------|
| `FROM`     | Specifies the source table     |
| `WHERE`    | Filters rows                   |
| `ORDER BY` | Sorts data                     |
| `GROUP BY` | Groups rows                    |
| `HAVING`   | Filters groups                 |
| `DISTINCT` | Removes duplicate values       |
| `LIMIT`    | Limits the number of rows      |
| `OFFSET`   | Skips a number of rows         |
| `JOIN`     | Combines multiple tables       |

### Examples

**Filter rows**
```sql
SELECT * FROM employee
WHERE name = 'John';
```

**Sort results**
```sql
SELECT * FROM employee
ORDER BY name ASC;
```

**Limit results**
```sql
SELECT * FROM employee
LIMIT 5;
```

**Remove duplicates**
```sql
SELECT DISTINCT name FROM employee;
```

---

## 4. Scalar Functions

Scalar functions operate on a **single value** and return a **single value**.

> Example: Convert text case — `john` → `JOHN`

```sql
SELECT UPPER(name) FROM employee;
```

---

## 5. Aggregate Functions

Aggregate functions work on **multiple rows** and return **one result**.

> Example: Count total rows — `total = 2`

| Function  | Description           |
|-----------|-----------------------|
| `COUNT()` | Number of rows        |
| `SUM()`   | Total sum             |
| `AVG()`   | Average value         |
| `MIN()`   | Smallest value        |
| `MAX()`   | Largest value         |

```sql
SELECT COUNT(*) FROM employee;
```

---

## Quick Mental Model

| Concept       | Key Idea                              |
|---------------|---------------------------------------|
| `ALTER`       | Change table structure                |
| `SELECT`      | Get data                              |
| Clauses       | Refine and shape results              |
| Scalar fn.    | Single value → single output          |
| Aggregate fn. | Many rows → one output                |