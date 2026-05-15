# Software Design Patterns

## MVC Architecture

### (M)odels
Includes queries, models, schemas, etc.

* **Examples:**
  * `student.model.ts`
  * `admin.model.ts`
  * `faculty.model.ts`

### (V)iews
UI, responsiveness, template engines.

* **Examples:**
  * **Template Engines:**
    * EJS
    * Handlebars
    * Pug
  * **Libraries/Frameworks:**
    * React
    * Vue
    * Angular

### (C)ontrollers
Request handlers.

* **Examples:**
  * `student.controller.ts`
  * `admin.controller.ts`
  * `faculty.controller.ts`

---

### Routes
* **Examples:**
  * `student.route.ts`
  * `admin.route.ts`
  * `faculty.route.ts`

### Interfaces
* **Examples:**
  * `student.interface.ts`
  * `admin.interface.ts`
  * `faculty.interface.ts`

---

## Modular Architecture

* **Student**
  * `student.interface.ts`
  * `student.route.ts`
  * `student.controller.ts`
  * `student.service.ts`

* **Admin**
  * `admin.interface.ts`
  * `admin.route.ts`
  * `admin.controller.ts`
  * `admin.service.ts`

* **Faculty**
  * `faculty.interface.ts`
  * `faculty.route.ts`
  * `faculty.controller.ts`
  * `faculty.service.ts`

### Benefits of Modular Architecture
* Scalability
* Maintainability
* Better Refactoring
* Efficient Development

---

## Key Principles

* **DRY:** **D**on't **R**epeat **Y**ourself.
* **FAT Model / THIN Controller:** The logical parts and core business rules reside in the models (or services), keeping the controllers lightweight.

**Data Flow:**
`Interface` ➔ `Schema` ➔ `Model` ➔ `DB Query`

---

## Request-Response Flow of the Modular Pattern

```text
          req               req                   req                 req
  Client ------> route.ts ------> controller.ts ------> service.ts -------> DB

  Client <----------------------- controller.ts <------ service.ts <------- DB
             res                         res                 res