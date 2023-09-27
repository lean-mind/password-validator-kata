export function isValidPassword(password: string) {
	const isLengthValid = password.length >= 8;
	const containsNumbers = /\d/.test(password);
	const containsUpperCase = /[A-Z]/.test(password);
	const containsLowerCase = /[a-z]/.test(password);
	const containsUnderscore = /_/.test(password);

	return isLengthValid && containsNumbers && containsUpperCase && containsLowerCase && containsUnderscore;
}
