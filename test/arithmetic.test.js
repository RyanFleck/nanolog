const { sum, product } = require('../src/arithmetic')

test('Sum function adds 1 and 2', () => { 
    expect(sum(1, 2)).toBe(3);
});

test('Product function multiplies 2 and 3', () => { 
    expect(product(2, 3)).toBe(6);
});