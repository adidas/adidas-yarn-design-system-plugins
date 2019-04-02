export declare type FilterObjectFn = (value: any, key: string | number, obj: object) => boolean;
/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export declare function filterObject(obj: object, fn: FilterObjectFn): object;
/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
export declare function isDefined(value: any): boolean;
/**
 * Returns the list of values.
 *
 * @param value - Value or list of values.
 * @returns List of values.
 */
export declare function getValues(value: string | Array<string>): Array<string>;
