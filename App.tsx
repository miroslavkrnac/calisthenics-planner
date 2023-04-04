import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import { HomePage, ExercisesPage, ExercisePage } from '@pages';
import { BottomPanel } from '@components/BottomPanel';
import { palette } from '@colors/palette';
import { INITIAL_ROUTE_NAME } from '@consts/navigation';
import { WorkoutsPage } from '@pages/WorkoutsPage';
import { WorkoutPage } from '@pages/WorkoutPage';
import { PageHeaderNewEntityButton } from '@components/Navigation/PageHeaderNewEntityButton';
import { Text } from '@components/Text';
import { View, StyleSheet } from 'react-native';

const { Screen, Navigator } = createNativeStackNavigator();

const App: React.FC = () => (
	<MenuProvider>
		<NavigationContainer>
			<StatusBar style="light" />

			<Navigator
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

			<BottomPanel />
		</NavigationContainer>
	</MenuProvider>
);

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

export default App;
