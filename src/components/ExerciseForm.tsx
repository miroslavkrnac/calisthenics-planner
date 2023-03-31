import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { TextInput } from '@components/TextInput';
import { logError } from '@utils/log';
import { useNavigation } from '@react-navigation/native';
import { useExercisesStore } from '@stores/exercises/store';
import type { Exercise } from '@stores/exercises/store.types';

interface ExerciseFormProps {
	initialValues: Exercise;
	isNew: boolean;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ initialValues, isNew }) => {
	const [form, setForm] = useState(initialValues);
	const [saving, setSaving] = useState(false);
	const { navigate } = useNavigation();
	const { editExercise, addExercise } = useExercisesStore();

	const handleChange = (name: string) => (value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handlePress = async (): Promise<void> => {
		try {
			if (!form.name.length) {
				return;
			}

			isNew ? await addExercise(form) : await editExercise(form);

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
