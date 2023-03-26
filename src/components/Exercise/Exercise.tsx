import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuOptions,
	ContextMenuOption,
	ContextMenuHeader,
} from '@components/ContextMenu';
import type { ExerciseProps } from './Exercise.types';

export const Exercise: React.FC<ExerciseProps> = ({ name, isFirst, isLast, onDelete, onEdit }) => (
	<ContextMenu>
		<ContextMenuTrigger triggerOnLongPress>
			<View style={[styles.item, isFirst && styles.first, isLast && styles.last]}>
				<Text>{name}</Text>
			</View>
		</ContextMenuTrigger>
		<ContextMenuOptions>
			<ContextMenuHeader title="Actions" />
			<ContextMenuOption onSelect={onEdit} text="Edit" />
			<ContextMenuOption onSelect={onDelete} text="Delete" />
		</ContextMenuOptions>
	</ContextMenu>
);

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: palette.backgroundSecondary,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: palette.borderSecondary,
	},
	first: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	last: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomWidth: 0,
	},
});
