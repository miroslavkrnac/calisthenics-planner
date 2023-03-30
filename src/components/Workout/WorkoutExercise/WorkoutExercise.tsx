import React from 'react';
import { Icon } from '@components/Icon';
import { View } from 'react-native';
import { Text } from '@components/Text';
import type { WorkoutExerciseProps } from './WorkoutExercise.types';
import { useWorkout } from '../context/useWorkout';
import { WorkoutRep } from '../WorkoutRep/WorkoutRep';

export const WorkoutExercise: React.FC<WorkoutExerciseProps> = ({ id, name, reps }) => {
	const { addRep, removeExercise } = useWorkout();

	return (
		<View>
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
					<WorkoutRep key={repId} weight={weight} count={count} exerciseId={id} id={repId} />
				))}
			</View>
		</View>
	);
};
