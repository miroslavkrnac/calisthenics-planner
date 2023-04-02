import React from 'react';
import { Page } from '@components/Page';
import { Workout } from '@components/Workout';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { WorkoutProvider } from '@components/Workout/context/WorkoutProvider';
import { createDefaultWorkout } from '@components/Workout/Workout.utils';
import { Text } from '@components/Text';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@navigation/types';
import { useWorkoutsStore } from '@stores/workouts/store';
import { logError } from '@utils';
import type { WorkoutType } from '@components/Workout/Workout.types';

export const WorkoutPage: React.FC = () => {
	const { workouts, createNewWorkout, editWorkout } = useWorkoutsStore();
	const { params } = useRoute<RouteProp<'exercise'>>();
	const navigation = useNavigation();

	const isNew = params.id === 'new';
	const defaultWorkout = createDefaultWorkout();
	const workout = isNew ? defaultWorkout : workouts.find(({ id }) => id === params.id);

	useSetEntityStateTitle();

	const handleSaveWorkout = async (w: WorkoutType): Promise<void> => {
		try {
			isNew ? await createNewWorkout(w) : await editWorkout(w);
			navigation.navigate('workouts');
		} catch (e) {
			logError(e as Error);
		}
	};

	return (
		<Page>
			{!workout ? (
				<Text>Loading...</Text>
			) : (
				<WorkoutProvider workout={workout}>
					<Workout isNew={isNew} onSave={handleSaveWorkout} />
				</WorkoutProvider>
			)}
		</Page>
	);
};
