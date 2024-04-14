import { describe, it, expect } from 'vitest';
import charToNumber from './charToNumber';

describe('charToNumber', () => {
	it('converts lowercase a to 1', () => {
		expect(charToNumber('a')).toBe(1);
	});

	it('converts uppercase A to 1', () => {
		expect(charToNumber('A')).toBe(1);
	});

	it('converts lowercase z to 26', () => {
		expect(charToNumber('z')).toBe(26);
	});

	it('converts uppercase Z to 26', () => {
		expect(charToNumber('Z')).toBe(26);
	});

	it('throws an error if the input is not a single letter', () => {
		expect(() => charToNumber('1')).toThrow(
			'Input must be a single lowercase or uppercase letter',
		);
		expect(() => charToNumber('!')).toThrow(
			'Input must be a single lowercase or uppercase letter',
		);
		expect(() => charToNumber('ab')).toThrow(
			'Input must be a single lowercase or uppercase letter',
		);
	});
});
