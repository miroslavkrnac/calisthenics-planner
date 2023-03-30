import { randomString } from '@utils';
import React, { useState } from 'react';
import type { WorkoutState } from './WorkoutProvider.types';
import type { WorkoutType } from '../Workout.types';

export const WorkoutContext = React.createContext<WorkoutState | undefined>(undefined);

export const WorkoutProvider: FCC = ({ children }) => {
	const [workout, setWorkout] = useState<WorkoutType>({
		id: randomString(),
		exercises: [],
	});

	const addExercise = (id: string, name: string): void => {
		setWorkout((w) => ({
			...w,
			exercises: [...w.exercises, { id, name, reps: [] }],
		}));
	};

	const addRep = (exerciseId: string): void => {
		setWorkout((w) => ({
			...w,
			exercises: w.exercises.map((exercise) => {
				if (exercise.id === exerciseId) {
					return {
						...exercise,
						reps: [...exercise.reps, { weight: 0, count: 0, id: randomString() }],
					};
				}

				return exercise;
			}),
		}));
	};

	const removeExercise = (exerciseId: string): void => {
		setWorkout((prev) => ({
			...prev,
			exercises: prev.exercises.filter((exercise) => exercise.id !== exerciseId),
		}));
	};

	const removeExerciseRep = (exerciseId: string, repId: string): void => {
		setWorkout((w) => ({
			...w,
			exercises: w.exercises.map((exercise) => {
				if (exercise.id === exerciseId) {
					return {
						...exercise,
						reps: exercise.reps.filter((rep) => rep.id !== repId),
					};
				}

				return exercise;
			}),
		}));
	};

	return (
		<WorkoutContext.Provider value={{ workout, addRep, removeExercise, removeExerciseRep, addExercise }}>
			{children}
		</WorkoutContext.Provider>
	);
};