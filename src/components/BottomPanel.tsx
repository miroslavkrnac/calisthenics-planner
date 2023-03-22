import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from './NavigationButton';

export const BOTTOM_PANEL_HEIGHT = 100;

export const BottomPanel: React.FC = () => (
	<View style={styles.panel}>
		<NavigationButton page="home" icon="home" />
		<NavigationButton page="exercises" icon="list" />
		<NavigationButton page="new-exercise" icon="add" />
	</View>
);

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'flex-start',
		width: '100%',
		borderTopColor: 'black',
		borderTopWidth: 1,
		height: BOTTOM_PANEL_HEIGHT,
		backgroundColor: 'black',
	},
});
