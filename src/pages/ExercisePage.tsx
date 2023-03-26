import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/types';
import { getExercise } from '@components/ExercisesList/ExerciseList.utils';
import { logError } from '@utils/log';
import { Page } from '@components/Page';
import { Text } from '@components/Text';
import { ExerciseForm } from '@components/ExerciseForm';
import type { Exercise } from '@components/ExercisesList/Exercise.types';
import { randomString } from '@utils';

export const ExercisePage: React.FC = () => {
	const { setOptions } = useNavigation();
	const { params } = useRoute<RouteProp<'exercise'>>();

	const [loading, setLoading] = useState(true);
	const [exercise, setExercise] = useState<Exercise>();

	const isNew = !params?.id;

	useEffect(() => {
		setLoading(true);
		setOptions({ title: isNew ? 'New exercise' : 'Edit exercise' });

		const getStorageExercise = async (): Promise<void> => {
			if (isNew) {
				const defaultExercise = {
					name: '',
					id: randomString(),
				};

				setExercise(defaultExercise);
				setLoading(false);

				return;
			}

			const storageExercise = await getExercise(params!.id);

			setExercise(storageExercise);
			setLoading(false);
		};

		getStorageExercise().catch(logError);
	}, [params]);

	return (
		<Page>
			{exercise && !loading ? <ExerciseForm initialValues={exercise} isNew={isNew} /> : <Text>Loading...</Text>}
		</Page>
	);
};
