import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import type { Theme } from 'react-native-calendars/src/types';
import { palette } from '@colors/palette';
import { useWorkoutsStore } from '@stores/workouts/store';
import { getCalendarDate, getTime, logError } from '@utils';
import dayjs from 'dayjs';
import { FlatList } from 'react-native';
import { Text } from '@components/Text';
import { mapWorkoutsForCalendar } from './WorkoutsSummary.utils';

dayjs().format('YYYY-MM-DD');

export const WorkoutsSummary: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<string>(getCalendarDate());
	const { workouts, fetchWorkouts } = useWorkoutsStore();

	const markedDates = mapWorkoutsForCalendar(workouts, selectedDate);
	const selectedWorkouts = workouts.filter(({ startDate }) => getCalendarDate(startDate) === selectedDate);

	useEffect(() => {
		fetchWorkouts().catch(logError);
	}, []);

	return (
		<>
			<Calendar
				firstDay={1}
				monthFormat="MMMM - yyyy"
				enableSwipeMonths
				theme={theme}
				hideExtraDays
				markedDates={markedDates}
				onDayPress={(day) => {
					setSelectedDate(day.dateString);
				}}
			/>
			<FlatList
				data={selectedWorkouts}
				renderItem={({ item: { startDate, endDate } }) => (
					<Text>
						{getTime(startDate)} - {getTime(endDate)}
					</Text>
				)}
				keyExtractor={({ id }) => id}
				showsVerticalScrollIndicator={false}
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
