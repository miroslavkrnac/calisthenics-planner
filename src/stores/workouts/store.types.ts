import type { WorkoutType } from '@components/Workout/Workout.types';

export interface WorkoutsStore {
	workouts: WorkoutType[];
	loading: boolean;

	createOrEditWorkout: (workout: WorkoutType) => Promise<void>;
	fetchWorkouts: () => Promise<void>;
	deleteWorkout: (id: string) => Promise<void>;
}
