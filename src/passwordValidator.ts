export function isValidPassword(password: string) {
	const containsLessThanEightCharacters = password.length < 8;
	if (containsLessThanEightCharacters) {
		return false;
	}
	if (!password.match(/\d/)) {
		return false;
	}
	return true;
}
