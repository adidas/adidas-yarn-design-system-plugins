![[](https://travis-ci.com/adidas/adidas-yarn-design-system-plugins)]![[](https://api.travis-ci.com/adidas/adidas-yarn-design-system-plugins.svg?branch=master)

# adidas YARN Design System plugins

Monorepository to manage all the adidas **YARN** Design System plugins for adidas only use.

Each plugin extends [adidas **YARN** Design System library][yarn-library] by adding the plugin main class as part of `.yarn` main class.

The available plugins are shown on the [**documentation page**][adidas-yarn-design-system-plugins-documentation].

## Use cases

The idea of the plugins is to add customizations for either third party libraries or non core components directly in **YARN** source code.

## Requirements and dependencies

This repository contains different plugins which are independent packages. It means that all these packages are published independently but managed all together. [Lerna][lerna] is the tool used to manage them.

[NodeJS/NPM][nodejs] are required to work with the repository.

## Installation and running

Install a specific package in production mode (installation of each configuration):

```
npm install PACKAGE_NAME[@VERSION]
```

The required dependencies of each package are listed in their own `package.json` file as either dependency or peer dependency.

Specific instructions about how to use the configurations are placed in the `README.md` file of each package.

## Development

### Installation

In development mode (dependencies of the main package):

```
npm install
npm run setup
```

### Build and lint

[Lerna][lerna] manages the scripts of the available packages all together:

- Build:
  ```
  npm run build
  ```
- Lint:
  ```
  npm run lint
  ```

_Note:_ all the packages must have these two scripts with their specific commands.

## Publish

[Lerna][lerna] is in charge of publishing the packages, it requires that every single package has to set the version accordingly.

```
npm run lerna:publish
```

## FAQ

### Maintainers

Check the contributor list and you will be welcome if you want to contribute.

### Contributing

Check out the [CONTRIBUTING.md](.github/CONTRIBUTING.md) to know how to contribute to this project.

## License and Software Information

© adidas AG

adidas AG publishes this software and accompanied documentation (if any) subject to the terms of the MIT license with the aim of helping the community with our tools and libraries which we think can be also useful for other people. You will find a copy of the MIT license in the root folder of this package. All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of adidas AG.

NOTICE: The software has been designed solely for the purpose of giving some CSS classes to customize the ChoicesJS Stencil Web Component with the adidas style. The software is NOT designed, tested or verified for productive use whatsoever, nor or for any use related to high risk environments, such as health care, highly or fully autonomous driving, power plants, or other critical infrastructures or services.

If you want to contact adidas regarding the software, you can mail us at _software.engineering@adidas.com_.

For further information open the [adidas terms and conditions][terms-and-conditions] page.

### License

[MIT](LICENSE)

[adidas-yarn-design-system-plugins-documentation]: http://adidas.github.io/adidas-yarn-design-system-plugins/
[lerna]: https://lernajs.io/
[nodejs]: https://nodejs.org/
[terms-and-conditions]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Terms-and-conditions
[yarn]: https://github.com/adidas/adidas-yarn-design-system
[yarn-library]: https://www.npmjs.com/package/@adidas/yarn-design-system
