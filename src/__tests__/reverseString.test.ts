'use strict';

import { reverseString } from '../reverseString';

test('reverse "Banana"', () => {
	expect(reverseString('Banana')).toBe('ananaB');
})

test('reverse "World"', () => {
	expect(reverseString('World')).toBe('dlroW');
})

test('reverse "h3ll0"', () => {
	expect(reverseString('h3ll0')).toBe('0ll3h');
})
