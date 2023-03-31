import { randomString } from '@utils';
import type { WorkoutType } from './Workout.types';
import type { WorkoutRep } from './WorkoutExercise/WorkoutExercise.types';

export const createDefaultWorkout = (): WorkoutType => ({
	id: randomString(),
	startDate: new Date().toString(),
	endDate: undefined,
	exercises: [],
});

export const createDefaultRep = (): WorkoutRep => ({
	id: randomString(),
	weight: 0,
	count: 0,
});
