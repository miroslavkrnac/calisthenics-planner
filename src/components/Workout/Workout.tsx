import React from 'react';
import { Icon } from '@components/Icon';
import type { OptionType } from '@components/SelectList';
import { SelectList } from '@components/SelectList';
import { View, StyleSheet, FlatList } from 'react-native';
import { getExercises } from '@components/ExercisesList';
import { mapExerciseToOption } from '@components/Exercise';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import { getFullDate } from '@utils';
import { WorkoutExercise } from './WorkoutExercise';
import { useWorkout } from './context/useWorkout';

const ModalTrigger: React.FC<any> = ({ onPress }) => (
	<Icon name="dumbbell" provider="fontAwesome5" size={30} onPress={onPress} style={styles.addExercise} />
);

const getOptions = async (): Promise<OptionType[]> => {
	const exercises = await getExercises();

	return exercises.map(mapExerciseToOption);
};

export const Workout: React.FC = () => {
	const {
		addExercise,
		workout: { exercises, startDate },
	} = useWorkout();

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{getFullDate(new Date(startDate))}</Text>
				<SelectList
					title="Select exercise"
					trigger={ModalTrigger}
					options={getOptions}
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
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 15,
	},
	titleText: {
		fontSize: 20,
	},
});
