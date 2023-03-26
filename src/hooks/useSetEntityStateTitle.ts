import type { RouteProp } from '@navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

export const useSetEntityStateTitle = (): void => {
	const { setOptions } = useNavigation();
	const { params, name } = useRoute<RouteProp<'exercise' | 'workout'>>();

	const isNew = params.id === 'new';

	useEffect(() => {
		setOptions({ title: isNew ? `New ${name}` : `Edit ${name}` });
	}, [params]);
};
