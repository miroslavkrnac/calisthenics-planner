import React from 'react';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/types';
import { Page } from '@components/Page';
import { Text } from '@components/Text';
import { ExerciseForm } from '@components/ExerciseForm';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { useExercisesStore } from '@stores/exercises/store';
import { randomString } from '@utils';

export const ExercisePage: React.FC = () => {
	const { params } = useRoute<RouteProp<'exercise'>>();
	const { exercises } = useExercisesStore();

	useSetEntityStateTitle();

	const isNew = params.id === 'new';
	const defaultExercise = { id: randomString(), name: '' };
	const exercise = isNew ? defaultExercise : exercises.find(({ id }) => id === params.id);

	return <Page>{exercise ? <ExerciseForm initialValues={exercise} isNew={isNew} /> : <Text>Loading...</Text>}</Page>;
};
