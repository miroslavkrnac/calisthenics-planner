import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from 'react-native-popup-menu';
import { BottomPanel } from '@components/BottomPanel';
import { StackNavigator } from '@navigation/StackNavigator';

const App: React.FC = () => (
	<MenuProvider>
		<NavigationContainer>
			<StatusBar style="light" />
			<StackNavigator />
			<BottomPanel />
		</NavigationContainer>
	</MenuProvider>
);

export default App;
