import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from './NavigationButton';
import { palette } from '../colors/palette';
import { Text } from './Text';

export const BOTTOM_PANEL_HEIGHT = 100;

export const BottomPanel: React.FC = () => (
	<View style={styles.panel}>
		<View style={styles.item}>
			<NavigationButton page="home" icon="home" />
			<Text style={styles.text}>Home</Text>
		</View>
		<View style={styles.item}>
			<NavigationButton page="exercises" icon="list" />
			<Text style={styles.text}>Exercises</Text>
		</View>
		<View style={styles.item}>
			<NavigationButton page="new-exercise" icon="add" />
			<Text style={styles.text}>New exercise</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		paddingTop: 10,
		alignItems: 'flex-start',
		width: '100%',
		borderTopColor: 'black',
		borderTopWidth: 1,
		height: BOTTOM_PANEL_HEIGHT,
		backgroundColor: palette.backgroundSecondary,
	},
	item: {
		flex: 1,
		width: '33.33%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginTop: 3,
		fontSize: 10,
	},
});
