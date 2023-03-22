import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from './NavigationButton';

export const BottomPanel: React.FC = () => (
	<View style={styles.panel}>
		<NavigationButton page="home" title="Home" />
		<NavigationButton page="exercises" title="Exercises" />
		<NavigationButton page="new-exercise" title="New Exercise" />
	</View>
);

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: '100%',
		borderTopColor: 'black',
		borderTopWidth: 1,
		height: 100,
	},
});
