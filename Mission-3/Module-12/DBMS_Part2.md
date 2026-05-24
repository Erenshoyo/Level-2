# DBMS Part 2: Revision Notes

## 1. Anomalies in Databases
**Definition:** Anomalies in databases refer to inconsistencies or unexpected issues that can occur during data manipulation or retrieval.

**Types of Anomalies:**
* **Update Anomalies:** Occur when updating a piece of duplicated data is not executed consistently across all records, leading to inconsistent data.
* **Delete Anomalies:** Occur when deleting a specific record inadvertently causes the loss of other unrelated, required information.
* **Insert Anomalies:** Occur when a new record cannot be inserted into a table without the presence of other unrelated attributes.

## 2. Functional Dependency
**Definition:** Functional dependency means that the value of one attribute (or a set of attributes) uniquely determines the value of another attribute(s) in a table.
* **Notation:** $X 
ightarrow Y$ (X functionally determines Y).
* **Rule:** A functional dependency $X 
ightarrow Y$ exists if, for each value of X, there is only one corresponding value of Y.

## 3. Normalization
**Definition:** A set of rules applied to a database table to reduce redundancy and avoid anomalies in data by organizing it properly.

### Normal Forms
* **1st Normal Form (1NF) Rules:**
    * **Atomic Values:** Columns cannot hold multiple values.
    * **Unique Column Names:** Each column must have a unique name.
    * **Positional dependency of data:** Data shouldn't depend on the row or column order.
    * **Consistent Data Types:** Columns should contain data that are of the same type.
    * **Primary Key:** Determine a primary key to uniquely identify records.
    
* **2nd Normal Form (2NF) Rules:**
    * Must be in 1NF.
    * **No Partial Dependency:** No non-key attribute should depend on part of a candidate key.
    * Utilizes **Lossless Decomposition** to break tables down safely without losing information (e.g., separating Course and Instructor data from Student data).

* **3rd Normal Form (3NF) Rules:**
    * Must be in 2NF.
    * **No Transitive Dependency:** Non-key attributes must not depend on other non-key attributes.
    * *Transitive Dependency Concept:* If $X 
ightarrow Y$ and $Y 
ightarrow Z$, then it creates a transitive dependency of $X 
ightarrow Z$. (e.g., `student_Id -> state` and `state -> country`, therefore `student_Id -> country`. This must be separated).

## 4. Database Design
**Key Steps in Design:**
1.  Determining Entities.
2.  Determining Attributes for Each Entity.
3.  Defining Relationships Among Entities.
4.  **Resolving Many-to-Many Relationships:**
    * Many-to-Many relationships (e.g., between `students` and `courses`) are resolved by creating a **Junction Table**. 
    * *Example:* Creating an `Enrollment` junction table that stores the combination of `s_id` (Student ID) and `c_id` (Course ID).

## 5. PostgreSQL (Postgres)
**Definition:** Postgres is recognized as "The World's Most Advanced Open Source Relational Database Management System" (RDBMS).

**Why Postgres? (Key Features):**
* **Open Source:** Free and community-driven.
* **Advanced Data Types:** Supports rich native data types.
* **Scalability:** Can handle large workloads efficiently.
* **ACID Compliance:** Ensures reliable transaction processing.
* **Modern Indexing:** Offers advanced indexing capabilities for performance.