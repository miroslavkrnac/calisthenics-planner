import { getWorkout } from '@stores/workouts/store.utils';
import { isoString, randomString } from '@utils';
import type { WorkoutType } from './Workout.types';
import type { WorkoutRep } from './WorkoutExercise/WorkoutExercise.types';

export const createDefaultWorkout = ({ startDate, endDate, exercises, id }: Partial<WorkoutType>): WorkoutType => ({
	startDate: isoString(startDate),
	endDate: endDate ? isoString(endDate) : undefined,
	id: !id || id === 'new' ? randomString() : id,
	exercises: exercises ?? [],
});

export const createDefaultRep = (): WorkoutRep => ({
	id: randomString(),
	weight: 0,
	count: 0,
});

export const getExistingOrDefaultWorkout = async (
	defaults: Partial<WorkoutType> & { id: string },
): Promise<WorkoutType> => {
	const workout = await getWorkout(defaults.id);

	return workout ?? createDefaultWorkout(defaults);
};
