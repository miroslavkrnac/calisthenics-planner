import type { WorkoutType } from '@components/Workout/Workout.types';
import { getStorageItem } from '@utils/storage';
import { WORKOUTS_STORAGE_KEY } from './store.const';

export const getWorkouts = (): Promise<WorkoutType[]> => getStorageItem<WorkoutType[]>(WORKOUTS_STORAGE_KEY, []);
