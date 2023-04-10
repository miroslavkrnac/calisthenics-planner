import dayjs from 'dayjs';

export const DATE_TIME_FORMATS = {
	DATE_TIME_SYSTEM: 'DD.MM.YYYY HH:mm',
	DATE_SYSTEM: 'DD.MM.YYYY',
	DATE_CALENDAR: 'YYYY-MM-DD',
	TIME: 'HH:mm',
} as const;

export const isoString = (date: Date | string = new Date()): string => dayjs(date).toISOString();

export const format = (
	date: Date | string = new Date(),
	f: ValuesOf<typeof DATE_TIME_FORMATS> = DATE_TIME_FORMATS.DATE_SYSTEM,
): string => dayjs(date).format(f);

export const getFullDate = (date: Date | string = new Date()): string =>
	dayjs(date).format(DATE_TIME_FORMATS.DATE_TIME_SYSTEM);

export const getTime = (date: Date | string = new Date()): string => dayjs(date).format(DATE_TIME_FORMATS.TIME);

export const getCalendarDate = (date: Date | string = new Date()): string =>
	dayjs(date).format(DATE_TIME_FORMATS.DATE_CALENDAR);

export const addTimeToDate = (date: Date | string = new Date()): string =>
	dayjs(date).hour(dayjs().hour()).minute(dayjs().minute()).toISOString();

export const getCurrentWeekDates = (): string[] => {
	const startOfWeek = dayjs().startOf('week').add(1, 'day').format(DATE_TIME_FORMATS.DATE_CALENDAR);

	return Array.from({ length: 7 }, (_, i) =>
		dayjs(startOfWeek).add(i, 'day').format(DATE_TIME_FORMATS.DATE_CALENDAR),
	);
};

export const weekDaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
