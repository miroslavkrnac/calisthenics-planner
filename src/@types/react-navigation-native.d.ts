import '@react-navigation/native';
import type { Routes } from '@navigation/navigation.types';

declare global {
	namespace ReactNavigation {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface RootParamList extends Routes {}
	}
}
