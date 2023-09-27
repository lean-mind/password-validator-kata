export function isValidPassword(password: string) {
	return (
		isLengthValid(password) &&
		containsNumbers(password) &&
		containsUpperCase(password) &&
		containsLowerCase(password) &&
		containsUnderscore(password)
	);
}

function isLengthValid(password: string) {
	return password.length >= 8;
}

function containsNumbers(password: string) {
	return /\d/.test(password);
}

function containsUpperCase(password: string) {
	return /[A-Z]/.test(password);
}

function containsLowerCase(password: string) {
	return /[a-z]/.test(password);
}

function containsUnderscore(password: string) {
	return /_/.test(password);
}
