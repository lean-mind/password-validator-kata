export function isValidPassword(password: string) {
	if (password.length < 8) {
		return false;
	}
	return true;
}
