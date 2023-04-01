import type { WorkoutType } from '@components/Workout/Workout.types';
import { getStorageItem } from '@utils/storage';

export const getWorkouts = (): Promise<WorkoutType[]> => getStorageItem<WorkoutType[]>('workouts', []);
