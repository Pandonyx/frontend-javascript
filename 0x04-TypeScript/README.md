# TypeScript Fundamentals & Advanced Concepts – Project README

This repository walks through **12 incremental tasks** (Task 0 → Task 11) that introduce the most useful features of TypeScript—from basic types to namespaces, declaration‑merging, and nominal typing.

> **Goal:** Finish each task with **zero TypeScript errors**, understand *why* the pattern is useful, and be able to recognise it in real‑world code.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Common Setup](#common-setup)
4. [Task‑by‑Task Guide](#task-by-task-guide)
5. [Build & Run Commands](#build--run-commands)
6. [Key Take‑aways](#key-take-aways)
7. [Credits](#credits)

---

## Prerequisites

| Tool           | Recommended Version                             |
| -------------- | ----------------------------------------------- |
| **Node.js**    |  v18 or later                                   |
| **npm**        |  v9 or later                                    |
| **TypeScript** | Installed locally by each task’s `package.json` |

> **Tip:** Use `nvm` (Node Version Manager) so each project can pin its own Node version.

---

## Project Structure

```
0x04-TypeScript/
 ├── task_0/        # Interface + DOM rendering
 ├── task_1/        # Interface extension & functions
 ├── task_2/        # Advanced types (Director vs Teacher)
 ├── task_3/        # Ambient declaration files
 ├── task_4/        # Namespaces & declaration merging
 ├── task_5/        # Branding (nominal typing)
 └── shared-config/ # Starter webpack, tsconfig & eslint files
```

Each `task_X` folder is **stand‑alone**: copy the shared config files into it, implement the code for that task, then compile it in isolation.

---

## Common Setup

1. **Clone** the repo.
   2. `cd 0x04-TypeScript/task_<n>`
   3. `npm install` — installs TypeScript + (optionally) webpack.
2. Compile: `npm run build` (tasks 0‑3 use Webpack) **or** `npx tsc` (tasks 4‑5 use vanilla `tsc`).

---

## Task‑by‑Task Guide

| Task                            | Folder   | Highlights                                                                                    |               |
| ------------------------------- | -------- | --------------------------------------------------------------------------------------------- | ------------- |
| **0 – Student Table**           | `task_0` | Basic `interface`, typed array, DOM creation.                                                 |               |
| **1 – Teacher Interface**       | `task_1` | `readonly`, optional properties, index signatures.                                            |               |
| **2 – Directors**               | `task_1` | Interface **inheritance** (`extends`).                                                        |               |
| **3 – Utility Functions**       | `task_1` | Function‑type interface + implementation.                                                     |               |
| **4 – StudentClass**            | `task_1` |  Classes vs constructor/instance interfaces.                                                  |               |
| **5 – Advanced Types (Part 1)** | `task_2` | Literal union return types (Director / Teacher).                                              |               |
| **6 – Type Guards**             | `task_2` | Custom **type predicate** `isDirector`.                                                       |               |
| **7 – String Literal Types**    | `task_2` | Compile‑time whitelisting (\`'Math'                                                           | 'History'\`). |
| **8 – Ambient Namespaces**      | `task_3` | Bridging JS library `crud.js` with `.d.ts` typings.                                           |               |
| **9 – Namespaces & Merging**    | `task_4` | Splitting a single **namespace** over many files; augmenting `Teacher` interface per subject. |               |
| **10 – Main Runner**            | `task_4` | Instantiating classes, demonstrating merged types.                                            |               |
| **11 – Nominal Typing**         | `task_5` | Adding a hidden `brand` field to make types incompatible.                                     |               |

> **Build order matters** for tasks 4‑5. Use the provided `/// <reference path="…" />` lines to tell the compiler which file depends on which.

---

## Build & Run Commands

| Task Folder         | Compile                                                    | Bundle output                                   |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| `task_0` → `task_3` | `npm run build`                                            | `dist/bundle.js` (Webpack)                      |
| `task_4`, `task_5`  | `npx tsc` **or** add `"build": "tsc"` then `npm run build` | Compiled `.js` next to `.ts` files (no bundler) |

Run the resulting JS with `node dist/bundle.js` or open `index.html` for the DOM demo in Task 0.

---

## Key Take‑aways

1. **Interfaces are contracts.** Use `readonly`, optional (`?`) and index signatures to model real‑world data shapes.
2. **Classes vs Interfaces.** `implements` forces a class to honour the interface; constructor interfaces let you type “factory” functions.
3. **Type predicates** narrow union types safely (`emp is Director`).
4. **String‑literal unions** act as compile‑time enums—no magic strings at runtime.
5. **Ambient declaration files** (`.d.ts`) add type info to plain JS libraries, keeping your code `any`‑free.
6. **Namespace + declaration merging** are legacy but still appear in older codebases; learn to recognise and gradually migrate them to modules.
7. **Branding (nominal typing)** puts invisible stickers on look‑alike values (e.g., `USD` vs `EUR`) to prevent mix‑ups.
