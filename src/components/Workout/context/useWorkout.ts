import React from 'react';
import type { WorkoutState } from './WorkoutProvider.types';
import { WorkoutContext } from './WorkoutProvider';

export const useWorkout = (): WorkoutState => {
	const context = React.useContext(WorkoutContext);

	if (context === undefined) {
		throw new Error('useWorkout must be used within a WorkoutProvider');
	}

	return context;
};
