import { getStorageItem, logError } from '@utils';
import type { Exercise } from './store.types';

export const getExercises = (): Promise<Exercise[]> => getStorageItem<Exercise[]>('exercises', []);

export const getExercise = async (id: string): Promise<Exercise | undefined> => {
	try {
		const allExercises = await getExercises();

		return allExercises.find((exercise) => exercise.id === id);
	} catch (e) {
		logError(e as Error);

		return undefined;
	}
};
