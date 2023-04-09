import { Icon } from '@components/Icon';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import { TextInput } from '@components/TextInput';
import { useWorkout } from '../context/useWorkout';
import type { WorkoutRepProps } from './WorkoutRep.types';

export const WorkoutRep: React.FC<WorkoutRepProps> = ({ count, id, weight, exerciseId }) => {
	const { removeExerciseRep, updateRep } = useWorkout();

	return (
		<View style={styles.container}>
			<View style={styles.numerics}>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					value={count ? String(count) : ''}
					onChangeText={(c) => updateRep({ exerciseId, repId: id, count: Number(c) })}
				/>
				<Text style={styles.text}>x</Text>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					value={weight ? String(weight) : ''}
					onChangeText={(w) => updateRep({ exerciseId, repId: id, weight: Number(w) })}
				/>
				<Text style={styles.text}>kg</Text>
			</View>
			<Icon
				provider="antDesign"
				name="delete"
				size={20}
				onPress={() => removeExerciseRep(exerciseId, id)}
				style={styles.deleteIcon}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	deleteIcon: {
		marginLeft: 'auto',
		color: palette.textPrimary,
	},
	numerics: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		width: 50,
		backgroundColor: palette.backgroundPrimary,
		color: palette.textPrimary,
		fontSize: 22,
		textAlign: 'center',
		paddingLeft: 0,
	},
	text: {
		fontSize: 20,
		alignItems: 'center',
		paddingHorizontal: 5,
	},
});
