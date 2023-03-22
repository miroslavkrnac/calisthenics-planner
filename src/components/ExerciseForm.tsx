import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { getStorageItem, storeData } from '../utils/storage';

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
			const exercises = await getStorageItem<Exercises>(STORAGE_KEY, []);

			const mergedExercises = [...exercises, form.name];

			await storeData(STORAGE_KEY, mergedExercises);

			setForm(DEFAULT_STATE);
		} finally {
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
					onChangeText={handleChange('name')}
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
