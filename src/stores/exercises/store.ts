import { logError, storeData } from '@utils';
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

		addExercise: async (exercise: Exercise) => {
			const { exercises } = get();
			const exerciseExists = exercises.some((e) => e.name === exercise.name);

			if (exerciseExists) {
				return;
			}

			const newExercises = [...exercises, exercise];

			try {
				set({ loading: true });
				await storeData(EXERCISES_STORAGE_KEY, newExercises);
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}

			set({ exercises: newExercises, loading: false });
		},

		editExercise: async (exercise: Exercise) => {
			const { exercises } = get();
			const newExercises = exercises.map((e) => (e.id === exercise.id ? exercise : e));

			try {
				set({ loading: true });
				await storeData(EXERCISES_STORAGE_KEY, newExercises);
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}

			set({ exercises: newExercises, loading: false });
		},

		fetchExercises: async () => {
			set({ loading: true });

			const response = await getExercises();

			set({ exercises: response, loading: false });

			return response;
		},
	})),
);
