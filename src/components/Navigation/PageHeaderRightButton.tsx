import { Button } from '@components/Button';
import React from 'react';
import { StyleSheet } from 'react-native';

interface PageHeaderRightButtonProps {
	title: string;
	onPress: () => void;
}

export const PageHeaderRightButton: React.FC<PageHeaderRightButtonProps> = ({ title, onPress }) => (
	<Button title={title} style={styles.button} textStyle={styles.text} onPress={onPress} />
);

const styles = StyleSheet.create({
	button: {
		padding: 8,
	},
	text: {
		textAlign: 'center',
		fontSize: 12,
		textTransform: 'uppercase',
	},
});
