import React from 'react';
import { StyleSheet, Text as TextNative, type TextProps as TextPropsNative } from 'react-native';
import { palette } from '../colors/palette';

interface TextProps extends TextPropsNative {
	type?: 'primary' | 'secondary';
}

export const Text: FCC<TextProps> = ({ type = 'primary', style, children }) => (
	<TextNative style={[style, type === 'primary' ? styles.textPrimary : styles.textSecondary]}>{children}</TextNative>
);

const styles = StyleSheet.create({
	textPrimary: {
		color: palette.textPrimary,
	},
	textSecondary: {
		color: palette.textSecondary,
	},
});
