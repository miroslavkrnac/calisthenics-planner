import { View, StyleSheet } from 'react-native';
import React from 'react';
import { ExerciseMenu } from '@components/ExercisesList/ExerciseMenu';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import type { Exercise as ExerciseProps } from './Exercise.types';

export const Exercise: React.FC<ExerciseProps> = ({ name }) => (
	<View style={styles.item}>
		<Text>{name}</Text>
		<ExerciseMenu />
	</View>
);

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: palette.backgroundSecondary,
		marginTop: 20,
		padding: 20,
	},
});
