const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const randomString = (length = 10, characters = CHARACTERS): string => {
	let result = '';

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
};

export const replaceDiacritics = (str: string): string => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const toLowerCase = (str: string): string => str.toLowerCase();

export const stringsInclude = (a: string, b: string): boolean => {
	const aLower = toLowerCase(replaceDiacritics(a));
	const bLower = toLowerCase(replaceDiacritics(b));

	return aLower.includes(bLower);
};
