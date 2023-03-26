import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

interface PageHeaderRightButtonProps {
	title: string;
	page: 'exercise' | 'workout';
}

export const PageHeaderRightButton: React.FC<PageHeaderRightButtonProps> = ({ title, page }) => {
	const { navigate } = useNavigation();

	return (
		<Button
			title={title}
			style={styles.button}
			textStyle={styles.text}
			onPress={() => navigate(page, { id: 'new' })}
		/>
	);
};

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
