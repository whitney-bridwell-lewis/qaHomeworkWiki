//First step is the keyword function followed by the name of the function then the arguments
function stringCheck(x) {
    return typeof x == 'string';
};
function numberCheck(x) {
    return typeof x == 'number';
};
function booleanCheck(x) {
    return typeof x == 'boolean';
};

//Now to write the tests

describe('value testing', () => {
    test('strings are strings', () => {
        expect(stringCheck('Functions are fun.')).toBeTruthy();
        expect(stringCheck(500)).toBeFalsy();
    });
    test('numbers should be numbers', () => {
        expect(numberCehck(10000)).toBeTruthy();
        expect(numberCheck(true)).toBeFalsy();
    }):
    test('boolean works', () => {
        expect(booleanCheck(5<10)).toBeTruthy();
        expect(booleanCheck('false')).toBeFalsy();
    });
});