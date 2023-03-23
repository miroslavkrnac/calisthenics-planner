import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStorageItem, storeData } from '../utils/storage';
import { TextInput } from './TextInput';
import { Button } from './Button';

type Exercises = string[];
const STORAGE_KEY = 'exercises';

const DEFAULT_STATE = { name: '' };

export const ExerciseForm: React.FC = () => {
	const [form, setForm] = useState(DEFAULT_STATE);
	const [saving, setSaving] = useState(false);

	const handleChange = (name: string) => (value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handlePress = async (): Promise<void> => {
		try {
			if (!form.name.length) {
				return;
			}

			const exercises = await getStorageItem<Exercises>(STORAGE_KEY, []);

			const mergedExercises = [...exercises, form.name];

			await storeData(STORAGE_KEY, mergedExercises);

			setForm(DEFAULT_STATE);
		} finally {
			setSaving(false);
		}
	};

	return (
		<>
			<TextInput
				label="Name"
				value={form.name}
				onChangeText={handleChange('name')}
				placeholder="Insert exercise name"
			/>
			<View style={styles.buttonContainer}>
				<Button style={styles.saveButton} disabled={saving} onPress={handlePress} title="Save" />
			</View>
		</>
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
