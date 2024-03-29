import type { WorkoutType } from '@components/Workout/Workout.types';
import type { RouteProp as RoutePropNative } from '@react-navigation/native';

export type EntityRouteTypes = 'new' | 'edit';

export type Routes = {
	home: undefined;
	exercises: undefined;
	exercise: { id: string };
	workouts: undefined;
	// @NOTE better
	workout: Partial<Omit<WorkoutType, 'id'>> & { id: string };
};

export type ParentRoutes = 'home' | 'exercises' | 'workouts';

export type RoutesNames = keyof Routes;
export type RouteProp<T extends keyof Routes> = RoutePropNative<Routes, T>;
