import { useWorkoutsStore } from '@stores/workouts/store';
import { getCalendarDate, getTime } from '@utils';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import type { WorkoutSummaryListProps } from './WorkoutSummaryList.types';

export const WorkoutsSummaryList: React.FC<WorkoutSummaryListProps> = ({ selectedDate }) => {
	const { workouts } = useWorkoutsStore();
	const selectedWorkouts = workouts.filter(({ startDate }) => getCalendarDate(startDate) === selectedDate);

	return (
		<FlatList
			style={styles.list}
			data={selectedWorkouts}
			renderItem={({ item: { startDate, endDate }, index }) => (
				<View style={[styles.item, index === 0 && styles.first, index === workouts.length - 1 && styles.last]}>
					<Text>
						{getTime(startDate)} - {getTime(endDate)}
					</Text>
				</View>
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
	item: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: palette.backgroundSecondary,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: palette.borderSecondary,
	},
	first: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	last: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomWidth: 0,
	},
});
