import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { randomString } from '@utils/string';
import { getStorageItem, storeData } from '@utils/storage';
import { TextInput } from '@components/TextInput';

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
			const mergedExercises = [...exercises, { name: form.name, id: randomString() }];

			await storeData(STORAGE_KEY, mergedExercises);

			setForm(DEFAULT_STATE);
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
				<Button style={styles.saveButton} disabled={saving} onPress={handlePress} title="Save" />
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
