const range = require('./gasTankRange');


test('test1', () => {
    expect(range(35, 1)).toBe(35)
});

test('test2', () => {
    expect(range(30, 2)).toBe(60)
});