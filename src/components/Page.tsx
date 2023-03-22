import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DismissKeyboardView } from './DismissKeyboardView';
import { BOTTOM_PANEL_HEIGHT } from './BottomPanel';

export const Page: FCC = ({ children }) => (
	<>
		<DismissKeyboardView>
			<View style={styles.container}>{children}</View>
		</DismissKeyboardView>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginBottom: BOTTOM_PANEL_HEIGHT,
		position: 'relative',
		padding: 20,
	},
});
