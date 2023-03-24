import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { palette } from '../colors/palette';

interface NavigationButtonProps {
	page: RoutesNames;
	icon: keyof typeof Ionicons.glyphMap;
	label: string;
	activeRoute: string;
	onNavigation: (page: string) => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ page, icon, label, activeRoute, onNavigation }) => {
	const { navigate } = useNavigation();

	const handlePress = (): void => {
		navigate(page);
		onNavigation(page);
	};

	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={handlePress} style={styles.touch}>
				<Ionicons name={icon} size={32} color={activeRoute === page ? palette.primary : palette.textPrimary} />
				<Text style={styles.text}>{label}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		width: '33.33%',
	},
	touch: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	text: {
		marginTop: 3,
		fontSize: 10,
	},
});
