'use strict';

export function reverseString(str: string):string {
	let reverse = '';

	for (let i = str.length - 1; i >= 0; i--)
		reverse += str[i];

	return reverse;
}
