export const getWeekDay = (date: Date): string => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return days[date.getDay()];
};

export const getDate = (date: Date): string =>
	date.toLocaleString('cs-Cz', {
		dateStyle: 'short',
	});

export const getTime = (date: Date): string =>
	date.toLocaleString('cs-Cz', {
		timeStyle: 'short',
	});

export const getFullDate = (date: Date): string => `${getWeekDay(date)}, ${getDate(date)} ${getTime(date)}`;
