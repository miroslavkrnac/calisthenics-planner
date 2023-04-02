import type { WorkoutType } from '@components/Workout/Workout.types';

export interface WorkoutSummaryListItemProps {
	workout: WorkoutType;
	isFirst: boolean;
	isLast: boolean;
	onEdit: () => void;
	onDelete: () => void;
}
