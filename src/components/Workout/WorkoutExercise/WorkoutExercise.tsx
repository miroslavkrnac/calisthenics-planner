import React from 'react';
import { Icon } from '@components/Icon';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuOptions,
	ContextMenuOption,
	ContextMenuHeader,
} from '@components/ContextMenu';
import { palette } from '@colors/palette';
import type { WorkoutExerciseProps } from './WorkoutExercise.types';
import { useWorkout } from '../context/useWorkout';
import { WorkoutRep } from '../WorkoutRep/WorkoutRep';

export const WorkoutExercise: React.FC<WorkoutExerciseProps> = ({ id, name, reps }) => {
	const { addRep, removeExercise } = useWorkout();

	return (
		<ContextMenu>
			<ContextMenuTrigger triggerOnLongPress>
				<View style={styles.container}>
					<View style={styles.headerContainer}>
						<Text key={id} style={styles.header}>
							{name}
						</Text>
						<Icon
							provider="antDesign"
							name="addfolder"
							size={20}
							onPress={() => addRep(id)}
							style={styles.addExerciseIcon}
						/>
					</View>
					<View style={styles.repsContainer}>
						{reps.map(({ count, weight, id: repId }) => (
							<WorkoutRep key={repId} weight={weight} count={count} exerciseId={id} id={repId} />
						))}
					</View>
				</View>
			</ContextMenuTrigger>
			<ContextMenuOptions>
				<ContextMenuHeader title="Actions" />
				<ContextMenuOption onSelect={() => removeExercise(id)} text="Delete" />
			</ContextMenuOptions>
		</ContextMenu>
	);
};

const styles = StyleSheet.create({
	addExerciseIcon: {
		marginLeft: 'auto',
		color: palette.textPrimary,
	},
	container: {
		marginBottom: 10,
	},
	header: {
		fontSize: 22,
		fontWeight: '500',
	},
	repsContainer: {
		borderBottomColor: palette.borderSecondary,
		borderBottomWidth: 1,
		paddingBottom: 10,
		paddingLeft: 12,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
});
