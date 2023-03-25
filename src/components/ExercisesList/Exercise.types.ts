export interface Exercise {
	id: string;
	name: string;
	isFirst: boolean;
	isLast: boolean;
	onEdit: () => void;
	onDelete: () => void;
}
