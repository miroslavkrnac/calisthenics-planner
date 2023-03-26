import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from '@components/NavigationButton';
import { palette } from '@colors/palette';
import { INITIAL_ROUTE_NAME } from '@consts/navigation';

export const BOTTOM_PANEL_HEIGHT = 100;

export const BottomPanel: React.FC = () => {
	const [activeRoute, setActiveRoute] = useState(INITIAL_ROUTE_NAME);

	const handleNavigation = (page: string): void => {
		setActiveRoute(page);
	};

	return (
		<View style={styles.panel}>
			<NavigationButton
				page="home"
				iconProvider="ionicons"
				icon="home"
				label="Home"
				activeRoute={activeRoute}
				onNavigation={handleNavigation}
			/>
			<NavigationButton
				page="workouts"
				icon="dumbbell"
				iconProvider="materialCommunityIcons"
				label="Workouts"
				activeRoute={activeRoute}
				onNavigation={handleNavigation}
			/>
			<NavigationButton
				page="exercises"
				iconProvider="ionicons"
				icon="list"
				label="Exercises"
				activeRoute={activeRoute}
				onNavigation={handleNavigation}
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
		alignItems: 'flex-start',
		width: '100%',
		borderTopColor: 'black',
		borderTopWidth: 1,
		height: BOTTOM_PANEL_HEIGHT,
		backgroundColor: palette.backgroundSecondary,
	},
});
