import React, { useEffect } from 'react';
import { SelectList } from '@components/SelectList';
import { View, StyleSheet } from 'react-native';
import { mapExerciseToOption } from '@components/Exercise';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import { getFullDate, logError } from '@utils';
import { useExercisesStore } from '@stores/exercises/store';
import { PageHeaderRightButton } from '@components/Navigation';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { WorkoutExercise } from './WorkoutExercise';
import { useWorkout } from './context/useWorkout';
import { AddWorkoutExercise } from './WorkoutActions';
import type { WorkoutProps } from './Workout.types';
import { useWorkoutAutosave } from './hooks/useWorkoutAutosave';

export const Workout: React.FC<WorkoutProps> = ({ onSave }) => {
	const { fetchExercises, exercises: allExercises } = useExercisesStore();
	const navigation = useNavigation();

	const { addExercise, workout } = useWorkout();
	const { exercises, startDate } = workout;

	useWorkoutAutosave(workout);

	useEffect(() => {
		fetchExercises().catch(logError);
	}, []);

	const handleSave = (): void => {
		onSave(workout);
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <PageHeaderRightButton title="Save" onPress={handleSave} />,
		});
	}, [navigation, workout]);

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{getFullDate(startDate)}</Text>
				<SelectList
					title="Select exercise"
					trigger={AddWorkoutExercise}
					options={allExercises.map(mapExerciseToOption)}
					onSelect={addExercise}
				/>
			</View>

			<KeyboardAwareFlatList
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
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 15,
		paddingBottom: 10,
		borderBottomColor: palette.borderSecondary,
		borderBottomWidth: 1,
	},
	titleText: {
		fontSize: 15,
	},
});
