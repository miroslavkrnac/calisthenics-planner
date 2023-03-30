import type { WorkoutRep } from '../WorkoutExercise/WorkoutExercise.types';

export interface WorkoutRepProps extends WorkoutRep {
	exerciseId: string;
}
