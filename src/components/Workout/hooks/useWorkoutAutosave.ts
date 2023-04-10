import { useWorkoutsStore } from '@stores/workouts/store';
import { isEqual, logError } from '@utils';
import { useEffect, useRef } from 'react';
import type { WorkoutType } from '../Workout.types';

const AUTOSAVE_INTERVAL = 10000;

export const useWorkoutAutosave = (workout?: WorkoutType): void => {
	const { createOrEditWorkout } = useWorkoutsStore();
	const workoutRef = useRef(workout);
	const isDirty = useRef(false);

	useEffect(() => {
		if (isEqual(workoutRef.current, workout)) {
			return undefined;
		}

		isDirty.current = true;
		workoutRef.current = workout;

		return () => {
			workoutRef.current = undefined;
		};
	}, [JSON.stringify(workout)]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!workoutRef.current || !isDirty.current) {
				return;
			}

			createOrEditWorkout(workoutRef.current)
				.then(() => {
					isDirty.current = false;
				})
				.catch(logError);
		}, AUTOSAVE_INTERVAL);

		return () => {
			clearInterval(interval);
		};
	}, []);
};
