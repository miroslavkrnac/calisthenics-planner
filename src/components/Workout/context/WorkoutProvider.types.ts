import type { WorkoutType } from '../Workout.types';

export interface WorkoutState {
	workout: WorkoutType;
	addRep: (exerciseId: string) => void;
	removeExercise: (exerciseId: string) => void;
	removeExerciseRep: (exerciseId: string, repId: string) => void;
	addExercise: (exerciseId: string, name: string) => void;
}
