import type { WorkoutExercise } from './WorkoutExercise/WorkoutExercise.types';

export interface WorkoutType {
	id: string;
	startDate: string;
	endDate?: string;
	exercises: WorkoutExercise[];
}

export interface WorkoutProps {
	isNew: boolean;
	onSave: (workout: WorkoutType) => void;
}

export interface CreateDefaultWorkoutPayload {
	startDate?: string;
}
