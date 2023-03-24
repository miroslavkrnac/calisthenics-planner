import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BOTTOM_PANEL_HEIGHT } from './BottomPanel';
import { palette } from '../colors/palette';

export const Page: FCC = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.backgroundPrimary,
		marginBottom: BOTTOM_PANEL_HEIGHT,
		position: 'relative',
		padding: 20,
	},
});
