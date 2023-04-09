import { logError, storeData } from '@utils';
import { pushOrEdit } from '@utils/array';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { EXERCISES_STORAGE_KEY } from './store.const';
import type { Exercise, ExercisesStore } from './store.types';
import { getExercises } from './store.utils';

export const useExercisesStore = create<ExercisesStore>()(
	immer((set, get) => ({
		exercises: [],
		loading: false,

		removeExercise: async (id: string) => {
			set({ loading: true });

			const { exercises } = get();
			const filteredExercises = exercises.filter((e) => e.id !== id);

			try {
				await storeData(EXERCISES_STORAGE_KEY, filteredExercises);
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}

			set({ exercises: filteredExercises, loading: false });
		},

		createOrUpdateExercise: async (exercise: Exercise) => {
			set({ loading: true });

			const { exercises } = get();

			const newExercises = pushOrEdit(exercises, exercise, (e) => e.id === exercise.id);

			try {
				await storeData(EXERCISES_STORAGE_KEY, newExercises);
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}

			set({ exercises: newExercises, loading: false });
		},

		fetchExercises: async () => {
			set({ loading: true });

			try {
				const response = await getExercises();

				set({ exercises: response, loading: false });
			} catch (e) {
				logError(e as Error);

				set({ loading: false });
			}
		},
	})),
);
