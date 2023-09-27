import { isValidPassword } from '../passwordValidator';

describe('The password validator', () => {
	it('considers a password to be valid when it meets all requirements', () => {
		expect(isValidPassword('g0fi_G33ks')).toBe(true);
	});

	it('considers a password to be invalid when it has less than 8 characters', () => {
		expect(isValidPassword('Sp3gc_')).toBe(false);
	});

	it('considers a password to be invalid when it does not contain numbers', () => {
		expect(isValidPassword('Lean_Mind')).toBe(false);
	});

	it('considers a password to be invalid when it does not contain upper case', () => {
		expect(isValidPassword('s3cret_source')).toBe(false);
	});

	it('considers a password to be invalid when it does not contain lower case', () => {
		expect(isValidPassword('TDD_3N_ACCION')).toBe(false);
	});
});
