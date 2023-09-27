import { isValidPassword } from '../passwordValidator';

describe('The password validator', () => {
	it('considers a password to be valid when it meets all requirements', () => {
		expect(isValidPassword('g0fi_G33ks')).toBe(true);
	});

	it('considers a password to be invalid when it has less than 8 characters', () => {
		expect(isValidPassword('Sp3gc_')).toBe(false);
	});
});
