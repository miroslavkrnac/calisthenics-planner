import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { confirm } from '@utils/alert';
import { logError } from '@utils/log';
import { useNavigation } from '@react-navigation/native';
import { useExercisesStore } from '@stores/exercises/store';
import { Exercise } from '../Exercise/Exercise';
import { Text } from '../Text';

export const ExercisesList: React.FC = () => {
	const { navigate } = useNavigation();
	const { exercises, loading, fetchExercises, removeExercise } = useExercisesStore();

	useEffect(() => {
		fetchExercises().catch(logError);
	}, []);

	const handleEdit = (id: string): void => {
		navigate('exercise', { id });
	};

	const handleDelete = (id: string): void => {
		confirm({
			title: 'Delete exercise',
			message: 'Are you sure you want to delete this exercise?',
			onConfirm: () => removeExercise(id),
		});
	};

	return (
		<>
			{loading ? (
				<Text>Loading...</Text>
			) : (
				<FlatList
					data={exercises}
					style={{ flex: 1 }}
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
			)}
		</>
	);
};
