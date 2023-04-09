import React, { useEffect, useState } from 'react';
import { Page } from '@components/Page';
import { Workout } from '@components/Workout';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { WorkoutProvider } from '@components/Workout/context/WorkoutProvider';
import { getExistingOrDefaultWorkout } from '@components/Workout/Workout.utils';
import { Text } from '@components/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/navigation.types';
import { useWorkoutsStore } from '@stores/workouts/store';
import { logError } from '@utils';
import type { WorkoutType } from '@components/Workout/Workout.types';

export const WorkoutPage: React.FC = () => {
	const { createOrEditWorkout } = useWorkoutsStore();
	const { params } = useRoute<RouteProp<'workout'>>();
	const navigation = useNavigation();

	const [workout, setWorkout] = useState<WorkoutType | undefined>();
	const [loading, setLoading] = useState(false);

	useSetEntityStateTitle();

	useEffect(() => {
		setLoading(true);
		getExistingOrDefaultWorkout(params)
			.then(setWorkout)
			.catch(logError)
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const handleSaveWorkout = async (w: WorkoutType): Promise<void> => {
		try {
			await createOrEditWorkout(w);
			navigation.navigate('workouts');
		} catch (e) {
			logError(e as Error);
		}
	};

	return (
		<Page>
			{!workout || loading ? (
				<Text>Loading...</Text>
			) : (
				<WorkoutProvider workout={workout}>
					<Workout onSave={handleSaveWorkout} />
				</WorkoutProvider>
			)}
		</Page>
	);
};
