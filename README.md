# Grocery app
A simple demo app of an online store where you can add products to the cart and also handle your favorite products.
## Technologies
- [Vue 3](https://vuejs.org) as JavaScript framework
- [Vite](https://vitejs.dev) to set the development environment
- [TypeScript](https://www.typescriptlang.org)
- [Pinia](https://pinia.vuejs.org/) as Vue Store for state managing
- [Vitest](https://vitest.dev/) for develop and run unit tests
- [Cypress](https://www.cypress.io/) for develop and run e2e tests
## Install dependencies
```bash
yarn
```
## Development server
```bash
yarn dev
```
## Build
```bash
yarn build
```
## Unit testss
```bash
yarn test:unit
```

## E2e tests
```bash
yarn test:e2e
```

## Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
