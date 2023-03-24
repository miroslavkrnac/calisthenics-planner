import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { palette } from '../colors/palette';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {
	type?: 'primary' | 'secondary';
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ type = 'primary', title, style, ...props }) => (
	<TouchableOpacity
		{...props}
		style={[style, styles.button, type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary]}
	>
		<Text type={type} style={styles.text}>
			{title}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonPrimary: {
		backgroundColor: palette.primary,
	},
	buttonSecondary: {
		backgroundColor: palette.secondary,
	},
	button: {
		borderRadius: 10,
	},
	text: {
		fontWeight: 'bold',
	},
});
