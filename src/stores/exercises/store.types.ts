export interface ExercisesStore {
	exercises: Exercise[];
	loading: boolean;

	saveExercise: (exercise: Exercise) => Promise<void>;
	removeExercise: (id: string) => Promise<void>;
	editExercise: (exercise: Exercise) => Promise<void>;
	fetchExercises: () => Promise<void>;
}

export interface Exercise {
	id: string;
	name: string;
}
