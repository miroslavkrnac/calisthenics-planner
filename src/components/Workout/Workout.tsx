import React, { useEffect } from 'react';
import { SelectList } from '@components/SelectList';
import { View, StyleSheet, FlatList } from 'react-native';
import { mapExerciseToOption } from '@components/Exercise';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import { getFullDate, logError } from '@utils';
import { useExercisesStore } from '@stores/exercises/store';
import { useNavigation } from '@react-navigation/native';
import { PageHeaderRightButton } from '@components/Navigation';
import { useWorkoutsStore } from '@stores/workouts/store';
import { WorkoutExercise } from './WorkoutExercise';
import { useWorkout } from './context/useWorkout';
import { AddWorkoutExercise } from './WorkoutActions';

export const Workout: React.FC = () => {
	const { fetchExercises, exercises: allExercises } = useExercisesStore();
	const { saveWorkout } = useWorkoutsStore();

	const { addExercise, workout } = useWorkout();
	const { exercises, startDate } = workout;

	const navigation = useNavigation();

	const handleSaveWorkout = async (): Promise<void> => {
		try {
			await saveWorkout(workout);
			navigation.navigate('workouts');
		} catch (e) {
			logError(e as Error);
		}
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <PageHeaderRightButton title="Save" onPress={handleSaveWorkout} />,
		});
	}, [navigation, workout]);

	useEffect(() => {
		fetchExercises().catch(logError);
	}, []);

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>{getFullDate(new Date(startDate))}</Text>
				<SelectList
					title="Select exercise"
					trigger={AddWorkoutExercise}
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
