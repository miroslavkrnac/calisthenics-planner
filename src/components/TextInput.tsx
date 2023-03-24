import React from 'react';
import type { TextInputProps as TextInputNativeProps } from 'react-native';
import { View, TextInput as TextInputNative, StyleSheet } from 'react-native';
import { palette } from '../colors/palette';
import { Text } from './Text';

interface TextInputProps extends TextInputNativeProps {
	label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ style, label, ...props }) => (
	<View>
		{label && <Text style={styles.label}>{label}</Text>}
		<TextInputNative
			keyboardAppearance="dark"
			style={[style, styles.input]}
			placeholderTextColor={palette.textSecondary}
			{...props}
		/>
	</View>
);

const styles = StyleSheet.create({
	label: {
		paddingBottom: 3,
		paddingLeft: 3,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderRadius: 7,
		paddingLeft: 5,
		backgroundColor: palette.secondary,
		color: palette.backgroundPrimary,
	},
});
