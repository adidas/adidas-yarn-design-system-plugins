import { getValues, filterObject, isDefined } from './utils';
export class ChoicesJSStencil {
    async highlightItem(item, runEvent) {
        this.choice.highlightItem(item, runEvent);
        return this;
    }
    async unhighlightItem(item) {
        this.choice.unhighlightItem(item);
        return this;
    }
    async highlightAll() {
        this.choice.highlightAll();
        return this;
    }
    async unhighlightAll() {
        this.choice.unhighlightAll();
        return this;
    }
    async removeActiveItemsByValue(value) {
        this.choice.removeActiveItemsByValue(value);
        return this;
    }
    async removeActiveItems(excludedId) {
        this.choice.removeActiveItems(excludedId);
        return this;
    }
    async removeHighlightedItems(runEvent) {
        this.choice.removeHighlightedItems(runEvent);
        return this;
    }
    async showDropdown(focusInput) {
        this.choice.showDropdown(focusInput);
        return this;
    }
    async hideDropdown(blurInput) {
        this.choice.hideDropdown(blurInput);
        return this;
    }
    async getValue(valueOnly) {
        return this.choice.getValue(valueOnly);
    }
    async setValue(args) {
        this.choice.setValue(args);
        return this;
    }
    async setChoiceByValue(value) {
        this.choice.setChoiceByValue(value);
        return this;
    }
    async setChoices(choices, value, label, replaceChoices) {
        this.choice.setChoices(choices, value, label, replaceChoices);
        return this;
    }
    async clearChoices() {
        this.choice.clearChoices();
        return this;
    }
    async clearStore() {
        this.choice.clearStore();
        return this;
    }
    async clearInput() {
        this.choice.clearInput();
        return this;
    }
    async enable() {
        this.choice.enable();
        return this;
    }
    async disable() {
        this.choice.disable();
        return this;
    }
    async ajax(fn) {
        this.choice.ajax(fn);
        return this;
    }
    componentDidLoad() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    componentDidUnload() {
        this.destroy();
    }
    render() {
        const attributes = {
            'data-selector': 'root',
            'name': this.name || null
        };
        this.destroy();
        switch (this.type) {
            case 'single':
                this.element =
                    h("select", Object.assign({}, attributes), this.value ? this.createSelectOptions(this.value) : null);
                break;
            case 'multiple':
                this.element =
                    h("select", Object.assign({ multiple: true }, attributes), this.value ? this.createSelectOptions(this.value) : null);
                break;
            case 'text':
            default:
                this.element =
                    h("input", Object.assign({ type: "text", value: this.value }, attributes));
                break;
        }
        return this.element;
    }
    init() {
        const props = {
            silent: this.silent,
            items: this.items,
            choices: this.choices,
            renderChoiceLimit: this.renderChoiceLimit,
            maxItemCount: this.maxItemCount,
            addItems: this.addItems,
            removeItems: this.removeItems,
            removeItemButton: this.removeItemButton,
            editItems: this.editItems,
            duplicateItemsAllowed: this.duplicateItemsAllowed,
            delimiter: this.delimiter,
            paste: this.paste,
            searchEnabled: this.searchEnabled,
            searchChoices: this.searchChoices,
            searchFields: this.searchFields,
            searchFloor: this.searchFloor,
            searchResultLimit: this.searchResultLimit,
            position: this.position,
            resetScrollPosition: this.resetScrollPosition,
            addItemFilterFn: this.addItemFilterFn,
            shouldSort: this.shouldSort,
            shouldSortItems: this.shouldSortItems,
            sortFn: this.sortFn,
            placeholder: true,
            placeholderValue: this.placeholderValue || (typeof this.placeholder === 'string' && this.placeholder) || ' ',
            searchPlaceholderValue: this.searchPlaceholderValue,
            prependValue: this.prependValue,
            appendValue: this.appendValue,
            renderSelectedChoices: this.renderSelectedChoices,
            loadingText: this.loadingText,
            noResultsText: this.noResultsText,
            noChoicesText: this.noChoicesText,
            itemSelectText: this.itemSelectText,
            addItemText: this.addItemText,
            maxItemText: this.maxItemText,
            uniqueItemText: this.uniqueItemText,
            classNames: this.classNames,
            fuseOptions: this.fuseOptions,
            callbackOnInit: this.callbackOnInit,
            callbackOnCreateTemplates: this.callbackOnCreateTemplates
        };
        const settings = filterObject(props, isDefined);
        this.choice = new Choices(this.root.querySelector('[data-selector="root"]'), settings);
    }
    destroy() {
        if (this.element) {
            this.element = null;
        }
        if (this.choice) {
            this.choice.destroy();
            this.choice = null;
        }
    }
    createSelectOptions(values) {
        return getValues(values).map((value) => h("option", { value: value }, value));
    }
    static get is() { return "choicesjs-stencil"; }
    static get properties() { return {
        "addItemFilterFn": {
            "type": "Any",
            "attr": "add-item-filter-fn"
        },
        "addItems": {
            "type": Boolean,
            "attr": "add-items"
        },
        "addItemText": {
            "type": String,
            "attr": "add-item-text"
        },
        "ajax": {
            "method": true
        },
        "appendValue": {
            "type": String,
            "attr": "append-value"
        },
        "callbackOnCreateTemplates": {
            "type": "Any",
            "attr": "callback-on-create-templates"
        },
        "callbackOnInit": {
            "type": "Any",
            "attr": "callback-on-init"
        },
        "choices": {
            "type": "Any",
            "attr": "choices"
        },
        "classNames": {
            "type": "Any",
            "attr": "class-names"
        },
        "clearChoices": {
            "method": true
        },
        "clearInput": {
            "method": true
        },
        "clearStore": {
            "method": true
        },
        "delimiter": {
            "type": String,
            "attr": "delimiter"
        },
        "disable": {
            "method": true
        },
        "duplicateItemsAllowed": {
            "type": Boolean,
            "attr": "duplicate-items-allowed"
        },
        "editItems": {
            "type": Boolean,
            "attr": "edit-items"
        },
        "enable": {
            "method": true
        },
        "fuseOptions": {
            "type": "Any",
            "attr": "fuse-options"
        },
        "getValue": {
            "method": true
        },
        "hideDropdown": {
            "method": true
        },
        "highlightAll": {
            "method": true
        },
        "highlightItem": {
            "method": true
        },
        "items": {
            "type": "Any",
            "attr": "items"
        },
        "itemSelectText": {
            "type": String,
            "attr": "item-select-text"
        },
        "loadingText": {
            "type": String,
            "attr": "loading-text"
        },
        "maxItemCount": {
            "type": Number,
            "attr": "max-item-count"
        },
        "maxItemText": {
            "type": String,
            "attr": "max-item-text"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "noChoicesText": {
            "type": String,
            "attr": "no-choices-text"
        },
        "noResultsText": {
            "type": String,
            "attr": "no-results-text"
        },
        "passedElement": {
            "elementRef": true
        },
        "paste": {
            "type": Boolean,
            "attr": "paste"
        },
        "placeholder": {
            "type": "Any",
            "attr": "placeholder"
        },
        "placeholderValue": {
            "type": String,
            "attr": "placeholder-value"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "prependValue": {
            "type": String,
            "attr": "prepend-value"
        },
        "removeActiveItems": {
            "method": true
        },
        "removeActiveItemsByValue": {
            "method": true
        },
        "removeHighlightedItems": {
            "method": true
        },
        "removeItemButton": {
            "type": Boolean,
            "attr": "remove-item-button"
        },
        "removeItems": {
            "type": Boolean,
            "attr": "remove-items"
        },
        "renderChoiceLimit": {
            "type": Number,
            "attr": "render-choice-limit"
        },
        "renderSelectedChoices": {
            "type": String,
            "attr": "render-selected-choices"
        },
        "resetScrollPosition": {
            "type": Boolean,
            "attr": "reset-scroll-position"
        },
        "root": {
            "elementRef": true
        },
        "searchChoices": {
            "type": Boolean,
            "attr": "search-choices"
        },
        "searchEnabled": {
            "type": Boolean,
            "attr": "search-enabled"
        },
        "searchFields": {
            "type": String,
            "attr": "search-fields"
        },
        "searchFloor": {
            "type": Number,
            "attr": "search-floor"
        },
        "searchPlaceholderValue": {
            "type": String,
            "attr": "search-placeholder-value"
        },
        "searchResultLimit": {
            "type": Number,
            "attr": "search-result-limit"
        },
        "setChoiceByValue": {
            "method": true
        },
        "setChoices": {
            "method": true
        },
        "setValue": {
            "method": true
        },
        "shouldSort": {
            "type": Boolean,
            "attr": "should-sort"
        },
        "shouldSortItems": {
            "type": Boolean,
            "attr": "should-sort-items"
        },
        "showDropdown": {
            "method": true
        },
        "silent": {
            "type": Boolean,
            "attr": "silent"
        },
        "sortFn": {
            "type": "Any",
            "attr": "sort-fn"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "unhighlightAll": {
            "method": true
        },
        "unhighlightItem": {
            "method": true
        },
        "uniqueItemText": {
            "type": String,
            "attr": "unique-item-text"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "addItem",
            "method": "addItemEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "removeItem",
            "method": "removeItemEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "highlightItem",
            "method": "highlightItemEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "unhighlightItem",
            "method": "unhighlightItemEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "choice",
            "method": "choiceEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "change",
            "method": "changeEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "search",
            "method": "searchEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "showDropdown",
            "method": "showDropdownEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "hideDropdown",
            "method": "hideDropdownEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:choicesjs-stencil:**/"; }
}
