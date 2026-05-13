SQL -> Structured Query Language
Data types-> Boolean, Numbers, Binary, Date/Time, JSON, Character, UUID, Array, XML

Numbers Data Type ->
SMALLINT - 2 bytes
INTEGER - 4 bytes
BIGINT - 8 bytes
REAL - 4 bytes (float type)
DOUBLE PRECISION - 8 bytes (float type)
NUMERIC / DECIMAL - Variable
SERIAL - 4 bytes

Character Data Type ->
CHAR - n bytes
VARCHAR - Variable
TEXT - Variable

Date Data Type ->
DATE - 1980-12-20
TIME - 14:30:00
TIMETZ - 14:30:00+06
TIMESTAMP - 2025-08-29 14:30:00
INTERVAL - 3 days 4 hours

UUID# SQL — Structured Query Language: Data Types

SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. One of its core features is a rich set of **data types** that define what kind of value a column can store.

---

## Table of Contents

1. [Boolean](#1-boolean)
2. [Numbers](#2-numbers)
3. [Character](#3-character)
4. [Date / Time](#4-date--time)
5. [Binary](#5-binary)
6. [JSON](#6-json)
7. [UUID](#7-uuid)
8. [Array](#8-array)
9. [XML](#9-xml)

---

## 1. Boolean

Stores a true/false value.

| Type    | Description             |
|---------|-------------------------|
| BOOLEAN | `TRUE`, `FALSE`, `NULL` |

```sql
CREATE TABLE feature_flags (
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(100),
    is_active BOOLEAN DEFAULT FALSE
);

INSERT INTO feature_flags (name, is_active)
VALUES ('dark_mode', TRUE),
       ('beta_ui',   FALSE);

SELECT * FROM feature_flags WHERE is_active = TRUE;
```

---

## 2. Numbers

### Integer Types

| Type      | Storage | Range                                         |
|-----------|---------|-----------------------------------------------|
| SMALLINT  | 2 bytes | -32,768 to 32,767                             |
| INTEGER   | 4 bytes | -2,147,483,648 to 2,147,483,647               |
| BIGINT    | 8 bytes | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| SERIAL    | 4 bytes | Auto-incrementing integer (1 to 2,147,483,647) |

### Floating-Point Types

| Type             | Storage  | Description              |
|------------------|----------|--------------------------|
| REAL             | 4 bytes  | Single-precision float   |
| DOUBLE PRECISION | 8 bytes  | Double-precision float   |
| NUMERIC/DECIMAL  | Variable | Exact precision (user-defined) |

```sql
CREATE TABLE products (
    id            SERIAL PRIMARY KEY,
    stock_qty     SMALLINT,
    total_sold    INTEGER,
    global_units  BIGINT,
    weight_kg     REAL,
    price         DOUBLE PRECISION,
    tax_rate      NUMERIC(5, 2)   -- up to 999.99
);

INSERT INTO products (stock_qty, total_sold, global_units, weight_kg, price, tax_rate)
VALUES (500, 12000, 9000000000, 1.35, 29.99, 7.50);

SELECT id, price * (1 + tax_rate / 100) AS price_with_tax
FROM products;
```

---

## 3. Character

| Type         | Storage  | Description                         |
|--------------|----------|-------------------------------------|
| CHAR(n)      | n bytes  | Fixed-length, padded with spaces    |
| VARCHAR(n)   | Variable | Variable-length with limit          |
| TEXT         | Variable | Unlimited variable-length string    |

```sql
CREATE TABLE users (
    id         SERIAL PRIMARY KEY,
    country_code CHAR(2),           -- Always 2 characters, e.g. 'BD'
    username   VARCHAR(50),         -- Up to 50 characters
    bio        TEXT                 -- Unlimited text
);

INSERT INTO users (country_code, username, bio)
VALUES ('BD', 'john_doe', 'Software engineer who loves databases and clean SQL.');

SELECT username, LENGTH(bio) AS bio_length
FROM users;
```

---

## 4. Date / Time

| Type      | Format / Example              | Description                          |
|-----------|-------------------------------|--------------------------------------|
| DATE      | `1980-12-20`                  | Calendar date (year, month, day)     |
| TIME      | `14:30:00`                    | Time of day (no timezone)            |
| TIMETZ    | `14:30:00+06`                 | Time of day with timezone offset     |
| TIMESTAMP | `2025-08-29 14:30:00`         | Date and time (no timezone)          |
| INTERVAL  | `3 days 4 hours`              | A span of time                       |

```sql
CREATE TABLE events (
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(100),
    event_date   DATE,
    start_time   TIME,
    start_timetz TIMETZ,
    created_at   TIMESTAMP DEFAULT NOW(),
    duration     INTERVAL
);

INSERT INTO events (title, event_date, start_time, start_timetz, duration)
VALUES (
    'Tech Conference',
    '1980-12-20',
    '14:30:00',
    '14:30:00+06',
    INTERVAL '3 days 4 hours'
);

-- Find events starting more than 2 hours from now
SELECT title, start_timetz
FROM events
WHERE start_timetz > NOW()::TIMETZ + INTERVAL '2 hours';
```

---

## 5. Binary

Stores raw binary data (files, images, encrypted content, etc.).

| Type  | Storage  | Description              |
|-------|----------|--------------------------|
| BYTEA | Variable | Variable-length binary string |

```sql
CREATE TABLE attachments (
    id        SERIAL PRIMARY KEY,
    filename  VARCHAR(255),
    mime_type VARCHAR(100),
    data      BYTEA
);

-- Insert binary data using the escape format
INSERT INTO attachments (filename, mime_type, data)
VALUES ('logo.png', 'image/png', '\x89504e470d0a1a0a');

-- Retrieve and check size
SELECT filename, octet_length(data) AS size_bytes
FROM attachments;
```

---

## 6. JSON

Stores JSON documents. `JSONB` stores data in a decomposed binary format for efficient querying.

| Type  | Description                                    |
|-------|------------------------------------------------|
| JSON  | Stores exact text representation               |
| JSONB | Stores binary-parsed JSON (supports indexing) |

```sql
CREATE TABLE orders (
    id         SERIAL PRIMARY KEY,
    customer   VARCHAR(100),
    metadata   JSONB
);

INSERT INTO orders (customer, metadata)
VALUES (
    'Alice',
    '{"status": "shipped", "items": [{"sku": "A1", "qty": 2}, {"sku": "B3", "qty": 1}], "address": {"city": "Dhaka", "zip": "1207"}}'
);

-- Query a nested JSON field
SELECT customer, metadata -> 'address' ->> 'city' AS city
FROM orders
WHERE metadata ->> 'status' = 'shipped';

-- Index for fast JSONB lookups
CREATE INDEX idx_orders_status ON orders USING GIN (metadata);
```

---

## 7. UUID

Universally Unique Identifier — a 128-bit value used as a globally unique primary key.

| Type | Storage | Description           |
|------|---------|-----------------------|
| UUID | 16 bytes | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |

```sql
-- Enable the uuid extension (PostgreSQL)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE sessions (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id    INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO sessions (user_id)
VALUES (42);

SELECT * FROM sessions;
-- id: e.g. 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
```

---

## 8. Array

Allows a column to store multiple values of the same type.

| Type         | Description                        |
|--------------|------------------------------------|
| type[]       | One-dimensional array              |
| type[][]     | Multi-dimensional array            |

```sql
CREATE TABLE students (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100),
    grades  INTEGER[],
    tags    TEXT[]
);

INSERT INTO students (name, grades, tags)
VALUES ('Bob', ARRAY[85, 92, 78, 95], ARRAY['math', 'science', 'honor-roll']);

-- Check if a tag exists
SELECT name FROM students
WHERE 'honor-roll' = ANY(tags);

-- Access individual element (1-indexed)
SELECT name, grades[1] AS first_grade FROM students;
```

---

## 9. XML

Stores XML-formatted data with optional well-formedness checking.

| Type | Description              |
|------|--------------------------|
| XML  | Well-formed XML document |

```sql
CREATE TABLE invoices (
    id      SERIAL PRIMARY KEY,
    content XML
);

INSERT INTO invoices (content)
VALUES (XMLPARSE(DOCUMENT '
  <invoice>
    <id>1001</id>
    <customer>Acme Corp</customer>
    <items>
      <item>
        <name>Widget A</name>
        <qty>10</qty>
        <price>5.99</price>
      </item>
    </items>
    <total>59.90</total>
  </invoice>
'));

-- Extract a value using XPath
SELECT xpath('//customer/text()', content) AS customer
FROM invoices;
```

---

## Quick Reference Summary

| Category   | Types                                                     |
|------------|-----------------------------------------------------------|
| Boolean    | `BOOLEAN`                                                 |
| Numbers    | `SMALLINT`, `INTEGER`, `BIGINT`, `REAL`, `DOUBLE PRECISION`, `NUMERIC`, `SERIAL` |
| Character  | `CHAR`, `VARCHAR`, `TEXT`                                 |
| Date/Time  | `DATE`, `TIME`, `TIMETZ`, `TIMESTAMP`, `INTERVAL`         |
| Binary     | `BYTEA`                                                   |
| JSON       | `JSON`, `JSONB`                                           |
| UUID       | `UUID`                                                    |
| Array      | `type[]`                                                  |
| XML        | `XML`                                                     |