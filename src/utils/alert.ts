import { Alert } from 'react-native';

export const confirm = ({
	title,
	message,
	onCancel,
	onConfirm,
}: {
	title: string;
	message: string;
	onConfirm: VoidFunction;
	onCancel?: VoidFunction;
}): void => {
	Alert.alert(title, message, [
		{
			text: 'Cancel',
			style: 'cancel',
			onPress: onCancel,
		},
		{
			text: 'Yes',
			onPress: onConfirm,
		},
	]);
};
