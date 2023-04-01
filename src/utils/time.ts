export const getWeekDay = (date: Date): string => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return days[date.getDay()];
};

export const getDate = (date = new Date(), locale = 'cs-Cz'): string =>
	date.toLocaleString(locale, {
		dateStyle: 'short',
	});

export const getTime = (date = new Date(), locale = 'cs-Cz'): string =>
	date.toLocaleString(locale, {
		timeStyle: 'short',
	});

export const getFullDate = (date: Date): string => `${getWeekDay(date)}, ${getDate(date)} ${getTime(date)}`;
