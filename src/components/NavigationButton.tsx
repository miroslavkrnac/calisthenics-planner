import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import React from 'react';

export const NavigationButton: React.FC<{ page: RoutesNames; title: string }> = ({ page, title }) => {
	const navigation = useNavigation();

	const handlePress = (): void => {
		navigation.navigate(page);
	};

	return <Button title={title} onPress={handlePress} />;
};
