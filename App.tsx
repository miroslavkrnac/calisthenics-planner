import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ExerciseForm } from './src/components/ExerciseForm';
import { ExercisesList } from './src/components/ExercisesList';
import { Home } from './src/pages/Home';
import { BottomPanel } from './src/components/BottomPanel';

const { Screen, Navigator } = createNativeStackNavigator();

const App: React.FC = () => (
	<NavigationContainer>
		<StatusBar style="auto" />

		<Navigator initialRouteName="new-exercise">
			<Screen name="home" options={{ title: 'Home' }} component={Home} />
			<Screen name="exercises" options={{ title: 'Exercises' }} component={ExercisesList} />
			<Screen name="new-exercise" options={{ title: 'New exercise' }} component={ExerciseForm} />
		</Navigator>

		<BottomPanel />
	</NavigationContainer>
);

export default App;
