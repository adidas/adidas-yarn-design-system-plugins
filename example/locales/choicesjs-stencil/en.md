This plugin is a CSS customization for the [`choicesjs-stencil`][choicesjs-stencil] Web Component.

It extends [adidas YARN Design System][yarn] library by adding the class `.choicesjs-stencil` as part of `.yarn` main class.

## Installation

It requires adidas YARN main library (YARN icons font dependency), as well as the Web Component and the [ChoicesJS][choicesjs] library.

```
npm install choices.js choicesjs-stencil @adidas/yarn-design-system @adidas/yarn-plugin-choicesjs-stencil
```

Load the stylesheet files and the dependencies in the HTML of your application:

```html
<!-- YARN core and icons -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn.css"/>
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn-icon.css"/>

<!-- plugin -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-plugin-choicesjs-stencil/dist/yarn-plugin-choicesjs-stencil.css"/>

<!-- plugin dependencies -->
<script src="node_modules/choices.js/public/assets/scripts/choices.min.js"></script>
<script src="node_modules/choicesjs-stencil/dist/choicesjsstencil.js"></script>
```

## Use of the plugin

The plugin can be used with or without YARN, but in both cases it requires main `.yarn` class in the top or in a parent element.

Just add the class `.choicesjs-stencil` to the Web Component.

```html
<div class="yarn">
  <choicesjs-stencil class="choicesjs-stencil" type="text"/>
</div>
```

Check how to work with the library in [ChoicesJS Stencil documentation][choicesjs-stencil].

[yarn]: https://github.com/adidas/adidas-yarn-design-system
[choicesjs]: https://github.com/jshjohnson/Choices
[choicesjs-stencil]: https://github.com/adidas/choicesjs-stencil
