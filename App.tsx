import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import { Home } from './src/pages/Home';
import { Exercises } from './src/pages/Exercises';
import { BottomPanel } from './src/components/BottomPanel';
import { palette } from './src/colors/palette';
import { NewExercise } from './src/pages/NewExercise';
import { INITIAL_ROUTE_NAME } from './src/consts/navigation';

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
				<Screen name="home" options={{ title: 'Home' }} component={Home} />
				<Screen name="exercises" options={{ title: 'Exercises' }} component={Exercises} />
				<Screen name="new-exercise" options={{ title: 'New exercise' }} component={NewExercise} />
			</Navigator>

			<BottomPanel />
		</NavigationContainer>
	</MenuProvider>
);

export default App;
