'use strict';

export function caesarCipher(value: string, shiftFactor: number) {
	const a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0);
	const A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0);
	let cipher = '';

	for (let i = 0; i < value.length; i++) {
		let code = value.charCodeAt(i);

		if (code >= A && code <= Z)
			code = ((code - A + shiftFactor) % 26) + A;
		else if (code >= a && code <= z)
			code = ((code - a + shiftFactor) % 26) + a;
		
		cipher += String.fromCharCode(code);
	}

	return cipher;
}
