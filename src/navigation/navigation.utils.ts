import { INITIAL_ROUTE_NAME, routes } from './navigation.const';
import type { ParentRoutes, RoutesNames } from './navigation.types';

const isParentRoute = (routeName: RoutesNames): routeName is ParentRoutes => routeName in routes;

const getChildrenRouteParent = (routeName: RoutesNames): ParentRoutes | null => {
	const parentRoute = Object.entries(routes).find(([, { children }]) => children.includes(routeName));

	return parentRoute ? (parentRoute[0] as ParentRoutes) : null;
};

export const getActiveRouteName = (focusedRoute?: string): ParentRoutes => {
	if (!focusedRoute) {
		return INITIAL_ROUTE_NAME;
	}

	const routeName = focusedRoute.split('-')[0] as RoutesNames;

	if (isParentRoute(routeName)) {
		return routeName;
	}

	const parentRoute = getChildrenRouteParent(routeName);

	return parentRoute ?? INITIAL_ROUTE_NAME;
};
