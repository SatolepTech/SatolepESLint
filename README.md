# Satolep ESLint

## Quais configurações estão inclusas?

- Configurações gerais de ESLint:
  - Plugin e parser d TypeScript;
  - Prettier;
  - Ordenação de imports;
  - Exclusão de imports desnecessários;
- ESLint para NextJS;
  - Plugin do React;
  - Plugin do NextJS;
- ESLint para React Native:
  - Plugin do React;
  - React Native Community;
- ESLint para NestJS.

## Setup

### NextJS

Install dependencies:
```
yarn add -D eslint eslint-config-next @satolep/eslint
```
Inside `.eslintrc`
```
{
  "extends": [
    "./node_modules/@satolep/eslint/next", 
    "next/core-web-vitals"
  ]
}

```

### NestJS

Install dependencies:
```
yarn add -D eslint @satolep/eslint
```
Inside `.eslintrc`
```
{
  "extends": "./node_modules/@satolep/eslint/nest"
}
```

### React Native

Install dependencies:
```
yarn add -D eslint @satolep/eslint
```
Inside `.eslintrc`
```
{
  "extends": "./node_modules/@satolep/eslint/react-native"
}
```
