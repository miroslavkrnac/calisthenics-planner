import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export const usePageFocus = (fn: VoidFunction, deps: AnyArray): void => {
	useFocusEffect(useCallback(fn, deps));
};
