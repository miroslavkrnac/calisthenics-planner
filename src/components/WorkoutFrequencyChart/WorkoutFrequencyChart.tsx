import { useWorkoutsStore } from '@stores/workouts/store';
import React, { useEffect, useMemo } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import { headers } from '@styles/headers';
import { logError, weekDaysShort } from '@utils';
import { getCurrentWeekWorkoutsCount } from './WorkoutFrequencyChart.utils';

export const WorkoutFrequencyChart: React.FC = () => {
	const { workouts, fetchWorkouts } = useWorkoutsStore();

	useEffect(() => {
		fetchWorkouts().catch(logError);
	}, []);

	const data = useMemo(
		() => ({
			labels: weekDaysShort,
			datasets: [
				{
					data: getCurrentWeekWorkoutsCount(workouts),
				},
			],
		}),
		[JSON.stringify(workouts)],
	);

	return (
		<>
			<Text style={styles.header}>Workout frequency this week</Text>
			<BarChart
				data={data}
				height={300}
				width={Dimensions.get('window').width}
				chartConfig={{
					color: () => palette.secondary,
					barPercentage: 0.4,
				}}
				yAxisLabel=""
				yAxisSuffix=""
				withInnerLines={false}
				yAxisInterval={1}
				style={styles.chart}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	chart: {
		marginLeft: -25,
	},
	header: headers.h3,
});
