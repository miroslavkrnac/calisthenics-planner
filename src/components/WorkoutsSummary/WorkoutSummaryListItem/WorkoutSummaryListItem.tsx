import { palette } from '@colors/palette';
import { getTime } from '@utils';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@components/Text';
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuOptions,
	ContextMenuOption,
	ContextMenuHeader,
} from '@components/ContextMenu';
import type { MenuContextProps } from 'react-native-popup-menu';
import { withMenuContext } from 'react-native-popup-menu';
import type { WorkoutSummaryListItemProps } from './WorkoutSummaryListItem.types';

export const WorkoutsSummaryListItem = withMenuContext<WorkoutSummaryListItemProps & MenuContextProps>(
	({ isFirst, isLast, workout, onDelete, onEdit, ctx }) => {
		const { startDate, endDate } = workout;

		return (
			<ContextMenu name="summary-list-item">
				<ContextMenuTrigger disabled>
					<View style={[styles.item, isFirst && styles.first, isLast && styles.last]}>
						<TouchableOpacity
							style={{ flex: 1 }}
							onPress={onEdit}
							onLongPress={() => ctx.menuActions.openMenu('summary-list-item')}
						>
							<Text style={{ flex: 1 }}>
								{getTime(startDate)} - {getTime(endDate)}
							</Text>
						</TouchableOpacity>
					</View>
				</ContextMenuTrigger>
				<ContextMenuOptions>
					<ContextMenuHeader title="Actions" />
					<ContextMenuOption onSelect={onDelete} text="Delete" />
				</ContextMenuOptions>
			</ContextMenu>
		);
	},
);

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
