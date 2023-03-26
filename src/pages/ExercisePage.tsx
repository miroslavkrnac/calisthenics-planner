import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/types';
import { getExercise } from '@components/ExercisesList/ExercisesList.utils';
import { logError } from '@utils/log';
import { Page } from '@components/Page';
import { Text } from '@components/Text';
import { ExerciseForm } from '@components/ExerciseForm';
import type { Exercise } from '@components/Exercise/Exercise.types';
import { randomString } from '@utils';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';

export const ExercisePage: React.FC = () => {
	const { params } = useRoute<RouteProp<'exercise'>>();
	const [loading, setLoading] = useState(true);
	const [exercise, setExercise] = useState<Exercise>();

	const isNew = params.id === 'new';

	useSetEntityStateTitle();

	useEffect(() => {
		setLoading(true);

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
