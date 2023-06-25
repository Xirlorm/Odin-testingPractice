'use strict';

import calculator from '../calculator';

test('Add numbers', () => {
	expect(calculator.add(4, 7)).toEqual(11);
	expect(calculator.add(-10, 13)).toEqual(3);
})

test('Subtract numbers', () => {
	expect(calculator.subtract(4, 7)).toEqual(-3);
	expect(calculator.subtract(73, 13)).toEqual(60);
})

test('Multiply numbers', () => {
	expect(calculator.multiply(4, 7)).toEqual(28);
	expect(calculator.multiply(-2, 8)).toEqual(-16);
})

test('Divide numbers:', () => {
	expect(calculator.divide(4, 7)).toBeCloseTo(0.57);
	expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
})
