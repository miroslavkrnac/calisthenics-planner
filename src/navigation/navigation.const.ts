import type { ParentRoutes, RoutesNames } from './navigation.types';

export const INITIAL_ROUTE_NAME = 'home';

export const routes: Record<ParentRoutes, { children: RoutesNames[] }> = {
	workouts: {
		children: ['workout'],
	},
	exercises: {
		children: ['exercise'],
	},
	home: {
		children: [],
	},
};
