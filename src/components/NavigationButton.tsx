import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';
import type { Routes, RoutesNames } from '@navigation/types';
import type { IconProps } from './Icon';
import { Icon } from './Icon';

interface NavigationButtonProps<RouteName extends RoutesNames> {
	page: RouteName;
	pageParams?: Routes[RouteName];
	icon: IconProps['name'];
	iconProvider: IconProps['provider'];
	label: string;
	activeRoute: string;
	onNavigation: (page: string) => void;
}

export const NavigationButton = <RouteName extends RoutesNames>({
	page,
	iconProvider,
	icon,
	label,
	activeRoute,
	onNavigation,
	pageParams,
}: NavigationButtonProps<RouteName>): JSX.Element => {
	const { navigate } = useNavigation();

	const handlePress = (): void => {
		// necessary due to bad typing in react-navigation
		navigate<any>(page, pageParams);
		onNavigation(page);
	};

	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={handlePress} style={styles.touch}>
				<Icon
					name={icon}
					provider={iconProvider}
					size={32}
					color={activeRoute === page ? palette.primary : palette.textSecondary}
				/>
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
