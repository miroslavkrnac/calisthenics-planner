import React, { useEffect } from 'react';
import { Icon } from '@components/Icon';
import { SelectList } from '@components/SelectList';
import { View, StyleSheet, FlatList } from 'react-native';
import { mapExerciseToOption } from '@components/Exercise';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import { getFullDate, logError } from '@utils';
import { useExercisesStore } from '@stores/exercises/store';
import type { SelectListProps } from '@components/SelectList/SelectList.types';
import { WorkoutExercise } from './WorkoutExercise';
import { useWorkout } from './context/useWorkout';

const ModalTrigger: SelectListProps['trigger'] = ({ onPress }) => (
	<Icon name="dumbbell" provider="fontAwesome5" size={25} onPress={onPress} style={styles.addExercise} />
);

export const Workout: React.FC = () => {
	const {
		addExercise,
		workout: { exercises, startDate },
	} = useWorkout();

	const { fetchExercises, exercises: allExercises } = useExercisesStore();

	useEffect(() => {
		fetchExercises().catch(logError);
	}, []);

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{getFullDate(new Date(startDate))}</Text>
				<SelectList
					title="Select exercise"
					trigger={ModalTrigger}
					options={allExercises.map(mapExerciseToOption)}
					onSelect={addExercise}
				/>
			</View>

			<FlatList
				data={exercises}
				renderItem={({ item: { name, id, reps } }) => (
					<WorkoutExercise key={id} id={id} name={name} reps={reps} />
				)}
				keyExtractor={({ id }) => id}
				showsVerticalScrollIndicator={false}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	addExercise: {
		color: palette.textPrimary,
		marginLeft: 'auto',
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 15,
		paddingBottom: 15,
		borderBottomColor: palette.borderSecondary,
		borderBottomWidth: 1,
	},
	titleText: {
		fontSize: 20,
	},
});
