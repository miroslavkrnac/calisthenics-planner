import React, { useState } from 'react';
import type { UpdateRepPayload, WorkoutProviderProps, WorkoutState } from './WorkoutProvider.types';
import type { WorkoutType } from '../Workout.types';
import { createDefaultRep } from '../Workout.utils';

export const WorkoutContext = React.createContext<WorkoutState | undefined>(undefined);

export const WorkoutProvider: FCC<WorkoutProviderProps> = ({ children, workout: workoutDefaultValue }) => {
	const [workout, setWorkout] = useState<WorkoutType>(workoutDefaultValue);

	const addExercise = (id: string, name: string): void => {
		if (workout.exercises.find((exercise) => exercise.id === id)) {
			return;
		}

		setWorkout((w) => ({
			...w,
			exercises: [...w.exercises, { id, name, reps: [createDefaultRep()] }],
		}));
	};

	const removeExercise = (exerciseId: string): void => {
		setWorkout((prev) => ({
			...prev,
			exercises: prev.exercises.filter((exercise) => exercise.id !== exerciseId),
		}));
	};

	const addRep = (exerciseId: string): void => {
		setWorkout((w) => ({
			...w,
			exercises: w.exercises.map((exercise) => {
				if (exercise.id === exerciseId) {
					return {
						...exercise,
						reps: [...exercise.reps, createDefaultRep()],
					};
				}

				return exercise;
			}),
		}));
	};

	const removeExerciseRep = (exerciseId: string, repId: string): void => {
		const hasOnlyOneRep = workout.exercises.find((exercise) => exercise.id === exerciseId)?.reps.length === 1;

		if (hasOnlyOneRep) {
			return;
		}

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

	const updateRep = ({ exerciseId, repId, weight, count }: UpdateRepPayload): void => {
		setWorkout((w) => ({
			...w,
			exercises: w.exercises.map((exercise) => {
				if (exercise.id === exerciseId) {
					return {
						...exercise,
						reps: exercise.reps.map((rep) => {
							if (rep.id === repId) {
								return {
									...rep,
									weight: weight ?? rep.weight,
									count: count ?? rep.count,
								};
							}

							return rep;
						}),
					};
				}

				return exercise;
			}),
		}));
	};

	return (
		<WorkoutContext.Provider value={{ workout, addRep, removeExercise, removeExerciseRep, addExercise, updateRep }}>
			{children}
		</WorkoutContext.Provider>
	);
};
