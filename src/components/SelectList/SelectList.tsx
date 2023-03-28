import React, { useEffect, useState } from 'react';
import { Modal, SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import { Button } from '@components/Button';
import { logError } from '@utils';

export interface OptionType {
	value: string;
	label: string;
}

interface SelectListProps {
	trigger: React.FC<{ onPress: VoidFunction }>;
	title: string;
	options: OptionType[] | (() => Promise<OptionType[]>);
	onSelect?: (value: string, label: string) => void;
}

export const SelectList: React.FC<SelectListProps> = ({ trigger: TriggerCom, title, options, onSelect }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectOptions, setSelectOptions] = useState<OptionType[]>([]);

	useEffect(() => {
		if (Array.isArray(options)) {
			setSelectOptions(options);

			return;
		}

		options()
			.then((data) => setSelectOptions(data))
			.catch(logError);
	}, []);

	const handleSelect = (value: string, label: string): void => {
		onSelect?.(value, label);
		closeModal();
	};

	const closeModal = (): void => {
		setModalVisible(false);
	};

	return (
		<>
			<TriggerCom onPress={() => setModalVisible(true)} />

			<Modal animationType="slide" transparent visible={modalVisible} onRequestClose={closeModal}>
				<SafeAreaView style={styles.container}>
					<View>
						<Button style={styles.closeButton} title="Close" onPress={closeModal} />
						<Text style={styles.title} type="secondary">
							{title}
						</Text>
					</View>
					<FlatList
						data={selectOptions}
						renderItem={({ item: { label, value } }) => (
							<Button
								style={styles.selectItem}
								textStyle={styles.selectItemText}
								title={label}
								type="secondary"
								key={value}
								onPress={() => handleSelect(value, label)}
							/>
						)}
						keyExtractor={({ value }) => value}
						showsVerticalScrollIndicator={false}
					/>
				</SafeAreaView>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.backgroundSecondary,
		marginTop: '50%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: palette.textPrimary,
		textAlign: 'center',
		paddingTop: 15,
		paddingBottom: 45,
	},
	selectItem: {
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: palette.secondary,
		borderRadius: 5,
	},
	selectItemText: {
		color: palette.backgroundSecondary,
	},
	closeButton: {
		backgroundColor: 'unset',
		position: 'absolute',
		top: 10,
		left: 10,
		padding: 10,
		zIndex: 2,
	},
});
