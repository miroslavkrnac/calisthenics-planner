import React from 'react';
import type { TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';

interface ButtonProps extends TouchableOpacityProps {
	type?: 'primary' | 'secondary';
	textStyle?: StyleProp<TextStyle>;
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ type = 'primary', title, style, textStyle, ...props }) => (
	<TouchableOpacity
		{...props}
		style={[styles.button, type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary, style]}
	>
		<Text type={type} style={[styles.text, textStyle]}>
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
