import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import { HomePage, ExercisesPage, ExercisePage } from '@pages';
import { BottomPanel } from '@components/BottomPanel';
import { palette } from '@colors/palette';
import { INITIAL_ROUTE_NAME } from '@consts/navigation';

import { ExercisesPageHeaderRight } from '@pages/ExercisesPage/ExercisesPageHeaderRight';

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
				<Screen
					name="exercises"
					options={{
						title: 'Exercises',
						headerRight: ExercisesPageHeaderRight,
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
