# Example of TypeScript Project References Monorepo

This example will publish two packages on [NPM Registry](https://www.npmjs.com).

It shows how to configure a project with automated releases, changelogs, tests, etc., using the following tools:

* Language - [Typescript](https://www.typescriptlang.org/) with TSC (not [Babel](https://babeljs.io/))
* CI - [GitHub actions](https://docs.github.com/en/actions)
* Versioning / releases -[ ChangeSets](https://github.com/atlassian/changesets)
* Mono repo management- [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
* Package setup - [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html)
* Tests -[jest](https://jestjs.io/) with [ts-jest](https://www.npmjs.com/package/ts-jest)
* Lint - [eslint](https://eslint.org/)

The build will generate two binaries for each packages:
- [Commonjs](http://www.commonjs.org/)
- [ES6 Module](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)

Neither [Lerna](https://lerna.js.org/) or any bundler ([Webpack](https://webpack.js.org/), ...) are used.

## 🛡️ License

[MIT](LICENSE)

Copyright &copy; 2021 [atao60](https://github.com/atao60).

## 📜 Credits

* [A great TypeScript NPM module mono repo setup](https://medium.com/@jakeginnivan/a-great-typescript-npm-module-mono-repo-setup-e737937210), Jake Ginnivan, Jun 27, 2020, with its [Github repository](https://github.com/JakeGinnivan/example-project-structure).

* [How to set up a TypeScript monorepo and make Go to definition work](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559), Andrei Picus, May 28, 2019, with its [Github repository](https://github.com/NiGhTTraX/ts-monorepo).

* [Making TypeScript monorepos play nice with other tools](https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680), Andrei Picus, Jul 20, 2020

