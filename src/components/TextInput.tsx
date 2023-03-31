import React from 'react';
import type { StyleProp, TextInputProps as TextInputNativeProps, ViewStyle } from 'react-native';
import { View, TextInput as TextInputNative, StyleSheet } from 'react-native';
import { palette } from '@colors/palette';
import { Text } from '@components/Text';

interface TextInputProps extends TextInputNativeProps {
	label?: string;
	containerStyle?: StyleProp<ViewStyle>;
}

export const TextInput: React.FC<TextInputProps> = ({ style, label, containerStyle, ...props }) => (
	<View style={containerStyle}>
		{label && <Text style={styles.label}>{label}</Text>}
		<TextInputNative
			keyboardAppearance="dark"
			style={[styles.input, style]}
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
