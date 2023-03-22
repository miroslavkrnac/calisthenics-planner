import React from 'react';
import type { TouchableWithoutFeedbackProps } from 'react-native';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export const DismissKeyboardView: FCC<TouchableWithoutFeedbackProps> = ({ children, ...props }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} {...props}>
		<View style={{ flex: 1 }}>{children}</View>
	</TouchableWithoutFeedback>
);
