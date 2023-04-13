import React, { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, FlatList } from 'react-native';
import { Text } from '@components/Text';
import { palette } from '@colors/palette';
import { Button } from '@components/Button';
import { logError } from '@utils';
import type { SelectListProps, OptionType } from './SelectList.types';

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
	}, [JSON.stringify(options)]);

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
				<View style={styles.backdrop}>
					<View style={styles.container}>
						<View style={styles.header}>
							<Button style={styles.closeButton} title="Close" onPress={closeModal} />
							<Text style={styles.title} type="secondary">
								{title}
							</Text>
						</View>
						<FlatList
							style={styles.selectList}
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
					</View>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	backdrop: {
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
	},
	container: {
		backgroundColor: palette.backgroundPrimary,
		marginTop: '10%',
		paddingBottom: 200,
	},
	header: {
		paddingTop: 25,
		paddingBottom: 20,
		backgroundColor: palette.backgroundSecondary,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: palette.textPrimary,
		textAlign: 'center',
		paddingTop: 15,
	},
	selectItem: {
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: palette.backgroundSecondary,
		borderRadius: 5,
	},
	selectList: {
		marginTop: 25,
	},
	selectItemText: {
		color: palette.textPrimary,
		fontWeight: 'normal',
	},
	closeButton: {
		backgroundColor: 'unset',
		position: 'absolute',
		bottom: 13,
		left: 10,
		padding: 10,
		zIndex: 2,
	},
});
