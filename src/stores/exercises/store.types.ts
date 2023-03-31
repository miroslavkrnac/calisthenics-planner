export interface ExercisesStore {
	exercises: Exercise[];
	loading: boolean;

	addExercise: (exercise: Exercise) => Promise<void>;
	removeExercise: (id: string) => Promise<void>;
	fetchExercises: () => Promise<Exercise[]>;
	editExercise: (exercise: Exercise) => Promise<void>;
}

export interface Exercise {
	id: string;
	name: string;
}
