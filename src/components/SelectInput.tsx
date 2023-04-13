import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '@colors/palette';
import { Button } from './Button';
import { Text } from './Text';
import { SelectList } from './SelectList';
import type { OptionType } from './SelectList/SelectList.types';

interface SelectInputProps {
	label: string;
	options: OptionType[];
	selectedValue: string;
	onSelect: (value: string, label: string) => void;
}

interface SelectInputTriggerProps extends Pick<SelectInputProps, 'label' | 'selectedValue'> {
	onPress: VoidFunction;
}

const SelectInputTrigger: React.FC<SelectInputTriggerProps> = ({ selectedValue, label, onPress }) => (
	<>
		{label && <Text style={styles.label}>{label}</Text>}
		<Button title={selectedValue} style={styles.button} textStyle={[styles.input]} onPress={onPress} />
	</>
);

export const SelectInput: React.FC<SelectInputProps> = ({ label, onSelect, options, selectedValue }) => (
	<SelectList
		title="Select exercise"
		trigger={({ onPress }) => <SelectInputTrigger onPress={onPress} selectedValue={selectedValue} label={label} />}
		options={options}
		onSelect={onSelect}
	/>
);

const styles = StyleSheet.create({
	label: {
		paddingBottom: 3,
	},
	button: {
		height: 40,
		borderBottomWidth: 2,
		width: '100%',
		backgroundColor: palette.backgroundPrimary,
		borderColor: palette.backgroundSecondary,
		borderRadius: 0,
		justifyContent: 'center',
	},
	input: {
		color: palette.textPrimary,
		fontWeight: 'normal',
	},
});
