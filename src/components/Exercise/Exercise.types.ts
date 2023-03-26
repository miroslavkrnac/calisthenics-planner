export interface Exercise {
	id: string;
	name: string;
}

export interface ExerciseProps extends Exercise {
	isFirst: boolean;
	isLast: boolean;
	onEdit: () => void;
	onDelete: () => void;
}
