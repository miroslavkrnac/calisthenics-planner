import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';

export const BottomPanel: React.FC = () => (
	<View style={styles.panel}>
		<Link to="/">
			<Text>Home</Text>
		</Link>
		<Link to="/exercises">
			<Text>Exercises</Text>
		</Link>
		<Link to="/new-exercise">
			<Text>New exercise</Text>
		</Link>
	</View>
);

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
});
