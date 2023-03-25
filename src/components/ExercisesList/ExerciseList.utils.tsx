import { getStorageItem } from '@utils/storage';
import type { Exercise } from './Exercise.types';

export const getExercises = (): Promise<Exercise[]> => getStorageItem<Exercise[]>('exercises', []);
