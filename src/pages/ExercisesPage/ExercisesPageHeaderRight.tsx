import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ExercisesPageHeaderRight: React.FC = () => {
	const { navigate } = useNavigation();

	return <Button title="Add" style={styles.newExerciseButton} onPress={() => navigate('exercise', { id: 'new' })} />;
};

const styles = StyleSheet.create({
	newExerciseButton: {
		width: 50,
		padding: 8,
		fontSize: 6,
	},
});
