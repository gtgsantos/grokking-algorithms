const calculos = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(calculos.sum(1, 2)).toBe(3);
  expect(calculos.sub(1, 2)).toBe(-1);
});