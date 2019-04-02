/**
 * @link https://github.com/jshjohnson/Choices#classnames
 */
export declare type ClassNames = {
    containerOuter?: string;
    containerInner?: string;
    input?: string;
    inputCloned?: string;
    list?: string;
    listItems?: string;
    listSingle?: string;
    listDropdown?: string;
    item?: string;
    itemSelectable?: string;
    itemDisabled?: string;
    itemOption?: string;
    group?: string;
    groupHeading?: string;
    placeholder?: string;
    button?: string;
    activeState?: string;
    focusState?: string;
    openState?: string;
    disabledState?: string;
    highlightedState?: string;
    hiddenState?: string;
    flippedState?: string;
    loadingState?: string;
    noResults?: string;
    noChoices?: string;
};
/**
 * @link https://github.com/krisk/Fuse/tree/v2.7.4#weighted-search
 */
export declare type WeightedField = {
    [key: string]: any;
    weight: number;
};
/**
 * @link https://github.com/krisk/Fuse/tree/v2.7.4#options
 */
export declare type FuseOptions = {
    caseSensitive?: boolean;
    minMatchCharLength?: number;
    shouldSort?: boolean;
    tokenize?: boolean;
    tokenSeparator?: RegExp;
    matchAllTokens?: boolean;
    findAllMatches?: boolean;
    verbose?: boolean;
    id?: string;
    keys?: Array<string> | Array<object> | Array<WeightedField>;
    location?: number;
    threshold?: number;
    distance?: number;
    maxPatternLength?: number;
};
/**
 * @link https://github.com/jshjohnson/Choices#additemfilterfn
 */
export declare type ItemFilterFn = (value: string) => boolean;
/**
 * @link https://github.com/jshjohnson/Choices#noresultstext
 */
export declare type NoResultsTextFn = () => string;
/**
 * @link https://github.com/jshjohnson/Choices#nochoicestext
 */
export declare type NoChoicesTextFn = () => string;
/**
 * @link https://github.com/jshjohnson/Choices#additemtext
 */
export declare type AddItemTextFn = ((value: string) => string) | string;
/**
 * @link https://github.com/jshjohnson/Choices#maxitemtext
 */
export declare type MaxItemTextFn = (maxItemCount: number) => string;
/**
 * @link https://github.com/jshjohnson/Choices#sortfilter
 */
export declare type SortFn = (el1: any, el2: any) => number;
export declare type UniqueItemText = ((value: string) => string) | string;
/**
 * @link https://github.com/jshjohnson/Choices#callbackoninit
 */
export declare type OnInit = () => void;
/**
 * @link https://github.com/jshjohnson/Choices#callbackoncreatetemplates
 */
export declare type OnCreateTemplates = (template: any) => any;
/**
 * @link https://github.com/jshjohnson/Choices#configuration-options
 */
export interface IChoicesProps {
    silent?: boolean;
    items?: Array<any>;
    choices?: Array<any>;
    classNames?: ClassNames;
    renderChoiceLimit?: number;
    maxItemCount?: number;
    addItems?: boolean;
    removeItems?: boolean;
    removeItemButton?: boolean;
    editItems?: boolean;
    duplicateItemsAllowed?: boolean;
    delimiter?: string;
    paste?: boolean;
    searchEnabled?: boolean;
    searchChoices?: boolean;
    searchFields?: Array<any> | string;
    searchFloor?: number;
    searchResultLimit?: number;
    fuseOptions?: FuseOptions;
    position?: 'auto' | 'top' | 'bottom';
    resetScrollPosition?: boolean;
    addItemFilterFn?: ItemFilterFn;
    shouldSort?: boolean;
    shouldSortItems?: boolean;
    placeholder?: boolean | string;
    placeholderValue?: string;
    searchPlaceholderValue?: string;
    prependValue?: string;
    appendValue?: string;
    renderSelectedChoices?: 'always' | 'auto';
    loadingText?: string;
    noResultsText?: string | NoResultsTextFn;
    noChoicesText?: string | NoChoicesTextFn;
    itemSelectText?: string;
    addItemText?: string | AddItemTextFn;
    maxItemText?: string | MaxItemTextFn;
    sortFn?: SortFn;
    callbackOnInit?: OnInit;
    callbackOnCreateTemplates?: OnCreateTemplates;
}
/**
 * @link https://github.com/jshjohnson/Choices#ajaxfn
 */
export declare type AjaxFn = (callback: any) => void;
/**
 * @link https://github.com/jshjohnson/Choices#methods
 */
export interface IChoicesMethods {
    highlightItem(item: Element, runEvent?: boolean): any;
    unhighlightItem(item: Element): any;
    highlightAll(): any;
    unhighlightAll(): any;
    removeActiveItemsByValue(value: any): any;
    removeActiveItems(excludedId: any): any;
    removeHighlightedItems(): any;
    showDropdown(): any;
    hideDropdown(): any;
    getValue(valueOnly: any): any;
    setValue(args: any): any;
    setChoiceByValue(value: string | Array<string>): any;
    setChoices(choices: any, value: any, label: any, replaceChoices: any): any;
    clearChoices(): any;
    clearStore(): any;
    clearInput(): any;
    enable(): any;
    disable(): any;
    ajax(fn: AjaxFn): any;
}
