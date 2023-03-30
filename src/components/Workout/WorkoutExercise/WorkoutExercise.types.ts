export interface WorkoutRep {
	weight: number;
	count: number;
	id: string;
}

export interface WorkoutExercise {
	id: string;
	name: string;
	reps: WorkoutRep[];
}

export type WorkoutExerciseProps = WorkoutExercise;
