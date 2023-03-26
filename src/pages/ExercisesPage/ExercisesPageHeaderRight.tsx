import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ExercisesPageHeaderRight: React.FC = () => {
	const { navigate } = useNavigation();

	return (
		<Button
			title="Add"
			style={styles.button}
			textStyle={styles.text}
			onPress={() => navigate('exercise', { id: 'new' })}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 50,
		padding: 8,
		fontSize: 6,
	},
	text: {
		textAlign: 'center',
	},
});
