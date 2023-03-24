import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../Text';
import { palette } from '../../colors/palette';
import type { Exercise as ExerciseProps } from './Exercise.types';

export const Exercise: React.FC<ExerciseProps> = ({ name }) => (
	<View style={styles.item}>
		<Text>{name}</Text>
		<View>
			<Ionicons name="ios-trash-bin-outline" size={24} color={palette.error} />
		</View>
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
