import { Icon } from '@components/Icon';
import React from 'react';
import { View } from 'react-native';
import { Text } from '@components/Text';
import { useWorkout } from '../context/useWorkout';
import type { WorkoutRepProps } from './WorkoutRep.types';

export const WorkoutRep: React.FC<WorkoutRepProps> = ({ count, id, weight, exerciseId }) => {
	const { removeExerciseRep } = useWorkout();

	return (
		<View style={{ flexDirection: 'row' }}>
			<Text style={{ fontSize: 25 }}>{weight} kg</Text>
			<Text style={{ fontSize: 25 }}>{count} reps</Text>
			<Icon
				provider="antDesign"
				name="delete"
				size={30}
				onPress={() => removeExerciseRep(exerciseId, id)}
				style={{ color: 'white', marginLeft: 10 }}
			/>
		</View>
	);
};
