import type { RouteProp as RoutePropNative } from '@react-navigation/native';

export type EntityRouteTypes = 'new' | 'edit';

export type Routes = {
	home: undefined;
	exercises: undefined;
	exercise: { id: string };
	workouts: undefined;
	workout: { id: string };
};

export type RoutesNames = keyof Routes;
export type RouteProp<T extends keyof Routes> = RoutePropNative<Routes, T>;
