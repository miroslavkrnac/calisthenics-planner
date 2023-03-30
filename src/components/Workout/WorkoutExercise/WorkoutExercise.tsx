import React from 'react';
import { Icon } from '@components/Icon';
import { View } from 'react-native';
import { Text } from '@components/Text';
import type { WorkoutExerciseProps } from './WorkoutExercise.types';
import { useWorkout } from '../context/useWorkout';

export const WorkoutExercise: React.FC<WorkoutExerciseProps> = ({ id, name, reps }) => {
	const { addRep, removeExercise, removeExerciseRep } = useWorkout();

	return (
		<View key={id}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 15,
					justifyContent: 'space-between',
				}}
			>
				<Text key={id} style={{ fontSize: 35 }}>
					{name}
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Icon
						provider="antDesign"
						name="addfolder"
						size={30}
						onPress={() => addRep(id)}
						style={{ color: 'white', marginLeft: 10 }}
					/>
					<Icon
						provider="antDesign"
						name="delete"
						size={30}
						onPress={() => removeExercise(id)}
						style={{ color: 'white', marginLeft: 10 }}
					/>
				</View>
			</View>
			<View>
				{reps.map(({ count, weight, id: repId }) => (
					<View key={repId} style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 25 }}>{weight} kg</Text>
						<Text style={{ fontSize: 25 }}>{count} reps</Text>
						<Icon
							provider="antDesign"
							name="delete"
							size={30}
							onPress={() => removeExerciseRep(id, repId)}
							style={{ color: 'white', marginLeft: 10 }}
						/>
					</View>
				))}
			</View>
		</View>
	);
};
