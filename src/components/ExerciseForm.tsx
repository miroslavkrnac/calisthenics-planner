import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { getStorageItem, storeData } from '@utils/storage';
import { TextInput } from '@components/TextInput';
import { logError } from '@utils/log';
import { useNavigation } from '@react-navigation/native';
import type { Exercise } from './Exercise/Exercise.types';

interface ExerciseFormProps {
	initialValues: Exercise;
	isNew: boolean;
}

const STORAGE_KEY = 'exercises';

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ initialValues, isNew }) => {
	const [form, setForm] = useState(initialValues);
	const [saving, setSaving] = useState(false);
	const { navigate } = useNavigation();

	const handleChange = (name: string) => (value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handlePress = async (): Promise<void> => {
		try {
			if (!form.name.length) {
				return;
			}

			const exercises = await getStorageItem<Exercise[]>(STORAGE_KEY, []);
			const filteredExercises = exercises.filter((exercise) => exercise.id !== form.id);

			const mergedExercises = [...filteredExercises, form];

			await storeData(STORAGE_KEY, mergedExercises);

			navigate('exercises');
		} catch (e) {
			logError(e as Error);
		} finally {
			setSaving(false);
		}
	};

	return (
		<Form>
			<TextInput
				label="Name"
				value={form.name}
				onChangeText={handleChange('name')}
				placeholder="Insert exercise name"
			/>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.saveButton}
					disabled={saving}
					onPress={handlePress}
					title={isNew ? 'Create' : 'Save'}
				/>
			</View>
		</Form>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 20,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	saveButton: {
		width: 200,
		justifyContent: 'center',
		padding: 12,
		alignItems: 'center',
	},
});
