# JWT — JSON Web Token

A small digital token used to verify a user's identity and safely share information between a server and a client.

![JWT Structure](image.png)

---

## Structure

A JWT is divided into three sections:

### 1. Header

| Encoded                                | Decoded                            |
| -------------------------------------- | ---------------------------------- |
| `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` | `{ "alg": "HS256", "typ": "JWT" }` |

### 2. Payload

| Encoded                                              | Decoded                                                                                                  |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UifQ` | `{ "id": "123456789", "name": "John Doe", "email": "john@doe.com", "role": "admin", "iat": 1516239022 }` |

### 3. Signature

| Encoded                                       | Decoded                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| `KMUFsIDTnFmyG3nMiGM6H9FNFUROl3whTsmqup-QV30` | `HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secretKey )` |

---

## Authentication Flow

```
Client                    Server
  │                          │
  │──── Payload ────────────▶│ Authenticate
  │                          │ Generate JWT (using secret key)
  │◀────────────── JWT ───────│ Respond with JWT
  │                          │
```

## Generating a Token

```typescript
const jwtPayload = {
  id: user._id,
  userEmail: user.email,
  role: user.role,
};

const token = jwt.sign(jwtPayload, secret, {
  expiresIn: "1d",
});
```
