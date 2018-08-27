const { sum } = require('./funTest');

test('adds value', () => {
    expect(sum(1, 2)).toBe(3);
});
