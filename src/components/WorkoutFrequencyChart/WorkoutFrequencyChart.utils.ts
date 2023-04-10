import type { WorkoutType } from '@components/Workout/Workout.types';
import { getCalendarDate, getCurrentWeekDates } from '@utils';

export const getCurrentWeekWorkoutsCount = (workouts: WorkoutType[]): number[] =>
	getCurrentWeekDates().map(
		(date) => workouts.filter((workout) => getCalendarDate(workout.startDate) === date).length,
	);
