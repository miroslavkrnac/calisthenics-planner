import type { Exercise } from '@stores/exercises/store.types';

export interface ExerciseProps extends Exercise {
	isFirst: boolean;
	isLast: boolean;
	onEdit: () => void;
	onDelete: () => void;
}
