# Middleware & Authorization in TypeScript

### A Comprehensive Guide

---

## Table of Contents

1. [What is Middleware?](#what-is-middleware)
2. [How Middleware Works](#how-middleware-works)
3. [Types of Middleware](#types-of-middleware)
4. [Why Middleware is Essential for Authorization](#why-middleware-is-essential-for-authorization)
5. [Building Authorization Middleware in TypeScript](#building-authorization-middleware-in-typescript)
6. [Role-Based Access Control (RBAC)](#role-based-access-control-rbac)
7. [Composing Middleware](#composing-middleware)
8. [Error Handling in Middleware](#error-handling-in-middleware)
9. [Real-World Architecture](#real-world-architecture)
10. [Best Practices](#best-practices)

---

## What is Middleware?

> **_My Note:_** Middleware works like a **middleman** — it sits between the client and your actual application logic.

**Middleware** is software that sits between a request and a response in the processing pipeline of an application. Think of it as a series of checkpoints or filters that every request must pass through before it reaches its final destination (a route handler or controller).

In web frameworks like **Express**, **Fastify**, or **NestJS**, middleware functions have access to:

- The **request** object (`req`)
- The **response** object (`res`)
- The **next** function (to pass control to the next middleware)

```
Client Request
     │
     ▼
┌─────────────┐
│  Middleware 1│  (e.g., Logging)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Middleware 2│  (e.g., Auth/Authorization)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Middleware 3│  (e.g., Rate Limiting)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Route Handler │  (e.g., GET /users)
└─────────────┘
       │
       ▼
  Client Response
```

The key power of middleware: **any layer can short-circuit the chain** and return a response early (e.g., `401 Unauthorized`).

---

## How Middleware Works

### Basic Middleware Signature (Express)

```typescript
import { Request, Response, NextFunction } from "express";

type MiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;
```

### A Minimal Example

```typescript
import express, { Request, Response, NextFunction } from "express";

const app = express();

// Middleware 1: Logger
const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Middleware 2: Simple Guard
const requireApiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    res.status(401).json({ error: "Invalid or missing API key" });
    return; // Stop — do NOT call next()
  }
  next(); // Valid key — proceed
};

// Route handler (only reached if both middleware pass)
app.get("/data", logger, requireApiKey, (req: Request, res: Response) => {
  res.json({ data: "sensitive information" });
});

app.listen(3000);
```

> **Key Rule:** Call `next()` to continue, or send a response to stop. Never do both.

---

## Types of Middleware

| Type                  | Purpose                              | Example               |
| --------------------- | ------------------------------------ | --------------------- |
| **Application-level** | Runs on every request                | Logging, CORS headers |
| **Router-level**      | Runs on a specific router            | Auth for `/api/*`     |
| **Error-handling**    | Catches errors from other middleware | Global error handler  |
| **Built-in**          | Provided by the framework            | `express.json()`      |
| **Third-party**       | External packages                    | `helmet`, `morgan`    |

### Built-in / Default Middleware

> **_My Note:_** Flow: `client → Server → Middleware → Routes`

Built-in middleware is provided by the framework out of the box. In Express, examples include `express.json()` for parsing JSON bodies and `express.static()` for serving files. The request flows from the client, hits the server, passes through this middleware layer, and then reaches your routes.

```
client → Server → Middleware (built-in) → Routes
```

### Custom Middleware

> **_My Note:_** Flow: `client → route.ts → Middleware → controller.ts → service.ts`
> Here middleware authorizes and validates the request, ensuring unauthorized requests cannot reach `controller.ts`. It uses `next()` to approve authorized requests. **Multiple middlewares can be chained.**

Custom middleware is what you write yourself to handle concerns like authentication, authorization, validation, and logging. In a layered architecture, the flow looks like this:

```
client → route.ts → Middleware → controller.ts → service.ts
```

The middleware layer intercepts the request **before** it reaches the controller, validating and authorizing it. Only if the request passes does it call `next()` to let it through.

And with **multiple middlewares chained**:

```
client → route.ts → middleware1 → middleware2 → middleware3 → controller.ts → service.ts
```

Each middleware in the chain must call `next()` to pass the request forward, or send a response to stop it dead. This is what makes chaining so powerful for layered security checks.

---

## Why Middleware is Essential for Authorization

Authorization answers: **"Does this authenticated user have permission to do this?"**

### The Problem Without Middleware

Without middleware, you'd repeat authorization logic inside every route handler:

```typescript
// ❌ BAD: Without middleware — duplicated logic everywhere
app.get("/admin/users", async (req: Request, res: Response) => {
  // Repeated in EVERY protected route 😱
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "No token" });
    return;
  }
  const user = verifyToken(token);
  if (!user) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
  if (user.role !== "admin") {
    res.status(403).json({ error: "Forbidden" });
    return;
  }

  // Finally... actual business logic
  const users = await getAllUsers();
  res.json(users);
});

app.delete("/admin/user/:id", async (req: Request, res: Response) => {
  // The same auth block AGAIN... 😩
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    /* ... */
  }
  // ...
});
```

This is a maintenance nightmare — **DRY (Don't Repeat Yourself)** is violated at every turn.

### The Solution: Authorization Middleware

```typescript
// ✅ GOOD: Authorization logic in one place — applied to all protected routes
app.use("/admin", authenticate, requireRole("admin"));

app.get("/admin/users", async (req: Request, res: Response) => {
  // Pure business logic — auth is already guaranteed ✅
  const users = await getAllUsers();
  res.json(users);
});

app.delete("/admin/user/:id", async (req: Request, res: Response) => {
  // Still no repeated auth logic ✅
  await deleteUser(req.params.id);
  res.status(204).send();
});
```

### Core Reasons Middleware is the Right Place for Authorization

1. **Single Responsibility** — Route handlers do business logic; middleware handles security.
2. **Centralized Security** — One place to audit, fix, and update auth rules.
3. **Reusability** — The same `authenticate` function protects hundreds of routes.
4. **Composability** — Chain different checks (auth → role → ownership).
5. **Fail-Safe** — A forgotten check in a handler won't expose data; middleware blocks it first.

---

## Building Authorization Middleware in TypeScript

### Step 1: Extend the Request Type

```typescript
// types/express.d.ts
import { JwtPayload } from "jsonwebtoken";

export interface AuthUser {
  id: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser; // Attached by auth middleware
    }
  }
}
```

### Step 2: Authentication Middleware (Verify Identity)

```typescript
// middleware/authenticate.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthUser } from "../types/express";

const JWT_SECRET = process.env.JWT_SECRET ?? "your-secret";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      error: "Unauthorized",
      message: "Missing or malformed Authorization header",
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    req.user = decoded; // Attach user to request
    next();
  } catch (err) {
    res.status(401).json({
      error: "Unauthorized",
      message: "Invalid or expired token",
    });
  }
};
```

### Step 3: Authorization Middleware (Verify Permission)

```typescript
// middleware/authorize.ts
import { Request, Response, NextFunction } from "express";
import { AuthUser } from "../types/express";

type Role = AuthUser["role"];

// Middleware factory: accepts allowed roles
export const requireRole = (...allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      // authenticate() must run before requireRole()
      res
        .status(401)
        .json({ error: "Unauthorized", message: "Not authenticated" });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        error: "Forbidden",
        message: `Requires one of the following roles: ${allowedRoles.join(", ")}`,
      });
      return;
    }

    next(); // User has the required role
  };
};
```

### Step 4: Apply to Routes

```typescript
// routes/index.ts
import express from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/authorize";

const router = express.Router();

// Public route — no middleware
router.get("/health", (req, res) => res.json({ status: "ok" }));

// Authenticated users only
router.get("/profile", authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Admins and editors only
router.get(
  "/posts/draft",
  authenticate,
  requireRole("admin", "editor"),
  (req, res) => {
    res.json({ drafts: [] });
  },
);

// Admins only
router.delete(
  "/admin/user/:id",
  authenticate,
  requireRole("admin"),
  async (req, res) => {
    // Safe to proceed — user is authenticated AND is an admin
    res.json({ deleted: req.params.id });
  },
);

export default router;
```

---

## Role-Based Access Control (RBAC)

For more sophisticated control, implement a full RBAC system:

```typescript
// rbac/permissions.ts
type Action = "read" | "write" | "delete" | "manage";
type Resource = "posts" | "users" | "comments" | "settings";

interface Permission {
  resource: Resource;
  actions: Action[];
}

// Define what each role can do
const rolePermissions: Record<string, Permission[]> = {
  admin: [
    { resource: "posts", actions: ["read", "write", "delete", "manage"] },
    { resource: "users", actions: ["read", "write", "delete", "manage"] },
    { resource: "settings", actions: ["read", "write", "manage"] },
  ],
  editor: [
    { resource: "posts", actions: ["read", "write"] },
    { resource: "comments", actions: ["read", "write", "delete"] },
  ],
  viewer: [
    { resource: "posts", actions: ["read"] },
    { resource: "comments", actions: ["read"] },
  ],
};

export const can = (
  role: string,
  action: Action,
  resource: Resource,
): boolean => {
  const permissions = rolePermissions[role] ?? [];
  return permissions.some(
    (p) => p.resource === resource && p.actions.includes(action),
  );
};
```

```typescript
// middleware/checkPermission.ts
import { Request, Response, NextFunction } from "express";
import { can } from "../rbac/permissions";

type Action = "read" | "write" | "delete" | "manage";
type Resource = "posts" | "users" | "comments" | "settings";

export const checkPermission = (action: Action, resource: Resource) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const role = req.user?.role;

    if (!role) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    if (!can(role, action, resource)) {
      res.status(403).json({
        error: "Forbidden",
        message: `Your role '${role}' cannot '${action}' on '${resource}'`,
      });
      return;
    }

    next();
  };
};

// Usage:
// router.delete("/posts/:id", authenticate, checkPermission("delete", "posts"), handler);
```

---

## Composing Middleware

Middleware chains are composable — combine them for layered security:

```typescript
// middleware/compose.ts
import { Request, Response, NextFunction } from "express";

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

// Utility: run multiple middlewares in sequence
export const compose = (...middlewares: Middleware[]): Middleware => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const run = (index: number): void => {
      if (index >= middlewares.length) {
        next();
        return;
      }
      middlewares[index](req, res, () => run(index + 1));
    };
    run(0);
  };
};

// Create named guard bundles for clarity
import { authenticate } from "./authenticate";
import { requireRole } from "./authorize";
import { rateLimiter } from "./rateLimiter";

export const adminGuard = compose(
  rateLimiter,
  authenticate,
  requireRole("admin"),
);
export const editorGuard = compose(
  authenticate,
  requireRole("admin", "editor"),
);
export const userGuard = compose(authenticate);

// Clean, readable route definitions:
// router.get("/admin/dashboard", adminGuard, dashboardHandler);
// router.post("/posts", editorGuard, createPostHandler);
// router.get("/profile", userGuard, profileHandler);
```

---

## Error Handling in Middleware

### Async Middleware Wrapper

Async errors are silently swallowed without a wrapper:

```typescript
// utils/asyncHandler.ts
import { Request, Response, NextFunction, RequestHandler } from "express";

// Wrap async middleware to forward errors to Express error handler
export const asyncHandler = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Usage:
// router.get("/secure", asyncHandler(authenticate), asyncHandler(handler));
```

### Global Error Handling Middleware

```typescript
// middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public code?: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

// Must have 4 parameters — Express identifies this as error middleware
export const globalErrorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction, // Must be declared even if unused
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.code ?? "ERROR",
      message: err.message,
    });
    return;
  }

  // Unexpected errors — don't leak details in production
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "An unexpected error occurred",
  });
};

// Register LAST in your app:
// app.use(globalErrorHandler);
```

---

## Real-World Architecture

Here's how a production Express + TypeScript app fits together:

```typescript
// app.ts
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { authenticate } from "./middleware/authenticate";
import { globalErrorHandler } from "./middleware/errorHandler";
import userRoutes from "./routes/users";
import adminRoutes from "./routes/admin";
import publicRoutes from "./routes/public";

const app = express();

// ── Security headers ─────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

// ── Request parsing ───────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));

// ── Rate limiting (global) ────────────────────────────────────────
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: { error: "Too many requests, please try again later" },
  }),
);

// ── Public routes (no auth required) ─────────────────────────────
app.use("/api/v1/public", publicRoutes);

// ── Protected routes (authentication required) ────────────────────
app.use("/api/v1/users", authenticate, userRoutes);
app.use("/api/v1/admin", authenticate, adminRoutes); // Role checks inside adminRoutes

// ── Global error handler (always last) ───────────────────────────
app.use(globalErrorHandler);

export default app;
```

---

## Best Practices

### 1. Authentication before Authorization

Always verify _who_ the user is before checking _what_ they can do.

```typescript
// ✅ Correct order
router.use(authenticate);     // Who are you?
router.use(requireRole(...)); // What can you do?
```

### 2. Least Privilege Principle

Grant the minimum permissions necessary.

```typescript
// ✅ Only admins can delete; editors can only write
router.delete("/:id", requireRole("admin"), deleteHandler);
router.put("/:id", requireRole("admin", "editor"), updateHandler);
```

### 3. Never Trust Client Input

Always re-verify on the server; never rely on what the client says its role is.

```typescript
// ✅ Role comes from the verified JWT, not req.body
const role = req.user.role; // Safe — set by authenticate middleware
// ❌ NEVER: const role = req.body.role; — client-supplied, untrustworthy
```

### 4. Use HTTPS Everywhere

Tokens in headers are only safe over TLS. In production, enforce HTTPS.

### 5. Keep Tokens Short-Lived

Use short JWT expiry with refresh token rotation:

```typescript
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, {
  expiresIn: "7d",
});
```

### 6. Log Authorization Failures

Failed auth attempts are security signals:

```typescript
export const requireRole =
  (...roles: Role[]) =>
  (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      console.warn(
        `[AUTHZ FAIL] User ${req.user?.id} tried to access ${req.path}`,
      );
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    next();
  };
```

---

## Summary

| Concept              | In One Line                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| **Middleware**       | A function that intercepts requests before they reach a route handler           |
| **Authentication**   | Verifying _who_ the user is (via JWT, session, API key)                         |
| **Authorization**    | Verifying _what_ the user is allowed to do (roles, permissions)                 |
| **Middleware Chain** | Sequential middleware that can pass control (`next()`) or block (send response) |
| **RBAC**             | Assigning permissions to roles, then roles to users                             |
| **Why Middleware?**  | Centralizes, reuses, and enforces security in a single layer                    |

> Middleware is not optional for authorization — it is the architectural pattern that makes authorization **maintainable, reusable, and reliable** at scale.

---

_Generated with TypeScript examples using Express.js | For use with Node.js 18+ and TypeScript 5+_
