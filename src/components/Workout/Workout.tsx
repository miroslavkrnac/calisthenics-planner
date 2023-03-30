import React from 'react';
import { Icon } from '@components/Icon';
import type { OptionType } from '@components/SelectList';
import { SelectList } from '@components/SelectList';
import { View, StyleSheet } from 'react-native';
import { getExercises } from '@components/ExercisesList';
import { mapExerciseToOption } from '@components/Exercise';
import { palette } from '@colors/palette';
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
		workout: { exercises },
	} = useWorkout();

	return (
		<>
			<View>
				<SelectList
					title="Select exercise"
					trigger={ModalTrigger}
					options={getOptions}
					onSelect={addExercise}
				/>
			</View>

			<View>
				{exercises.map(({ id, name, reps }) => (
					<WorkoutExercise key={id} id={id} name={name} reps={reps} />
				))}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	addExercise: {
		color: palette.textPrimary,
	},
});
