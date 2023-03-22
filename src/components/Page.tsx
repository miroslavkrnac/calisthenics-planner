import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Page: FCC = ({ children }) => <View style={styles.container}>{children}</View>;

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
