import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import type { Theme } from 'react-native-calendars/src/types';
import { StyleSheet } from 'react-native';
import { palette } from '@colors/palette';
import { useWorkoutsStore } from '@stores/workouts/store';
import { addTimeToDate, isoString, logError } from '@utils';
import { mapWorkoutsForCalendar } from './WorkoutsSummary.utils';
import { WorkoutsSummaryList } from './WorkoutsSummaryList/WorkoutsSummaryList';

export const WorkoutsSummary: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<string>(isoString());
	const { workouts, fetchWorkouts } = useWorkoutsStore();

	const markedDates = mapWorkoutsForCalendar(workouts, selectedDate);

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
					setSelectedDate(addTimeToDate(day.dateString));
				}}
				style={styles.calendar}
			/>
			<WorkoutsSummaryList selectedDate={selectedDate} />
		</>
	);
};

const theme: Theme = {
	calendarBackground: palette.backgroundPrimary,
	monthTextColor: palette.textPrimary,
	selectedDayBackgroundColor: palette.primary,
	dayTextColor: palette.textPrimary,
};

const styles = StyleSheet.create({
	calendar: {
		marginBottom: 30,
	},
});
