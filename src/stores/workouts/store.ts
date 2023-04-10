import type { WorkoutType } from '@components/Workout/Workout.types';
import { isoString, logError, storeData } from '@utils';
import { pushOrEdit } from '@utils/array';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { WORKOUTS_STORAGE_KEY } from './store.const';
import type { WorkoutsStore } from './store.types';
import { getWorkouts } from './store.utils';

export const useWorkoutsStore = create<WorkoutsStore>()(
	immer((set, get) => ({
		workouts: [],
		loading: false,

		createOrEditWorkout: async (workout: WorkoutType) => {
			set({ loading: true });

			const { workouts } = get();

			const newWorkouts = pushOrEdit(workouts, { ...workout, endDate: isoString() }, (w) => w.id === workout.id);

			try {
				await storeData(WORKOUTS_STORAGE_KEY, newWorkouts);
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}

			set({ workouts: newWorkouts, loading: false });
		},

		deleteWorkout: async (id: string) => {
			set({ loading: true });

			const { workouts } = get();
			const filteredWorkouts = workouts.filter((w) => w.id !== id);

			try {
				await storeData(WORKOUTS_STORAGE_KEY, filteredWorkouts);
				set({ workouts: filteredWorkouts, loading: false });
			} catch (error) {
				logError(error as Error);
				set({ loading: false });
			}
		},

		fetchWorkouts: async (): Promise<void> => {
			set({ loading: true });

			try {
				const workouts = await getWorkouts();

				set({ workouts, loading: false });
			} catch (e) {
				logError(e as Error);
				set({ loading: false });
			}
		},
	})),
);
