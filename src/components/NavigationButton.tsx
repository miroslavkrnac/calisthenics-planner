import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface NavigationButtonProps {
	page: RoutesNames;
	icon: keyof typeof Ionicons.glyphMap;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ page, icon }) => {
	const navigation = useNavigation();

	const handlePress = (): void => {
		navigation.navigate(page);
	};

	// @NOTE: needed for proper type checking
	return <Ionicons name={icon} size={32} color="white" onPress={handlePress} />;
};
