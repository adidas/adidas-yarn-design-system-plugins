
// ChoicesJSStencil: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './choicesjsstencil.core.js';
import { COMPONENTS } from './choicesjsstencil.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
