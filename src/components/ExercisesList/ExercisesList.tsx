import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import { storeData } from '@utils/storage';
import { confirm } from '@utils/alert';
import { logError } from '@utils/log';
import { Exercise } from './Exercise';
import { getExercises } from './ExerciseList.utils';
import type { Exercise as ExerciseType } from './Exercise.types';

export const ExercisesList: React.FC = () => {
	const [exercises, setExercises] = useState<ExerciseType[]>([]);

	useEffect(() => {
		const fn = async (): Promise<void> => {
			const result = await getExercises();

			setExercises(result);
		};

		fn().catch(logError);
	}, []);

	const handleEdit = (id: string): void => {
		console.log('Edit', id);
	};

	const deleteExercise = async (id: string): Promise<void> => {
		try {
			const filtered = exercises.filter((exercise) => exercise.id !== id);

			await storeData('exercises', filtered);
			setExercises(filtered);
		} catch (error) {
			logError(error as Error);
		}
	};

	const handleDelete = (id: string): void => {
		confirm({
			title: 'Delete exercise',
			message: 'Are you sure you want to delete this exercise?',
			onConfirm: () => deleteExercise(id),
		});
	};

	return (
		<SafeAreaView>
			<FlatList
				data={exercises}
				renderItem={({ item: { name, id }, index }) => (
					<Exercise
						name={name}
						id={id}
						isFirst={index === 0}
						isLast={index === exercises.length - 1}
						onDelete={() => handleDelete(id)}
						onEdit={() => handleEdit(id)}
					/>
				)}
				keyExtractor={({ id }) => id}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
};
