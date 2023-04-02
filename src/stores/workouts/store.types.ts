import type { WorkoutType } from '@components/Workout/Workout.types';

export interface WorkoutsStore {
	workouts: WorkoutType[];
	loading: boolean;

	createNewWorkout: (workout: WorkoutType) => Promise<void>;
	fetchWorkouts: () => Promise<void>;
	editWorkout: (workout: WorkoutType) => Promise<void>;
	deleteWorkout: (id: string) => Promise<void>;
}
