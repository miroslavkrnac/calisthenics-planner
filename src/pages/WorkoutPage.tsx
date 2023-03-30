import React from 'react';
import { Page } from '@components/Page';

import { Workout } from '@components/Workout';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { WorkoutProvider } from '@components/Workout/context/WorkoutProvider';

export const WorkoutPage: React.FC = () => {
	useSetEntityStateTitle();

	return (
		<Page>
			<WorkoutProvider>
				<Workout />
			</WorkoutProvider>
		</Page>
	);
};
