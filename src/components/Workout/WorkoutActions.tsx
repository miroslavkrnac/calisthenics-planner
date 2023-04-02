import { palette } from '@colors/palette';
import { Icon } from '@components/Icon';
import type { SelectListProps } from '@components/SelectList/SelectList.types';
import React from 'react';
import { StyleSheet } from 'react-native';

export const AddWorkoutExercise: SelectListProps['trigger'] = ({ onPress }) => (
	<Icon name="add-circle-outline" provider="ionicons" size={25} onPress={onPress} style={styles.addExercise} />
);

const styles = StyleSheet.create({
	addExercise: {
		color: palette.textPrimary,
		marginLeft: 'auto',
	},
});
