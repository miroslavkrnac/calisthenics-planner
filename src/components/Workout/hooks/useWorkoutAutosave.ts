import { useWorkoutsStore } from '@stores/workouts/store';
import { logError } from '@utils';
import { useEffect, useRef } from 'react';
import type { WorkoutType } from '../Workout.types';

const AUTOSAVE_INTERVAL = 5000;

export const useWorkoutAutosave = (workout?: WorkoutType): void => {
	const { createOrEditWorkout } = useWorkoutsStore();
	const workoutRef = useRef(workout);

	useEffect(() => {
		workoutRef.current = workout;

		return () => {
			workoutRef.current = undefined;
		};
	}, [JSON.stringify(workout)]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!workoutRef.current) {
				return;
			}

			createOrEditWorkout(workoutRef.current).catch(logError);
		}, AUTOSAVE_INTERVAL);

		return () => {
			clearInterval(interval);
		};
	}, []);
};
