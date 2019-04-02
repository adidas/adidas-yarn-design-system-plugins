export function filterObject(obj, fn) {
    return Object.keys(obj).reduce((accum, property) => {
        const value = obj[property];
        if (fn(value, property, obj)) {
            accum[property] = value;
        }
        return accum;
    }, {});
}
export function isDefined(value) {
    return typeof value !== 'undefined';
}
export function getValues(value) {
    return typeof value !== 'undefined'
        ? [].concat(typeof value === 'string' ? value.split(',') : value)
        : [];
}
