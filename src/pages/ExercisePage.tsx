import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/types';
import { Page } from '@components/Page';
import { Text } from '@components/Text';
import { ExerciseForm } from '@components/ExerciseForm';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { useExercisesStore } from '@stores/exercises/store';
import { logError, randomString } from '@utils';
import type { Exercise } from '@stores/exercises/store.types';

export const ExercisePage: React.FC = () => {
	const { params } = useRoute<RouteProp<'exercise'>>();
	const { exercises, editExercise, saveExercise } = useExercisesStore();
	const navigation = useNavigation();

	useSetEntityStateTitle();

	const isNew = params.id === 'new';
	const defaultExercise = { id: randomString(), name: '' };
	const exercise = isNew ? defaultExercise : exercises.find(({ id }) => id === params.id);

	const handleSubmit = async (values: Exercise): Promise<void> => {
		try {
			isNew ? await saveExercise(values) : await editExercise(values);

			navigation.navigate('exercises');
		} catch (e) {
			logError(e as Error);
		}
	};

	return (
		<Page>
			{exercise ? (
				<ExerciseForm initialValues={exercise} isNew={isNew} onSubmit={handleSubmit} />
			) : (
				<Text>Loading...</Text>
			)}
		</Page>
	);
};
