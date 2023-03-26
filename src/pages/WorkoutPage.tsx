import React from 'react';
import { Text } from '@components/Text';
import { Page } from '@components/Page';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';

export const WorkoutPage: React.FC = () => {
	useSetEntityStateTitle();

	return (
		<Page>
			<Text>One workout</Text>
		</Page>
	);
};
