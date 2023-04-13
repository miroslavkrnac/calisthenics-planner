export interface ExercisesStore {
	exercises: Exercise[];
	loading: boolean;

	createOrUpdateExercise: (exercise: Exercise) => Promise<void>;
	removeExercise: (id: string) => Promise<void>;
	fetchExercises: () => Promise<void>;
}

export type ExerciseType = 'timed' | 'weighted';

export interface Exercise {
	id: string;
	name: string;
	type: ExerciseType;
}
