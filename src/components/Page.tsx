import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { palette } from '@colors/palette';

export const Page: FCC = ({ children }) => (
	<SafeAreaView style={styles.container}>
		<View style={styles.view}>{children}</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.backgroundPrimary,
		position: 'relative',
	},
	view: {
		flex: 1,
		padding: 20,
		marginBottom: 65,
	},
});
