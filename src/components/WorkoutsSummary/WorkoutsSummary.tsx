import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import type { Theme } from 'react-native-calendars/src/types';
import { palette } from '@colors/palette';

export const WorkoutsSummary: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<string>('');

	return (
		<>
			<Calendar
				firstDay={1}
				monthFormat="MMMM - yyyy"
				enableSwipeMonths
				theme={theme}
				hideExtraDays
				markedDates={{
					[selectedDate]: { selected: true },
				}}
				onDayPress={(day) => {
					setSelectedDate(day.dateString);
				}}
			/>
		</>
	);
};

const theme: Theme = {
	calendarBackground: palette.backgroundPrimary,
	monthTextColor: palette.textPrimary,
	selectedDayBackgroundColor: palette.primary,
	dayTextColor: palette.textPrimary,
};
