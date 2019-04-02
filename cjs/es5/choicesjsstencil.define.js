"use strict";
// ChoicesJSStencil: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var choicesjsstencil_core_js_1 = require("./choicesjsstencil.core.js");
var choicesjsstencil_components_js_1 = require("./choicesjsstencil.components.js");
function defineCustomElements(win, opts) {
    return choicesjsstencil_core_js_1.defineCustomElement(win, choicesjsstencil_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
