import React, { useState } from 'react';
import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { getStorageItem, storeData } from '../utils/storage';

type Exercises = string[];
const STORAGE_KEY = 'exercises';

export const ExerciseForm: React.FC = () => {
	const [form, setForm] = useState({ name: '' });
	const [saving, setSaving] = useState(false);

	const handleChange = (name: string) => (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
		setForm({ ...form, [name]: value });
	};

	const handlePress = async (): Promise<void> => {
		try {
			setSaving(true);

			const exercises = await getStorageItem<Exercises>(STORAGE_KEY, []);

			const mergedExercises = [...exercises, form.name];

			const response = storeData(STORAGE_KEY, mergedExercises);

			setSaving(false);
		} catch (e) {
			setSaving(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text>New exercise</Text>
			<View>
				<TextInput
					style={styles.input}
					value={form.name}
					onChange={handleChange('name')}
					placeholder="Insert exercise name"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button disabled={saving} onPress={handlePress} title="Save" color="#841584" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		position: 'relative',
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: 'lightgray',
		padding: 10,
		marginTop: 10,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		justifyContent: 'center',
	},
});
