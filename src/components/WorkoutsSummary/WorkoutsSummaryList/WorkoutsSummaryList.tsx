import { useNavigation } from '@react-navigation/native';
import { useWorkoutsStore } from '@stores/workouts/store';
import { getCalendarDate, logError } from '@utils';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { WorkoutsSummaryListItem } from '../WorkoutSummaryListItem/WorkoutSummaryListItem';
import type { WorkoutSummaryListProps } from './WorkoutSummaryList.types';

export const WorkoutsSummaryList: React.FC<WorkoutSummaryListProps> = ({ selectedDate }) => {
	const { workouts, deleteWorkout } = useWorkoutsStore();
	const navigation = useNavigation();
	const selectedWorkouts = workouts.filter(({ startDate }) => getCalendarDate(startDate) === selectedDate);

	const handleEdit = (id: string): void => {
		navigation.navigate('workout', { id });
	};

	const handleDelete = (id: string): void => {
		deleteWorkout(id).catch(logError);
	};

	return (
		<FlatList
			style={styles.list}
			data={selectedWorkouts}
			renderItem={({ item: workout, index }) => (
				<WorkoutsSummaryListItem
					isFirst={index === 0}
					isLast={index === selectedWorkouts.length - 1}
					workout={workout}
					onEdit={() => handleEdit(workout.id)}
					onDelete={() => handleDelete(workout.id)}
				/>
			)}
			keyExtractor={({ id }) => id}
			showsVerticalScrollIndicator={false}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		marginTop: 30,
	},
});
