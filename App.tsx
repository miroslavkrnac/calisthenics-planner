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
import { PageHeaderRightButton } from '@components/Navigation';
import { WorkoutPage } from '@pages/WorkoutPage';

const { Screen, Navigator } = createNativeStackNavigator();

const App: React.FC = () => (
	<MenuProvider>
		<NavigationContainer>
			<StatusBar style="light" />

			<Navigator
				initialRouteName={INITIAL_ROUTE_NAME}
				screenOptions={{
					headerStyle: { backgroundColor: palette.backgroundSecondary },
					headerTintColor: palette.textPrimary,
					headerBackVisible: false,
					animation: 'none',
				}}
			>
				<Screen name="home" options={{ title: 'Home' }} component={HomePage} />

				{/* WORKOUT */}
				<Screen
					name="workouts"
					options={{
						title: 'Workouts',
						headerRight: () => <PageHeaderRightButton title="Add new" page="workout" />,
					}}
					component={WorkoutsPage}
				/>
				<Screen name="workout" component={WorkoutPage} />

				{/* EXERCISE */}
				<Screen
					name="exercises"
					options={{
						title: 'Exercises',
						headerRight: () => <PageHeaderRightButton title="Add new" page="exercise" />,
					}}
					component={ExercisesPage}
				/>
				<Screen name="exercise" component={ExercisePage} />
			</Navigator>

			<BottomPanel />
		</NavigationContainer>
	</MenuProvider>
);

export default App;
