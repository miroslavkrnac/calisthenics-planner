import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Page: FCC = ({ children }) => (
	<View style={styles.container}>
		<StatusBar style="auto" />
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 50,
		marginBottom: 30,
		marginLeft: 15,
		marginRight: 15,
	},
});
