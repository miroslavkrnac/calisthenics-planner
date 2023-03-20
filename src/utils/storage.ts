import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageItem = async <T>(key: string, defaultValue: any = {}): Promise<T> => {
	try {
		const value = await AsyncStorage.getItem(key);

		return value === null ? defaultValue : JSON.parse(value);
	} catch (e) {
		return defaultValue;
	}
};

export const storeData = async (key: string, value: any): Promise<boolean> => {
	try {
		const jsonValue = JSON.stringify(value);

		await AsyncStorage.setItem(key, jsonValue);

		return true;
	} catch (e) {
		return false;
	}
};
