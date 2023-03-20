import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Test: React.FC = () => (
	<View style={styles.container}>
		<Text>Testa!</Text>
		<StatusBar style="auto" />
	</View>
);

export default Test;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
