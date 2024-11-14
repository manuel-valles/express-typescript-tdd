# ExpressJS App with TypeScript and Test Driven Development

This is a NodeJS project with ExpressJS in TypeScript and developed by TDD.

## Setup

1. Create folder
2. Setup npm: `npm init -y`
3. Install ExpressJS: `npm i express`
4. Install TypeScript and Types for Express: `npm i -D typescript @types/express`
5. Create `src/index.ts` and the `.gitignore` file
6. Configure TypeScript: `npx tsc --init`, and uncomment some like `rootDir`, `outDir`,`noImplicitAny`, `strictNullChecks` and `strictFunctionTypes`
7. Add `nodemon` to the project: `npm i -D nodemon ts-node` (`ts-node` is a NodeJS interpreter for TypeScript)
8. Add scripts for build and start to [package.json](./package.json):

```json
"build": "tsc --build",
"start": "node ./dist/index.js",
"dev": "nodemon ./src/index.ts"
```

9. Configure ESLint: `npm init @eslint/config@latest`
10. Configure Prettier: `npm install --save-dev --save-exact prettier`
11. Combine Prettier and ESLint to turn off conflicts, and personally erroring unused imports: `npm i -D eslint-config-prettier eslint-plugin-unused-imports`
