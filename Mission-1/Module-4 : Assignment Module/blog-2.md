# Why `unknown` is Safer than `any` in TypeScript

Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction

While handling data that are unpredictable, Typescript offers two options: `any` and `unknown`. By the sound of it, `any` might feel convenient, it silently disables type checking. Meanwhile, `unknown` accepts any value but forces to verify the type before using, making it a more _responsible_ choice.

## Body Paragraph

### Any

This type essentially tells the compiler to turn off type checking for the specific variable. When we use `any`, we are practically going back to use plain old Javascript.

It is considered a hole in our type safety net mainly due to the compiler trusting us blindly. Thus, it allows us to access properties, even calling those that might not even exist in the codebase. Which ultimately leads to applicaton being crushed in the process.

```typescript
let unpredictableData: any = "Hello, world!";

// TypeScript allows all of this, but it will crash at runtime!
unpredictableData.someMethodThatDoesNotExist();
unpredictableData[0].name;
unpredictableData();
```

### Unknown

`unknown` is the type-safe counterpart of `any`. It can also hold aboslutely any value just like `any`.

The main and most important difference it that "Typescript will not let us interact with an `unknown` variable until we prove what type it is" forcing us to write good quality and defensive course.

```typescript
let safeData: unknown = "Hello, world!";

// TypeScript ERROR: Object is of type 'unknown'.
safeData.toUpperCase();
```

To solve that specific erroe, we use Type Narrowing.

### Type Narrowing

Type narrowing is the process of taking a broad or uncertain type and using logic to narrow it down to a more specific, predictable type.

We achieve this by using _Type Guards_-standard JavaScript checks like `typeof`, `instanceof`, `in` etc. When Typescript sees these checks, it "narrows" the type inside that specific block of code.

```typescript
function processData(data: unknown) {
  // At this point, 'data' is unknown. We can't do much with it.

  if (typeof data === "string") {
    // TypeScript has narrowed 'data' to a string in this block.
    // It is now perfectly safe to use string methods.
    console.log(data.toUpperCase());
  } else if (Array.isArray(data)) {
    // TypeScript has narrowed 'data' to an array here.
    console.log(data.length);
  } else {
    // If it's neither, we can handle the fallback safely.
    console.log("Data is of an unsupported type.");
  }
}
```

## Conclusion

By using `unknown` combined with type narrowing, we maintian the flexibility needed for unpredictable data without sacrificing the strict safety guarantees that make Typescript so powerful.
