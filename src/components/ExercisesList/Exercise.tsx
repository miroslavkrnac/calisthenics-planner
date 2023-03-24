import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { palette } from '../../colors/palette';

export const Exercise: React.FC<{ name: string }> = ({ name }) => (
	<View style={styles.item}>
		<Text>{name}</Text>
	</View>
);

const styles = StyleSheet.create({
	item: {
		width: '100%',
		backgroundColor: palette.backgroundSecondary,
		marginTop: 50,
		padding: 20,
	},
});
