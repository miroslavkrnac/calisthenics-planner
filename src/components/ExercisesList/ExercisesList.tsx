import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { getStorageItem } from '../../utils/storage';
import type { Exercise as ExerciseType } from './Exercise.types';
import { Exercise } from './Exercise';

export const ExercisesList: React.FC = () => {
	const [exercises, setExercises] = useState<ExerciseType[]>([]);

	useEffect(() => {
		const getExercises = async (): Promise<void> => {
			const result = await getStorageItem<ExerciseType[]>('exercises', []);

			setExercises(result);
		};

		getExercises().catch(console.error);
	}, []);

	return (
		<SafeAreaView>
			<FlatList
				data={exercises}
				renderItem={({ item: { name, id } }) => <Exercise name={name} id={id} />}
				keyExtractor={({ id }) => id}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
};
