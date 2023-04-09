import type { RoutesNames } from '@navigation/navigation.types';

export interface MenuStore {
	activeRoute: RoutesNames;

	setActiveRoute: (route: RoutesNames) => void;
}
