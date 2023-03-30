import { randomString } from '@utils';
import type { WorkoutType } from './Workout.types';

export const getDefaultWorkout = (): WorkoutType => ({
	id: randomString(),
	startDate: new Date().toString(),
	endDate: undefined,
	exercises: [],
});
