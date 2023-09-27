export function isValidPassword(password: string) {
	const containsLessThanEightCharacters = password.length < 8;
	if (containsLessThanEightCharacters) {
		return false;
	}
	const notContainsNumbers = !password.match(/\d/);
	if (notContainsNumbers) {
		return false;
	}
	const notContainsUpperCase = !password.match(/[A-Z]/);
	if (notContainsUpperCase) {
		return false;
	}
	const notContainsLowerCase = !password.match(/[a-z]/);
	if (notContainsLowerCase) {
		return false;
	}
	return true;
}
