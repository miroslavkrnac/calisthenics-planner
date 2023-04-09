import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, ExercisesPage, ExercisePage } from '@pages';
import { palette } from '@colors/palette';
import { WorkoutsPage } from '@pages/WorkoutsPage';
import { WorkoutPage } from '@pages/WorkoutPage';
import { PageHeaderNewEntityButton } from '@components/Navigation/PageHeaderNewEntityButton';
import { Text } from '@components/Text';
import { View, StyleSheet } from 'react-native';
import { useMenuStore } from '@stores/menu/store';
import type { EventArg } from '@react-navigation/native';
import { INITIAL_ROUTE_NAME } from './navigation.const';
import { getActiveRouteName } from './navigation.utils';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackNavigator: React.FC = () => {
	const { setActiveRoute } = useMenuStore();

	const handleSetActiveRoute = (data: EventArg<'focus', false, unknown>): void => {
		setActiveRoute(getActiveRouteName(data.target));
	};

	return (
		<Navigator
			screenListeners={{
				focus: handleSetActiveRoute,
			}}
			initialRouteName={INITIAL_ROUTE_NAME}
			screenOptions={{
				animation: 'none',
				header: ({ options: { title, headerRight } }) => (
					<View style={styles.header}>
						<Text style={styles.headerTitle}>{title}</Text>
						<View>{headerRight && headerRight({ canGoBack: true })}</View>
					</View>
				),
			}}
		>
			<Screen name="home" options={{ title: 'Home' }} component={HomePage} />

			{/* WORKOUT */}
			<Screen
				name="workouts"
				options={{
					title: 'Workouts',
				}}
				component={WorkoutsPage}
			/>
			<Screen name="workout" component={WorkoutPage} />

			{/* EXERCISE */}
			<Screen
				name="exercises"
				options={{
					title: 'Exercises',
					headerRight: () => <PageHeaderNewEntityButton title="Add new" page="exercise" />,
				}}
				component={ExercisesPage}
			/>
			<Screen name="exercise" component={ExercisePage} />
		</Navigator>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 110,
		paddingHorizontal: 20,
		paddingTop: 60,
		backgroundColor: palette.backgroundSecondary,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 30,
	},
});
