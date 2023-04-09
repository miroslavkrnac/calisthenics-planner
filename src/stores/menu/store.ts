import { INITIAL_ROUTE_NAME } from '@navigation/navigation.const';
import type { RoutesNames } from '@navigation/navigation.types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { MenuStore } from './store.types';

export const useMenuStore = create<MenuStore>()(
	immer((set) => ({
		activeRoute: INITIAL_ROUTE_NAME,

		setActiveRoute: (route: RoutesNames) => {
			set({ activeRoute: route });
		},
	})),
);
