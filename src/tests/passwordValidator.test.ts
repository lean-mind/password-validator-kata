import { isValidPassword } from "../passwordValidator";


describe('The password validator', () => {
	it('considers a password to be valid when it meets all requirements', () => {

		expect(isValidPassword('g0fi_G33ks')).toBe(true);
	});
});
