import React, { useEffect, useState } from 'react';
import { Form } from '@components/Form';
import { TextInput } from '@components/TextInput';
import { useNavigation } from '@react-navigation/native';
import type { Exercise } from '@stores/exercises/store.types';
import { PageHeaderRightButton } from './Navigation';

interface ExerciseFormProps {
	initialValues: Exercise;
	onSubmit: (values: Exercise) => void;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ initialValues, onSubmit }) => {
	const [form, setForm] = useState(initialValues);
	const navigation = useNavigation();

	const handleSubmit = (): void => {
		if (!form.name.length) {
			return;
		}

		onSubmit(form);
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <PageHeaderRightButton title="Save" onPress={handleSubmit} />,
		});
	}, [navigation, form]);

	const handleChange = (name: string) => (value: string) => {
		setForm({ ...form, [name]: value });
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
