import type { Exercise } from '@stores/exercises/store.types';

export interface ExerciseProps extends Omit<Exercise, 'type'> {
	isFirst: boolean;
	isLast: boolean;
	onEdit: () => void;
	onDelete: () => void;
}
