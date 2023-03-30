import type { WorkoutExercise } from './WorkoutExercise/WorkoutExercise.types';

export interface WorkoutType {
	id?: string;
	startTime?: number;
	endTime?: number;
	exercises: WorkoutExercise[];
}
