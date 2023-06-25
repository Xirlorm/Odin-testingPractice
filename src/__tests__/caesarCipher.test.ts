'use strict';

import { caesarCipher } from '../caesarCipher';

test('Cipher "Middle Man." by 2:', () => {
	expect(caesarCipher("Middle Man.", 2)).toBe('Okffng Ocp.');
})

test('Cipher "Okffng Ocp." by 24:', () => {
	expect(caesarCipher("Okffng Ocp.", 24)).toBe('Middle Man.');
})
