import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PageHeaderRightButton } from './PageHeaderRightButton';

interface PageHeaderNewEntityButtonProps {
	title: string;
	page: 'exercise' | 'workout';
}

export const PageHeaderNewEntityButton: React.FC<PageHeaderNewEntityButtonProps> = ({ title, page }) => {
	const { navigate } = useNavigation();

	return <PageHeaderRightButton title={title} onPress={() => navigate(page, { id: 'new' })} />;
};
