import React, { useEffect, useState } from 'react';
import { Form } from '@components/Form';
import { TextInput } from '@components/TextInput';
import { logError } from '@utils/log';
import { useNavigation } from '@react-navigation/native';
import { useExercisesStore } from '@stores/exercises/store';
import type { Exercise } from '@stores/exercises/store.types';
import { PageHeaderRightButton } from './Navigation';

interface ExerciseFormProps {
	initialValues: Exercise;
	isNew: boolean;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ initialValues, isNew }) => {
	const { editExercise, addExercise } = useExercisesStore();
	const [form, setForm] = useState(initialValues);
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <PageHeaderRightButton title={isNew ? 'Create' : 'Save'} onPress={handlePress} />,
		});
	}, [navigation, form]);

	const handleChange = (name: string) => (value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handlePress = async (): Promise<void> => {
		try {
			if (!form.name.length) {
				return;
			}

			isNew ? await addExercise(form) : await editExercise(form);

			navigation.navigate('exercises');
		} catch (e) {
			logError(e as Error);
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
		</Form>
	);
};
