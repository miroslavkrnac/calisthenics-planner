import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from '@components/Navigation';
import { palette } from '@colors/palette';

import { useMenuStore } from '@stores/menu/store';

export const BOTTOM_PANEL_HEIGHT = 100;

export const BottomPanel: React.FC = () => {
	const { activeRoute } = useMenuStore();

	return (
		<View style={styles.panel}>
			<NavigationButton page="home" iconProvider="ionicons" icon="home" label="Home" activeRoute={activeRoute} />
			<NavigationButton
				page="workouts"
				icon="dumbbell"
				iconProvider="materialCommunityIcons"
				label="Workouts"
				activeRoute={activeRoute}
			/>
			<NavigationButton
				page="exercises"
				iconProvider="ionicons"
				icon="list"
				label="Exercises"
				activeRoute={activeRoute}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		paddingTop: 10,
		width: '100%',
		borderTopColor: 'black',
		borderTopWidth: 1,
		height: BOTTOM_PANEL_HEIGHT,
		backgroundColor: palette.backgroundSecondary,
	},
});
