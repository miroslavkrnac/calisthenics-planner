import type { WorkoutExercise } from './WorkoutExercise/WorkoutExercise.types';

export interface WorkoutType {
	id?: string;
	startDate?: string;
	endDate?: string;
	exercises: WorkoutExercise[];
}
