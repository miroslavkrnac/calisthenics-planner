import { useNavigation } from '@react-navigation/native';
import { useWorkoutsStore } from '@stores/workouts/store';
import { DATE_TIME_FORMATS, format, getCalendarDate } from '@utils';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import { PageHeaderRightButton } from '@components/Navigation';
import { headers } from '@styles/headers';
import { confirm } from '@utils/alert';
import { WorkoutsSummaryListItem } from '../WorkoutSummaryListItem/WorkoutSummaryListItem';
import type { WorkoutSummaryListProps } from './WorkoutSummaryList.types';

export const WorkoutsSummaryList: React.FC<WorkoutSummaryListProps> = ({ selectedDate }) => {
	const { workouts, deleteWorkout } = useWorkoutsStore();
	const navigation = useNavigation();
	const selectedWorkouts = workouts.filter(
		({ startDate }) => getCalendarDate(startDate) === getCalendarDate(selectedDate),
	);

	const selectedIsToday = getCalendarDate() === getCalendarDate(selectedDate);

	const handleEdit = (id: string): void => {
		navigation.navigate('workout', { id });
	};

	const handleDelete = (id: string): void => {
		confirm({
			title: 'Delete workout',
			message: 'Are you sure you want to delete this workout?',
			onConfirm: () => deleteWorkout(id),
		});
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<PageHeaderRightButton
					title={selectedIsToday ? 'Start workout' : 'Prepare workout'}
					onPress={() => navigation.navigate('workout', { id: 'new', startDate: selectedDate })}
				/>
			),
		});
	}, [navigation, selectedDate]);

	return (
		<>
			<Text style={styles.header}>Workouts on: {format(selectedDate, DATE_TIME_FORMATS.DATE_SYSTEM)}</Text>

			{!selectedWorkouts.length ? (
				<Text style={styles.noWorkouts}>There are no workouts yet</Text>
			) : (
				<FlatList
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
			)}
		</>
	);
};

const styles = StyleSheet.create({
	header: headers.h3,
	noWorkouts: {
		color: palette.textSecondary,
	},
});
