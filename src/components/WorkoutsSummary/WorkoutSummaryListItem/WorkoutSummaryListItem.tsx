import { palette } from '@colors/palette';
import { getTime } from '@utils';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuOptions,
	ContextMenuOption,
	ContextMenuHeader,
} from '@components/ContextMenu';
import type { WorkoutSummaryListItemProps } from './WorkoutSummaryListItem.types';

export const WorkoutsSummaryListItem: React.FC<WorkoutSummaryListItemProps> = ({
	isFirst,
	isLast,
	workout,
	onDelete,
	onEdit,
}) => {
	const { startDate, endDate } = workout;

	return (
		<ContextMenu>
			<ContextMenuTrigger triggerOnLongPress>
				<View style={[styles.item, isFirst && styles.first, isLast && styles.last]}>
					<Text>
						{getTime(startDate)} - {getTime(endDate)}
					</Text>
				</View>
			</ContextMenuTrigger>
			<ContextMenuOptions>
				<ContextMenuHeader title="Actions" />
				<ContextMenuOption onSelect={onEdit} text="Edit" />
				<ContextMenuOption onSelect={onDelete} text="Delete" />
			</ContextMenuOptions>
		</ContextMenu>
	);
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: palette.backgroundSecondary,
		paddingHorizontal: 20,
		paddingVertical: 13,
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
