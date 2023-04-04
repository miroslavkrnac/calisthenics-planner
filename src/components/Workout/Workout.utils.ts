import { isoString, randomString } from '@utils';
import type { CreateDefaultWorkoutPayload, WorkoutType } from './Workout.types';
import type { WorkoutRep } from './WorkoutExercise/WorkoutExercise.types';

export const createDefaultWorkout = ({ startDate }: CreateDefaultWorkoutPayload): WorkoutType => ({
	id: randomString(),
	startDate: isoString(startDate),
	endDate: undefined,
	exercises: [],
});

export const createDefaultRep = (): WorkoutRep => ({
	id: randomString(),
	weight: 0,
	count: 0,
});
