import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/navigation.types';
import { Page } from '@components/Page';
import { Text } from '@components/Text';
import { ExerciseForm } from '@components/ExerciseForm';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { useExercisesStore } from '@stores/exercises/store';
import { logError, randomString } from '@utils';
import type { Exercise } from '@stores/exercises/store.types';

export const ExercisePage: React.FC = () => {
	const { params } = useRoute<RouteProp<'exercise'>>();
	const { exercises, createOrUpdateExercise } = useExercisesStore();
	const navigation = useNavigation();

	useSetEntityStateTitle();

	const isNew = params.id === 'new';
	const defaultExercise = { id: randomString(), name: '', type: 'weighted' } as const;
	const exercise = isNew ? defaultExercise : exercises.find(({ id }) => id === params.id);

	const handleSubmit = async (values: Exercise): Promise<void> => {
		try {
			await createOrUpdateExercise(values);

			navigation.navigate('exercises');
		} catch (e) {
			logError(e as Error);
		}
	};

	return (
		<Page>
			{exercise ? <ExerciseForm initialValues={exercise} onSubmit={handleSubmit} /> : <Text>Loading...</Text>}
		</Page>
	);
};
