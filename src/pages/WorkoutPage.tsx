import React, { useEffect, useState } from 'react';
import { Page } from '@components/Page';

import { Workout } from '@components/Workout';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { WorkoutProvider } from '@components/Workout/context/WorkoutProvider';
import type { WorkoutType } from '@components/Workout/Workout.types';
import { createDefaultWorkout } from '@components/Workout/Workout.utils';
import { Text } from '@components/Text';

export const WorkoutPage: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [workout, setWorkout] = useState<WorkoutType | undefined>();

	useSetEntityStateTitle();

	useEffect(() => {
		setLoading(true);
		setWorkout(createDefaultWorkout());
		setLoading(false);
	}, []);

	if (loading || !workout) {
		return <Text>Loading...</Text>;
	}

	return (
		<Page>
			<WorkoutProvider workout={workout}>
				<Workout />
			</WorkoutProvider>
		</Page>
	);
};
