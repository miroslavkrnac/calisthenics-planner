import type { WorkoutType } from '../Workout.types';

export interface WorkoutState {
	workout: WorkoutType;

	addRep: (exerciseId: string) => void;
	removeExercise: (exerciseId: string) => void;
	removeExerciseRep: (exerciseId: string, repId: string) => void;
	addExercise: (exerciseId: string, name: string) => void;
	updateRep: (payload: UpdateRepPayload) => void;
}

export interface WorkoutProviderProps {
	workout: WorkoutType;
}

export interface UpdateRepPayload {
	exerciseId: string;
	repId: string;
	count?: number;
	weight?: number;
}
