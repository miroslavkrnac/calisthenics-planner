import React, { useEffect, useState } from 'react';
import { confirm } from '@utils/alert';
import { logError } from '@utils/log';
import { useNavigation } from '@react-navigation/native';
import { useExercisesStore } from '@stores/exercises/store';
import { TextInput } from '@components/TextInput';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { stringsInclude } from '@utils';
import { Exercise } from '../Exercise/Exercise';
import { Text } from '../Text';

export const ExercisesList: React.FC = () => {
	const { navigate } = useNavigation();
	const { exercises, loading, fetchExercises, removeExercise } = useExercisesStore();

	const [term, setTerm] = useState('');

	const filteredExercises = exercises.filter(({ name }) => {
		if (!term) {
			return true;
		}

		return stringsInclude(name, term);
	});

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
				<>
					<TextInput
						placeholder="Type exercise name to search"
						value={term}
						onChangeText={setTerm}
						style={{ marginBottom: 20 }}
					/>
					<KeyboardAwareFlatList
						data={filteredExercises}
						style={{ flex: 1 }}
						renderItem={({ item: { name, id }, index }) => (
							<Exercise
								name={name}
								id={id}
								isFirst={index === 0}
								isLast={index === filteredExercises.length - 1}
								onDelete={() => handleDelete(id)}
								onEdit={() => handleEdit(id)}
							/>
						)}
						keyExtractor={({ id }) => id}
						showsVerticalScrollIndicator={false}
					/>
				</>
			)}
		</>
	);
};
