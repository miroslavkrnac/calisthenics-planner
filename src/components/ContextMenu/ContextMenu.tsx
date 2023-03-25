import React from 'react';
import { palette } from '@colors/palette';
import { StyleSheet, View } from 'react-native';
import { Text } from '@components/Text';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const menuStyles = {
	optionsContainer: {
		backgroundColor: palette.secondary,
		borderRadius: 10,
	},
	optionWrapper: {
		padding: 10,
		borderTopWidth: 0.3,
		borderTopColor: palette.textSecondary,
	},
	optionText: {
		color: palette.backgroundSecondary,
	},
};

// Had to do i like this, because if i create new Wrapper component for ContextMenuOptions, it will break its functionality
export const ContextMenu = Menu;
export const ContextMenuTrigger = MenuTrigger;
export const ContextMenuOption = MenuOption;
export const ContextMenuOptions = MenuOptions;

ContextMenuOptions.defaultProps = {
	customStyles: menuStyles,
};

export const ContextMenuHeader: React.FC<{ title: string }> = ({ title }) => (
	<View style={styles.header}>
		<Text style={styles.headerText}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	header: {
		padding: 7,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	headerText: {
		color: palette.backgroundSecondary,
		fontSize: 10,
		textAlign: 'center',
	},
});
