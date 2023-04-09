import type { WorkoutType } from '@components/Workout/Workout.types';
import { getCalendarDate } from '@utils';
import type { MarkedDates } from 'react-native-calendars/src/types';

export const mapWorkoutsForCalendar = (workouts: WorkoutType[], selectedDate: string): MarkedDates => {
	const calendarSelectedDate = getCalendarDate(selectedDate);

	const mappedWorkouts: MarkedDates = {
		[calendarSelectedDate]: { selected: true },
	};

	workouts.forEach((workout) => {
		const { startDate } = workout;
		const calendarDate = getCalendarDate(startDate);

		mappedWorkouts[calendarDate] = {
			marked: true,
			selected: calendarDate === calendarSelectedDate,
		};
	});

	return mappedWorkouts;
};
