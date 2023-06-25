'use strict';

import { capitalize } from '../capitalize';

test('Capitalize "hello, World!":', () => {
	expect(capitalize('hello, World!')).toBe('Hello, World!');
})

test('Capitalize "Banana":', () => {
	expect(capitalize('Banana')).toBe('Banana');
})

test('Capitalize "@sterisk":', () => {
	expect(capitalize('@sterisk')).toBe('@sterisk');
})
