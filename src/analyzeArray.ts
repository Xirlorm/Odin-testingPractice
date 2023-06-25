'use strict';

export function analyzeArray(array: number[]) {
	array = array.sort((a, b) => a - b);

	const average = array.reduce((a, b) => a + b, 0) / array.length;

	return {
		average,
		min: array[0],
		max: array[array.length - 1],
		length: array.length,
	};
}
