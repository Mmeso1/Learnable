# Introduction into Typescript

## TASK

You are given a filterPersons function that filters users based on their type (user or admin). Your task is to:

Fix the typings for the filterPersons function so that:

It returns User[] when personType is 'user'.
It returns Admin[] when personType is 'admin'.
The function should accept partial User or Admin types based on the personType argument. For example:

If personType is 'user', the criteria argument should accept a partial User object.
If personType is 'admin', the criteria argument should accept a partial Admin object.
The criteria object should exclude the type field (i.e., you should not allow filtering by the type property).

## RUN COMMANDS

To run the file

- 1. ### Install Dependencies:
     Ensure you have Node.js and npm (or yarn) installed. Run the following command in your project directory:

```bash
npm install
```

- 2. Compile TypeScript: Compile the TypeScript code to JavaScript using the TypeScript compiler.

```bash
npx tsc filterPersons.tsx  // Replace filterPersons.tsx with your file name
```

- 3. Run JavaScript: Execute the compiled JavaScript file using Node.js:

```bash
node filterPersons.js   // Replace filterPersons.js with the compiled file name
```

# Type-Safe Filtering with TypeScript Overloads and Utility Types

This project demonstrates how to create a type-safe filtering function in TypeScript using function overloads, `Partial`, and `Omit` utility types. It provides a clear example of how to ensure type correctness while maintaining flexibility in function usage.

## Problem

When working with data in TypeScript, it's crucial to ensure type safety. We often need to filter collections of objects based on certain criteria. A common challenge is creating a filtering function that can handle different object types and various filtering criteria without sacrificing type safety.

## Solution

This project provides a `filterPersons` function that addresses this challenge. It uses TypeScript's function overloading functionality to define specific type signatures for filtering different types of people (`User` and `Admin` in this example). It also utilizes the `Partial` and `Omit` utility types to create flexible and type-safe filtering criteria.

## Key Concepts

### Function Overloads

Function overloading allows you to define multiple function signatures for the same function name. TypeScript uses the most specific signature that matches the provided arguments to determine the function's type and return type. This allows you to create specialized versions of a function for different use cases.

In this project, we define two specific overloads for `filterPersons`: one for filtering `User` objects and one for filtering `Admin` objects. We also provide a general overload that acts as a catch-all for other cases. This is essential for handling situations where the type of the person being filtered is not known at compile time (e.g., when it's stored in a variable).

### `Partial<T>`

The `Partial<T>` utility type makes all properties of the `T` interface optional. This is useful for defining flexible filtering criteria. In our case, `Partial<Omit<User, "type">>` allows filtering by any combination of `User` properties _except_ for the `type` property.

### `Omit<T, K>`

The `Omit<T, K>` utility type creates a new type by taking `T` and removing the properties specified by `K`. We use `Omit<User, "type">` to exclude the `type` property from the filtering criteria, as we don't want to filter by the type itself.

## Code Example

You can see the implementation of that in the filterPersons function in my filterPersons.tsx file
