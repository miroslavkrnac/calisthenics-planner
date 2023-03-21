import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { getStorageItem } from '../utils/storage';

const Exercise: React.FC<{ name: string }> = ({ name }) => (
	<View>
		<Text>{name}</Text>
	</View>
);

export const ExercisesList: React.FC = () => {
	const [exercises, setExercises] = useState<string[]>([]);

	useEffect(() => {
		const getExercises = async (): Promise<void> => {
			const result = await getStorageItem<string[]>('exercises', []);

			setExercises(result);
		};

		getExercises().catch(console.error);
	}, []);

	return (
		<SafeAreaView>
			<FlatList
				data={exercises}
				renderItem={({ item }) => <Exercise name={item} />}
				keyExtractor={(item) => item}
			/>
		</SafeAreaView>
	);
};
